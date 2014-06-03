(ns webgo.ai
  (:require [webgo.go :as go]))

(defn- possible-moves
  "Gets all the possible moves for a board."
  [board]
  (cons nil (filter
   (partial go/move board)
   (for [x (range (:size board)) y (range (:size board))] [x y]))))

(defn next-board
  "Gets the best move."
  [board]
  (rand-nth (possible-moves board)))
