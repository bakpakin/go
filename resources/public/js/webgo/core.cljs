(ns webgo.core
  (:require [webgo.go :as go]
            [webgo.gui :as gui]))

(declare ui)

(defn ^:export on-click
  "What happens when the user clicks the screen."
  [pos]
  (let [board @(:board ui)
        n (go/move board pos)]
    (when n
      (gui/update! ui n))))

(defn ^:export onpass
  "What happens when the Pass button is clicked."
  []
  (gui/update! ui (go/move @(:board ui) nil)))

(defn ^:export onnew
  "What happens when the New Game button is pressed."
  [size]
  (gui/update! ui (go/empty-board size)))

(defn ^:export onundo
  "What happens when the Undo button is pressed."
  []
  (when-let [b (:previous-board @(:board ui))]
    (gui/update! ui b)))

(defn ^:export init
  "Initiates the simulation."
  [canvas-id scorebar-id]
  (let [canvas (.getElementById js/document canvas-id)
        scorebar (.getElementById js/document scorebar-id)
        g (gui/make canvas scorebar (go/empty-board 9) 1000 10)]
    (def ui g)
    (gui/add-on-click ui on-click)
    (gui/render g)))
