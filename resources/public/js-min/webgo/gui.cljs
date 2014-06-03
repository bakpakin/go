(ns webgo.gui
  (:require [webgo.go :as go]))

(defn make
  "Makes a new gui."
  [canvas scorebar board border]
  {:canvas canvas
   :scorebar scorebar
   :board (atom board)
   :border border})

(defn- screen->board'
  "Converts screen coordinates to board coordinates."
  [[x y] spacing x-offset y-offset]
  [(int (Math/floor (/ (- x x-offset) spacing)))
   (int (Math/floor (/ (- y y-offset) spacing)))])

(defn- board->screen'
  "Converts board coordinates to screen coordinates."
  [[x y] spacing x-offset y-offset]
  [(+ x-offset (* spacing x) (/ spacing 2.0))
   (+ y-offset (* spacing y) (/ spacing 2.0))])

(defn- fill-circle
  "Fills a circle with a gradient."
  [ctx x y r inner-color outer-color]
  (let [[ri gi bi] inner-color
        [ro go bo] outer-color
        grd (.createRadialGradient ctx x y 0 x y r)]
    (.addColorStop grd 0 inner-color)
    (.addColorStop grd 1 outer-color)
    (set! (.-fillStyle ctx) grd)
    (.beginPath ctx)
    (.arc ctx x y r 0 (* 2 Math/PI) true)
    (.closePath ctx)
    (.fill ctx)))

(defn- draw-grid
  "Draws a grid with the context."
  [ctx size cell-size x-offset y-offset]
  (.translate ctx x-offset y-offset)
  (.beginPath ctx)
  (let [b (/ cell-size 2)
        b2 (- (* cell-size size) b)]
    (doseq [i (map
             #(+ b (* cell-size %))
             (range size))]
      (.moveTo ctx b i)
      (.lineTo ctx b2 i)
      (.moveTo ctx i b)
      (.lineTo ctx i b2)))
  (.stroke ctx)
  (.translate ctx (- x-offset) (- y-offset)))

(defn- draw-stones
  "Draws the stones with the context."
  [ctx stones last-move cell-size x-offset y-offset]
  (if last-move
    (let [l (board->screen' last-move cell-size x-offset y-offset)
          [lx ly] l]
      (fill-circle ctx lx ly (* cell-size 0.5) "#00FFFF" "#00AAAA")))
  (doseq [[pos color] stones]
    (let [[x y] (board->screen' pos cell-size x-offset y-offset)
          c1 (case color :black "#333333" :white "#CCCCCC")
          c2 (case color :black "#111111" :white "#AAAAAA")]
      (fill-circle ctx x y (* cell-size 0.45) c1 c2))))

(defn- draw
  "Draws a board on a canvas."
  [canvas board cell-size x-offset y-offset]
  (let [ctx (.getContext canvas "2d")]
    (.clearRect ctx 0 0 (.-width canvas) (.-height canvas))
    (set! (.-shadowBlur ctx) 0)
    (set! (.-shadowColor ctx) "black")
    (set! (.-fillStyle ctx) "black")
    (set! (.-strokeStyle ctx) "#009999")
    (draw-grid ctx (:size board) cell-size x-offset y-offset)
    (set! (.-shadowBlur ctx) 5)
    (draw-stones ctx (:stones board) (:last-move board) cell-size x-offset y-offset))
  (.requestAnimationFrame js/window (fn [] nil)))

(defn- gui-xform
  "Gets the transformation of the gui on the canavas as [x-offset y-offset square-size]."
  [gui]
  (let [canvas (:canvas gui)
        board @(:board gui)
        border (:border gui)
        w (.-width canvas)
        h (.-height canvas)
        bsize (:size board)
        ssize (/ (- (min w h) (* 2 border)) bsize)
        x (/ (- w (* bsize ssize)) 2)
        y (/ (- h (* bsize ssize)) 2)]
    [x y ssize]))

(defn- update-scorebar!
  "Updates the scorebar."
  [scorebar board]
  (let [t (:turn board)
        m (:move board)]
    (set! (.-innerHTML scorebar)
          (str
           "Turn "
           m
           ". "
           (case t :black "Black" :white "White")
           " to move."))))

(defn render
  "Renders the gui."
  [gui]
  (let [[x y s] (gui-xform gui)
        sb (:scorebar gui)
        c (:canvas gui)
        b @(:board gui)]
    (draw c b s x y)
    (update-scorebar! sb b)))

(defn update!
  "Updates the gui with a new board and repaints."
  [gui board]
  (reset! (:board gui) board)
  (render gui))

(defn board->screen
  "Converts board coordinates to screen coordinates."
  ([gui x y]
   (board->screen gui [x y]))
  ([gui pos]
   (let [[x y s] (gui-xform gui)]
     (board->screen' pos s x y))))

(defn screen->board
  "Converts screen coordinates to board coordinates."
  ([gui x y]
   (screen->board gui [x y]))
  ([gui pos]
   (let [[x y s] (gui-xform gui)]
     (screen->board' pos s x y))))


(defn show-score!
  "Call this when the game ends to show score."
  [gui]
  (let [scorebar (:scorebar gui)
        board @(:board gui)
        t (:turn board)
        m (:move board)
        [b w] (go/score board)
        winner (cond (> b w) "Black won. " (< b w) "White won. " :default "It's a tie. ")]
    (set! (.-innerHTML scorebar)
          (str
           winner
           "The final score was "
           b " to " w "."))))

(defn add-on-click
  "Adds a click-listener func to listen for mouse clicks. If the mouse
  is clicked over the canvas, func is invoked with one argument, the
  position of the mouse in the form [board-x board-y] or nil if not on the board."
  [gui func]
    (.addEventListener
     (:canvas gui)
     "click"
     (fn [e]
       (let [c (:canvas gui)
             pos (screen->board gui
                                [(- (.-pageX e) (.-offsetLeft c))
                                 (- (.-pageY e) (.-offsetTop c))])]
         (when
           (go/pos-valid? pos @(:board gui))
           (func pos))))
     false)
    (.addEventListener
     (:canvas gui)
     "touchstart"
     (fn [e]
       (.preventDefault e)
       (let [c (:canvas gui)
             pos (screen->board gui
                                [(- (.-pageX (aget (.-touches e) 0)) (.-offsetLeft c))
                                 (- (.-pageY (aget (.-touches e) 0)) (.-offsetTop c))])]
         (when
           (go/pos-valid? pos @(:board gui))
           (func pos))))
     false))
