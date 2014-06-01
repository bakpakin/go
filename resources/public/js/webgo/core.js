// Compiled by ClojureScript 0.0-2173
goog.provide('webgo.core');
goog.require('cljs.core');
goog.require('webgo.ai');
goog.require('webgo.ai');
goog.require('webgo.gui');
goog.require('webgo.gui');
goog.require('webgo.go');
goog.require('webgo.go');
webgo.core.enabled = cljs.core.atom.call(null,true);
webgo.core.new_enabled = cljs.core.atom.call(null,true);
/**
* Enables the New Game button.
*/
webgo.core.setNewEnabled = (function setNewEnabled(enable){return cljs.core.reset_BANG_.call(null,webgo.core.new_enabled,enable);
});
goog.exportSymbol('webgo.core.setNewEnabled', webgo.core.setNewEnabled);
/**
* Enables the ui. New game is always enabled.
*/
webgo.core.setEnabled = (function setEnabled(enable){return cljs.core.reset_BANG_.call(null,webgo.core.enabled,enable);
});
goog.exportSymbol('webgo.core.setEnabled', webgo.core.setEnabled);
/**
* What happens when the user clicks the screen.
*/
webgo.core.on_click = (function on_click(pos){if(cljs.core.truth_((function (){var and__3431__auto__ = cljs.core.deref.call(null,webgo.core.enabled);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not.call(null,webgo.go.game_over_QMARK_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(webgo.core.ui))));
} else
{return and__3431__auto__;
}
})()))
{var board = cljs.core.deref.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(webgo.core.ui));var n = webgo.go.move.call(null,board,pos);if(cljs.core.truth_(n))
{webgo.core.setEnabled.call(null,false);
webgo.core.setNewEnabled.call(null,false);
webgo.gui.update_BANG_.call(null,webgo.core.ui,n);
if(cljs.core.not.call(null,webgo.go.game_over_QMARK_.call(null,n)))
{webgo.gui.update_BANG_.call(null,webgo.core.ui,webgo.go.move.call(null,n,webgo.ai.next_board.call(null,n)));
webgo.core.setEnabled.call(null,true);
return webgo.core.setNewEnabled.call(null,true);
} else
{webgo.core.setEnabled.call(null,true);
return webgo.core.setNewEnabled.call(null,true);
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
webgo.core.onpass = (function onpass(){webgo.core.on_click.call(null,null);
if(cljs.core.truth_(webgo.go.game_over_QMARK_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(webgo.core.ui)))))
{webgo.core.setEnabled.call(null,false);
return webgo.gui.show_score_BANG_.call(null,webgo.core.ui);
} else
{return null;
}
});
goog.exportSymbol('webgo.core.onpass', webgo.core.onpass);
/**
* What happens when the New Game button is pressed.
*/
webgo.core.onnew = (function onnew(size){if(cljs.core.truth_(cljs.core.deref.call(null,webgo.core.new_enabled)))
{webgo.core.setEnabled.call(null,true);
return webgo.gui.update_BANG_.call(null,webgo.core.ui,webgo.go.empty_board.call(null,size));
} else
{return null;
}
});
goog.exportSymbol('webgo.core.onnew', webgo.core.onnew);
/**
* What happens when the Undo button is pressed.
*/
webgo.core.onundo = (function onundo(){if(cljs.core.truth_((function (){var and__3431__auto__ = cljs.core.deref.call(null,webgo.core.enabled);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not.call(null,webgo.go.game_over_QMARK_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(webgo.core.ui))));
} else
{return and__3431__auto__;
}
})()))
{var temp__4092__auto__ = new cljs.core.Keyword(null,"previous-board","previous-board",4191509506).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(webgo.core.ui)));if(cljs.core.truth_(temp__4092__auto__))
{var b = temp__4092__auto__;var temp__4092__auto____$1 = new cljs.core.Keyword(null,"previous-board","previous-board",4191509506).cljs$core$IFn$_invoke$arity$1(b);if(cljs.core.truth_(temp__4092__auto____$1))
{var b1 = temp__4092__auto____$1;return webgo.gui.update_BANG_.call(null,webgo.core.ui,b1);
} else
{return null;
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
webgo.core.redraw = (function redraw(){return webgo.gui.update_BANG_.call(null,webgo.core.ui,cljs.core.deref.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(webgo.core.ui)));
});
goog.exportSymbol('webgo.core.redraw', webgo.core.redraw);
/**
* Initiates the simulation.
*/
webgo.core.init = (function init(canvas_id,scorebar_id){var canvas = document.getElementById(canvas_id);var scorebar = document.getElementById(scorebar_id);var g = webgo.gui.make.call(null,canvas,scorebar,webgo.go.empty_board.call(null,9),1000,10);webgo.core.ui = g;
webgo.gui.add_on_click.call(null,webgo.core.ui,webgo.core.on_click);
return webgo.gui.render.call(null,g);
});
goog.exportSymbol('webgo.core.init', webgo.core.init);

//# sourceMappingURL=core.js.map