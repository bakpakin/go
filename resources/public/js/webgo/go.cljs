(ns webgo.go
  (:require [clojure.set :as set]))

(defn empty-board
  "Creates a new empty board."
  [size]
  {:size size
   :turn :black
   :move 1
   :last-move nil
   :passed? false
   :previous-board nil
   :stones {}})

(defn pos-valid?
  "Checks if a position is on the board."
  [pos board]
  (let [max-pos (dec (:size board))
        [x y] pos]
    (and
     (>= max-pos x 0)
     (>= max-pos y 0))))

(defn neighbors
  "Returns the neighbors of a position."
  [board pos]
    (let [[x y] pos
          stones (:stones board)]
      (filter #(pos-valid? % board) [[(inc x) y]
                                     [(dec x) y]
                                     [x (inc y)]
                                     [x (dec y)]])))

(defn liberties
  "Returns the liberties of a position."
  [board pos]
  (filter (complement (:stones board)) (neighbors board pos)))

(defn chain
  "Returns the set of positions in the chain
  that is connected to pos (including pos)."
  [board pos]
  (let [stones (:stones board)
        trgt (stones pos)]
    (loop [walked #{}
           to-walk #{pos}]
      (if (empty? to-walk)
          walked
        (let [current (first to-walk)
              walked (conj walked current)
              to-walk (disj to-walk current)
              candidates (set (filter #(= trgt (stones %)) (neighbors board current)))
              to-walk (set/union to-walk (set/difference candidates walked))]
          (recur walked to-walk))))))

(defn surrounded?
  "Checks if a chain originating at pos has been surrounded."
  [board pos]
    (empty? (mapcat #(liberties board %) (chain board pos))))

(defn move-phase-1
  "Applies a move to the board, returning a new board.
  Does not check if the move is valid. If pos is nil or false,
  the current player passes."
  [board pos]
  (if pos
    (assoc board
      :stones (assoc (:stones board) pos (:turn board))
      :turn (case (:turn board) :black :white :white :black)
      :last-move pos
      :move (inc (:move board))
      :passed? false
      :previous-board board)
    (assoc board
      :turn (case (:turn board) :black :white :white :black)
      :last-move nil
      :move (inc (:move board))
      :passed? true
      :previous-board board)))

(defn- remove-if-surrounded
  "Removes a chain at the given position if it is surrounded. Return new board."
  [board pos]
  (if ((:stones board) pos)
   (let [chn (chain board pos)
        chain-libs (mapcat #(liberties board %) chn)]
    (if (empty? chain-libs)
      (assoc board :stones (apply dissoc (:stones board) chn))
      board))
    board))

(defn move-phase-2
  "Checks a board for dead chains (chains with no liberties) around the last stone played,
  and also checks if the last stone played is itself part of a dead chain. Removes
  any dead chains. Capture of the opponent takes precedence over self-capture."
  [board]
  (let [stones (:stones board)
        t (:turn board)
        l (:last-move board)
        nbs (vec (filter #(= t (stones %)) (neighbors board l)))]
    (remove-if-surrounded (reduce remove-if-surrounded board nbs) l)))

(defn move
  "Places a stone at the specified position for the current player.
  If pos is nil, the current player passes. If the move is invalid,
  returns nil, else returns the new board."
  ([board pos old-stones]
    (if pos
      (if (and
         (pos-valid? pos board)
         (not (contains? (:stones board) pos)))
      (let [t (:turn board)
            n (move-phase-2 (move-phase-1 board pos))
            f1 (frequencies (vals (:stones board)))
            f2 (frequencies (vals (:stones n)))]
        (when
          (and
           ;;check for suicide
           (> (f2 t) (f1 t))
           (not= (:stones board) (:stones n))

           ;;check for ko
           (not= (:stones (:previous-board board)) (:stones n))

           ;;check for previous board
           (if old-stones
             (not (contains? old-stones (:stones n)))
             true))
          n)))
   (move-phase-1 board nil)))
  ([board pos]
   (move board pos nil)))

(defn get-ownership
  "Returns the player who owns the position, or nil if neutral territory."
  [board pos]
  (let [stones (:stones board)]
    (if-let [c (stones pos)]
      c
      (let [nbs (map stones (mapcat #(neighbors board %) (chain board pos)))
            bns (filter #(= :black %) nbs)
            wns (filter #(= :white %) nbs)]
        (cond
          (and (empty? bns) (empty? wns)) nil
          (empty? bns) :white
          (empty? wns) :black)))))

(defn- fill
  "Fills part of the board. Useful for scoring."
  [board pos color]
  (assoc board :stones
    (apply assoc (:stones board)
           (interleave (chain board pos)
                       (repeat color)))))

(defn game-over?
  "Checks if the board represents a finiahed game."
  [board]
  (and
   (:passed? board)
   (:previous-board board)
   (:passed? (:previous-board board))))

(defn score
  "Scores a board. The returned score is in the form [black white]."
  [board]
  (let [b (atom board)
        r (range (:size board))]
      (doseq [x r y r]
        (when (not (contains? (:stones @b) [x y]))
            (reset! b (fill @b [x y] (get-ownership @b [x y])))))
      (let [f (frequencies (vals (:stones @b)))
            w (if (:white f) (:white f) 0)
            b (if (:black f) (:black f) 0)]
        [b w])))
