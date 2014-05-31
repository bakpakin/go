// Compiled by ClojureScript 0.0-2173
goog.provide('webgo.core');
goog.require('cljs.core');
goog.require('webgo.gui');
goog.require('webgo.gui');
goog.require('webgo.go');
goog.require('webgo.go');
/**
* What happens when the user clicks the screen.
*/
webgo.core.on_click = (function on_click(pos){var board = cljs.core.deref.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(webgo.core.ui));var n = webgo.go.move.call(null,board,pos);if(cljs.core.truth_(n))
{return webgo.gui.update_BANG_.call(null,webgo.core.ui,n);
} else
{return null;
}
});
goog.exportSymbol('webgo.core.on_click', webgo.core.on_click);
/**
* What happens when the Pass button is clicked.
*/
webgo.core.onpass = (function onpass(){return webgo.gui.update_BANG_.call(null,webgo.core.ui,webgo.go.move.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(webgo.core.ui)),null));
});
goog.exportSymbol('webgo.core.onpass', webgo.core.onpass);
/**
* What happens when the New Game button is pressed.
*/
webgo.core.onnew = (function onnew(size){return webgo.gui.update_BANG_.call(null,webgo.core.ui,webgo.go.empty_board.call(null,size));
});
goog.exportSymbol('webgo.core.onnew', webgo.core.onnew);
/**
* What happens when the Undo button is pressed.
*/
webgo.core.onundo = (function onundo(){var temp__4092__auto__ = new cljs.core.Keyword(null,"previous-board","previous-board",4191509506).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(webgo.core.ui)));if(cljs.core.truth_(temp__4092__auto__))
{var b = temp__4092__auto__;return webgo.gui.update_BANG_.call(null,webgo.core.ui,b);
} else
{return null;
}
});
goog.exportSymbol('webgo.core.onundo', webgo.core.onundo);
/**
* Initiates the simulation.
*/
webgo.core.init = (function init(canvas_id,scorebar_id){var canvas = document.getElementById(canvas_id);var scorebar = document.getElementById(scorebar_id);var g = webgo.gui.make.call(null,canvas,scorebar,webgo.go.empty_board.call(null,9),1000,10);webgo.core.ui = g;
webgo.gui.add_on_click.call(null,webgo.core.ui,webgo.core.on_click);
return webgo.gui.render.call(null,g);
});
goog.exportSymbol('webgo.core.init', webgo.core.init);

//# sourceMappingURL=core.js.map