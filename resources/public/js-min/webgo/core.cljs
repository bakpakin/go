(ns webgo.core
  (:require [webgo.go :as go]
            [webgo.gui :as gui]
            [webgo.ai :as ai]))

(declare ui)

(def mode (atom :one))
(def enabled (atom true))
(def new-enabled (atom true))

(defn ^:export setNewEnabled
  "Enables the New Game button."
  [enable]
  (reset! new-enabled enable))

(defn ^:export setEnabled
  "Enables the ui. New game is always enabled."
  [enable]
  (reset! enabled enable))

(defn ^:export setOnePlayer
  "Sets the game mode - one player is true, two player is false."
  [one-player]
  (reset! mode (case one-player true :one false :two)))

(defn ^:export getOnePlayer
  "Returns true if in one-player mode, otherwise false."
  []
  (= :one @mode))

(defn ^:export on-click
  "What happens when the user clicks the screen."
  [pos]
  (when (and @enabled (not (go/game-over? @(:board ui))))
    (let [board @(:board ui)
          n (go/move board pos)]
      (when n
        (setEnabled false)
        (setNewEnabled false)
        (gui/update! ui n)
        (if (and (= :one @mode) (not (go/game-over? n)))
          (do
            (let [n1 (go/move n (ai/next-board n))]
              (gui/update! ui n1))
            (setEnabled true)
            (setNewEnabled true))
          (do
            (setEnabled true)
            (setNewEnabled true)))))))

(defn ^:export onpass
  "What happens when the Pass button is clicked."
  []
  (on-click nil)
  (when (go/game-over? @(:board ui))
    (setEnabled false)
    (gui/show-score! ui)))

(defn ^:export onnew
  "What happens when the New Game button is pressed."
  [size]
  (when @new-enabled
    (setEnabled true)
    (gui/update! ui (go/empty-board size))))

(defn ^:export onundo
  "What happens when the Undo button is pressed."
  []
  (when (and @enabled (not (go/game-over? @(:board ui))))
    (when-let [b (:previous-board @(:board ui))]
      (if (= @mode :one)
        (when-let [b1 (:previous-board b)]
          (gui/update! ui b1))
        (gui/update! ui b)))))

(defn ^:export redraw
  "Redraws the canvas."
  []
  (gui/update! ui @(:board ui)))

(defn ^:export init
  "Initiates the simulation."
  [canvas-id scorebar-id]
  (let [canvas (.getElementById js/document canvas-id)
        scorebar (.getElementById js/document scorebar-id)
        g (gui/make canvas scorebar (go/empty-board 9) 1000 10)]
    (def ui g)
    (gui/add-on-click ui on-click)
    (gui/render g)))
