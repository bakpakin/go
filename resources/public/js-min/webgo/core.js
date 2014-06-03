// Compiled by ClojureScript 0.0-2227
goog.provide('webgo.core');
goog.require('cljs.core');
goog.require('webgo.ai');
goog.require('webgo.ai');
goog.require('webgo.gui');
goog.require('webgo.gui');
goog.require('webgo.go');
goog.require('webgo.go');
webgo.core.mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$29);
webgo.core.enabled = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
webgo.core.new_enabled = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
/**
* Enables the New Game button.
*/
webgo.core.setNewEnabled = (function setNewEnabled(enable){return cljs.core.reset_BANG_(webgo.core.new_enabled,enable);
});
goog.exportSymbol('webgo.core.setNewEnabled', webgo.core.setNewEnabled);
/**
* Enables the ui. New game is always enabled.
*/
webgo.core.setEnabled = (function setEnabled(enable){return cljs.core.reset_BANG_(webgo.core.enabled,enable);
});
goog.exportSymbol('webgo.core.setEnabled', webgo.core.setEnabled);
/**
* Sets the game mode - one player is true, two player is false.
*/
webgo.core.setOnePlayer = (function setOnePlayer(one_player){return cljs.core.reset_BANG_(webgo.core.mode,(function (){var G__5053 = one_player;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__5053))
{return cljs.core.constant$keyword$30;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__5053))
{return cljs.core.constant$keyword$29;
} else
{if(cljs.core.constant$keyword$6)
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(one_player))));
} else
{return null;
}
}
}
})());
});
goog.exportSymbol('webgo.core.setOnePlayer', webgo.core.setOnePlayer);
/**
* Returns true if in one-player mode, otherwise false.
*/
webgo.core.getOnePlayer = (function getOnePlayer(){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$29,cljs.core.deref(webgo.core.mode));
});
goog.exportSymbol('webgo.core.getOnePlayer', webgo.core.getOnePlayer);
/**
* What happens when the user clicks the screen.
*/
webgo.core.on_click = (function on_click(pos){if(cljs.core.truth_((function (){var and__3529__auto__ = cljs.core.deref(webgo.core.enabled);if(cljs.core.truth_(and__3529__auto__))
{return cljs.core.not(webgo.go.game_over_QMARK_(cljs.core.deref(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(webgo.core.ui))));
} else
{return and__3529__auto__;
}
})()))
{var board = cljs.core.deref(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(webgo.core.ui));var n = webgo.go.move.cljs$core$IFn$_invoke$arity$2(board,pos);if(cljs.core.truth_(n))
{webgo.core.setEnabled(false);
webgo.core.setNewEnabled(false);
webgo.gui.update_BANG_(webgo.core.ui,n);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$29,cljs.core.deref(webgo.core.mode))) && (cljs.core.not(webgo.go.game_over_QMARK_(n))))
{var n1_5054 = webgo.go.move.cljs$core$IFn$_invoke$arity$2(n,webgo.ai.next_board(n));webgo.gui.update_BANG_(webgo.core.ui,n1_5054);
webgo.core.setEnabled(true);
return webgo.core.setNewEnabled(true);
} else
{webgo.core.setEnabled(true);
return webgo.core.setNewEnabled(true);
}
} else
{return null;
}
} else
{return null;
}
});
goog.exportSymbol('webgo.core.on_click', webgo.core.on_click);
/**
* What happens when the Pass button is clicked.
*/
webgo.core.onpass = (function onpass(){webgo.core.on_click(null);
if(cljs.core.truth_(webgo.go.game_over_QMARK_(cljs.core.deref(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(webgo.core.ui)))))
{webgo.core.setEnabled(false);
return webgo.gui.show_score_BANG_(webgo.core.ui);
} else
{return null;
}
});
goog.exportSymbol('webgo.core.onpass', webgo.core.onpass);
/**
* What happens when the New Game button is pressed.
*/
webgo.core.onnew = (function onnew(size){if(cljs.core.truth_(cljs.core.deref(webgo.core.new_enabled)))
{webgo.core.setEnabled(true);
return webgo.gui.update_BANG_(webgo.core.ui,webgo.go.empty_board(size));
} else
{return null;
}
});
goog.exportSymbol('webgo.core.onnew', webgo.core.onnew);
/**
* What happens when the Undo button is pressed.
*/
webgo.core.onundo = (function onundo(){if(cljs.core.truth_((function (){var and__3529__auto__ = cljs.core.deref(webgo.core.enabled);if(cljs.core.truth_(and__3529__auto__))
{return cljs.core.not(webgo.go.game_over_QMARK_(cljs.core.deref(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(webgo.core.ui))));
} else
{return and__3529__auto__;
}
})()))
{var temp__4126__auto__ = cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(webgo.core.ui)));if(cljs.core.truth_(temp__4126__auto__))
{var b = temp__4126__auto__;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webgo.core.mode),cljs.core.constant$keyword$29))
{var temp__4126__auto____$1 = cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(b);if(cljs.core.truth_(temp__4126__auto____$1))
{var b1 = temp__4126__auto____$1;return webgo.gui.update_BANG_(webgo.core.ui,b1);
} else
{return null;
}
} else
{return webgo.gui.update_BANG_(webgo.core.ui,b);
}
} else
{return null;
}
} else
{return null;
}
});
goog.exportSymbol('webgo.core.onundo', webgo.core.onundo);
/**
* Redraws the canvas.
*/
webgo.core.redraw = (function redraw(){return webgo.gui.update_BANG_(webgo.core.ui,cljs.core.deref(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(webgo.core.ui)));
});
goog.exportSymbol('webgo.core.redraw', webgo.core.redraw);
/**
* Initiates the simulation.
*/
webgo.core.init = (function init(canvas_id,scorebar_id){var canvas = document.getElementById(canvas_id);var scorebar = document.getElementById(scorebar_id);var g = webgo.gui.make(canvas,scorebar,webgo.go.empty_board(9),10);webgo.core.ui = g;
webgo.gui.add_on_click(webgo.core.ui,webgo.core.on_click);
return webgo.gui.render(g);
});
goog.exportSymbol('webgo.core.init', webgo.core.init);
