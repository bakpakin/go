// Compiled by ClojureScript 0.0-2173
goog.provide('webgo.gui');
goog.require('cljs.core');
goog.require('webgo.go');
goog.require('webgo.go');
/**
* Makes a new gui.
*/
webgo.gui.make = (function make(canvas,scorebar,board,optimum_square_size,border){return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"canvas","canvas",3941165258),canvas,new cljs.core.Keyword(null,"scorebar","scorebar",528404403),scorebar,new cljs.core.Keyword(null,"board","board",1107812952),cljs.core.atom.call(null,board),new cljs.core.Keyword(null,"square-size","square-size",1354679843),optimum_square_size,new cljs.core.Keyword(null,"border","border",3925567390),border], null);
});
/**
* Converts screen coordinates to board coordinates.
*/
webgo.gui.screen__GT_board_SINGLEQUOTE_ = (function screen__GT_board_SINGLEQUOTE_(p__42464,spacing,x_offset,y_offset){var vec__42466 = p__42464;var x = cljs.core.nth.call(null,vec__42466,0,null);var y = cljs.core.nth.call(null,vec__42466,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(Math.floor.call(null,((x - x_offset) / spacing)) | 0),(Math.floor.call(null,((y - y_offset) / spacing)) | 0)], null);
});
/**
* Converts board coordinates to screen coordinates.
*/
webgo.gui.board__GT_screen_SINGLEQUOTE_ = (function board__GT_screen_SINGLEQUOTE_(p__42467,spacing,x_offset,y_offset){var vec__42469 = p__42467;var x = cljs.core.nth.call(null,vec__42469,0,null);var y = cljs.core.nth.call(null,vec__42469,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x_offset + (spacing * x)) + (spacing / 2.0)),((y_offset + (spacing * y)) + (spacing / 2.0))], null);
});
/**
* Fills a circle with a gradient.
*/
webgo.gui.fill_circle = (function fill_circle(ctx,x,y,r,inner_color,outer_color){var vec__42472 = inner_color;var ri = cljs.core.nth.call(null,vec__42472,0,null);var gi = cljs.core.nth.call(null,vec__42472,1,null);var bi = cljs.core.nth.call(null,vec__42472,2,null);var vec__42473 = outer_color;var ro = cljs.core.nth.call(null,vec__42473,0,null);var go = cljs.core.nth.call(null,vec__42473,1,null);var bo = cljs.core.nth.call(null,vec__42473,2,null);var grd = ctx.createRadialGradient(x,y,0,x,y,r);grd.addColorStop(0,inner_color);
grd.addColorStop(1,outer_color);
ctx.fillStyle = grd;
ctx.beginPath();
ctx.arc(x,y,r,0,(2 * Math.PI),true);
ctx.closePath();
return ctx.fill();
});
/**
* Draws a grid with the context.
*/
webgo.gui.draw_grid = (function draw_grid(ctx,size,cell_size,x_offset,y_offset){ctx.translate(x_offset,y_offset);
ctx.beginPath();
var b_42483 = (cell_size / 2);var b2_42484 = ((cell_size * size) - b_42483);var seq__42479_42485 = cljs.core.seq.call(null,cljs.core.map.call(null,(function (p1__42474_SHARP_){return (b_42483 + (cell_size * p1__42474_SHARP_));
}),cljs.core.range.call(null,size)));var chunk__42480_42486 = null;var count__42481_42487 = 0;var i__42482_42488 = 0;while(true){
if((i__42482_42488 < count__42481_42487))
{var i_42489 = cljs.core._nth.call(null,chunk__42480_42486,i__42482_42488);ctx.moveTo(b_42483,i_42489);
ctx.lineTo(b2_42484,i_42489);
ctx.moveTo(i_42489,b_42483);
ctx.lineTo(i_42489,b2_42484);
{
var G__42490 = seq__42479_42485;
var G__42491 = chunk__42480_42486;
var G__42492 = count__42481_42487;
var G__42493 = (i__42482_42488 + 1);
seq__42479_42485 = G__42490;
chunk__42480_42486 = G__42491;
count__42481_42487 = G__42492;
i__42482_42488 = G__42493;
continue;
}
} else
{var temp__4092__auto___42494 = cljs.core.seq.call(null,seq__42479_42485);if(temp__4092__auto___42494)
{var seq__42479_42495__$1 = temp__4092__auto___42494;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42479_42495__$1))
{var c__4191__auto___42496 = cljs.core.chunk_first.call(null,seq__42479_42495__$1);{
var G__42497 = cljs.core.chunk_rest.call(null,seq__42479_42495__$1);
var G__42498 = c__4191__auto___42496;
var G__42499 = cljs.core.count.call(null,c__4191__auto___42496);
var G__42500 = 0;
seq__42479_42485 = G__42497;
chunk__42480_42486 = G__42498;
count__42481_42487 = G__42499;
i__42482_42488 = G__42500;
continue;
}
} else
{var i_42501 = cljs.core.first.call(null,seq__42479_42495__$1);ctx.moveTo(b_42483,i_42501);
ctx.lineTo(b2_42484,i_42501);
ctx.moveTo(i_42501,b_42483);
ctx.lineTo(i_42501,b2_42484);
{
var G__42502 = cljs.core.next.call(null,seq__42479_42495__$1);
var G__42503 = null;
var G__42504 = 0;
var G__42505 = 0;
seq__42479_42485 = G__42502;
chunk__42480_42486 = G__42503;
count__42481_42487 = G__42504;
i__42482_42488 = G__42505;
continue;
}
}
} else
{}
}
break;
}
ctx.stroke();
return ctx.translate((- x_offset),(- y_offset));
});
/**
* Draws the stones with the context.
*/
webgo.gui.draw_stones = (function draw_stones(ctx,stones,last_move,cell_size,x_offset,y_offset){if(cljs.core.truth_(last_move))
{var l_42532 = webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,last_move,cell_size,x_offset,y_offset);var vec__42519_42533 = l_42532;var lx_42534 = cljs.core.nth.call(null,vec__42519_42533,0,null);var ly_42535 = cljs.core.nth.call(null,vec__42519_42533,1,null);webgo.gui.fill_circle.call(null,ctx,lx_42534,ly_42535,(cell_size * 0.5),"#00FFFF","#00AAAA");
} else
{}
var seq__42520 = cljs.core.seq.call(null,stones);var chunk__42521 = null;var count__42522 = 0;var i__42523 = 0;while(true){
if((i__42523 < count__42522))
{var vec__42524 = cljs.core._nth.call(null,chunk__42521,i__42523);var pos = cljs.core.nth.call(null,vec__42524,0,null);var color = cljs.core.nth.call(null,vec__42524,1,null);var vec__42525_42536 = webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,pos,cell_size,x_offset,y_offset);var x_42537 = cljs.core.nth.call(null,vec__42525_42536,0,null);var y_42538 = cljs.core.nth.call(null,vec__42525_42536,1,null);var c1_42539 = (function (){var G__42526 = color;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__42526))
{return "#CCCCCC";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__42526))
{return "#333333";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(color)].join('')));
} else
{return null;
}
}
}
})();var c2_42540 = (function (){var G__42527 = color;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__42527))
{return "#AAAAAA";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__42527))
{return "#111111";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(color)].join('')));
} else
{return null;
}
}
}
})();webgo.gui.fill_circle.call(null,ctx,x_42537,y_42538,(cell_size * 0.45),c1_42539,c2_42540);
{
var G__42541 = seq__42520;
var G__42542 = chunk__42521;
var G__42543 = count__42522;
var G__42544 = (i__42523 + 1);
seq__42520 = G__42541;
chunk__42521 = G__42542;
count__42522 = G__42543;
i__42523 = G__42544;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__42520);if(temp__4092__auto__)
{var seq__42520__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42520__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__42520__$1);{
var G__42545 = cljs.core.chunk_rest.call(null,seq__42520__$1);
var G__42546 = c__4191__auto__;
var G__42547 = cljs.core.count.call(null,c__4191__auto__);
var G__42548 = 0;
seq__42520 = G__42545;
chunk__42521 = G__42546;
count__42522 = G__42547;
i__42523 = G__42548;
continue;
}
} else
{var vec__42528 = cljs.core.first.call(null,seq__42520__$1);var pos = cljs.core.nth.call(null,vec__42528,0,null);var color = cljs.core.nth.call(null,vec__42528,1,null);var vec__42529_42549 = webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,pos,cell_size,x_offset,y_offset);var x_42550 = cljs.core.nth.call(null,vec__42529_42549,0,null);var y_42551 = cljs.core.nth.call(null,vec__42529_42549,1,null);var c1_42552 = (function (){var G__42530 = color;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__42530))
{return "#CCCCCC";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__42530))
{return "#333333";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(color)].join('')));
} else
{return null;
}
}
}
})();var c2_42553 = (function (){var G__42531 = color;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__42531))
{return "#AAAAAA";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__42531))
{return "#111111";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(color)].join('')));
} else
{return null;
}
}
}
})();webgo.gui.fill_circle.call(null,ctx,x_42550,y_42551,(cell_size * 0.45),c1_42552,c2_42553);
{
var G__42554 = cljs.core.next.call(null,seq__42520__$1);
var G__42555 = null;
var G__42556 = 0;
var G__42557 = 0;
seq__42520 = G__42554;
chunk__42521 = G__42555;
count__42522 = G__42556;
i__42523 = G__42557;
continue;
}
}
} else
{return null;
}
}
break;
}
});
/**
* Draws a board on a canvas.
*/
webgo.gui.draw = (function draw(canvas,board,cell_size,x_offset,y_offset){var ctx_42558 = canvas.getContext("2d");ctx_42558.clearRect(0,0,canvas.width,canvas.height);
ctx_42558.shadowBlur = 0;
ctx_42558.shadowColor = "black";
ctx_42558.fillStyle = "black";
ctx_42558.strokeStyle = "#009999";
webgo.gui.draw_grid.call(null,ctx_42558,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(board),cell_size,x_offset,y_offset);
ctx_42558.shadowBlur = 5;
webgo.gui.draw_stones.call(null,ctx_42558,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board),new cljs.core.Keyword(null,"last-move","last-move",2980834330).cljs$core$IFn$_invoke$arity$1(board),cell_size,x_offset,y_offset);
return window.requestAnimationFrame((function (){return null;
}));
});
/**
* Gets the transformation of the gui on the canavas as [x-offset y-offset square-size].
*/
webgo.gui.gui_xform = (function gui_xform(gui){var canvas = new cljs.core.Keyword(null,"canvas","canvas",3941165258).cljs$core$IFn$_invoke$arity$1(gui);var board = cljs.core.deref.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(gui));var border = new cljs.core.Keyword(null,"border","border",3925567390).cljs$core$IFn$_invoke$arity$1(gui);var w = canvas.width;var h = canvas.height;var bsize = new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(board);var ssize = (function (){var x__3750__auto__ = 1;var y__3751__auto__ = (function (){var x__3757__auto__ = new cljs.core.Keyword(null,"square-size","square-size",1354679843).cljs$core$IFn$_invoke$arity$1(gui);var y__3758__auto__ = (((function (){var x__3757__auto____$1 = w;var y__3758__auto__ = h;return ((x__3757__auto____$1 < y__3758__auto__) ? x__3757__auto____$1 : y__3758__auto__);
})() - (2 * border)) / bsize);return ((x__3757__auto__ < y__3758__auto__) ? x__3757__auto__ : y__3758__auto__);
})();return ((x__3750__auto__ > y__3751__auto__) ? x__3750__auto__ : y__3751__auto__);
})();var x = ((w - (bsize * ssize)) / 2);var y = ((h - (bsize * ssize)) / 2);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,ssize], null);
});
/**
* Updates the scorebar.
*/
webgo.gui.update_scorebar_BANG_ = (function update_scorebar_BANG_(scorebar,board){var t = new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board);var m = new cljs.core.Keyword(null,"move","move",1017261891).cljs$core$IFn$_invoke$arity$1(board);return scorebar.innerHTML = [cljs.core.str("Turn "),cljs.core.str(m),cljs.core.str(". "),cljs.core.str((function (){var G__42560 = t;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__42560))
{return "White";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__42560))
{return "Black";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(t)].join('')));
} else
{return null;
}
}
}
})()),cljs.core.str(" to move.")].join('');
});
/**
* Renders the gui.
*/
webgo.gui.render = (function render(gui){var vec__42562 = webgo.gui.gui_xform.call(null,gui);var x = cljs.core.nth.call(null,vec__42562,0,null);var y = cljs.core.nth.call(null,vec__42562,1,null);var s = cljs.core.nth.call(null,vec__42562,2,null);var sb = new cljs.core.Keyword(null,"scorebar","scorebar",528404403).cljs$core$IFn$_invoke$arity$1(gui);var c = new cljs.core.Keyword(null,"canvas","canvas",3941165258).cljs$core$IFn$_invoke$arity$1(gui);var b = cljs.core.deref.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(gui));webgo.gui.draw.call(null,c,b,s,x,y);
return webgo.gui.update_scorebar_BANG_.call(null,sb,b);
});
/**
* Updates the gui with a new board and repaints.
*/
webgo.gui.update_BANG_ = (function update_BANG_(gui,board){cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(gui),board);
return webgo.gui.render.call(null,gui);
});
/**
* Converts board coordinates to screen coordinates.
*/
webgo.gui.board__GT_screen = (function() {
var board__GT_screen = null;
var board__GT_screen__2 = (function (gui,pos){var vec__42564 = webgo.gui.gui_xform.call(null,gui);var x = cljs.core.nth.call(null,vec__42564,0,null);var y = cljs.core.nth.call(null,vec__42564,1,null);var s = cljs.core.nth.call(null,vec__42564,2,null);return webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,pos,s,x,y);
});
var board__GT_screen__3 = (function (gui,x,y){return board__GT_screen.call(null,gui,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
board__GT_screen = function(gui,x,y){
switch(arguments.length){
case 2:
return board__GT_screen__2.call(this,gui,x);
case 3:
return board__GT_screen__3.call(this,gui,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
board__GT_screen.cljs$core$IFn$_invoke$arity$2 = board__GT_screen__2;
board__GT_screen.cljs$core$IFn$_invoke$arity$3 = board__GT_screen__3;
return board__GT_screen;
})()
;
/**
* Converts screen coordinates to board coordinates.
*/
webgo.gui.screen__GT_board = (function() {
var screen__GT_board = null;
var screen__GT_board__2 = (function (gui,pos){var vec__42566 = webgo.gui.gui_xform.call(null,gui);var x = cljs.core.nth.call(null,vec__42566,0,null);var y = cljs.core.nth.call(null,vec__42566,1,null);var s = cljs.core.nth.call(null,vec__42566,2,null);return webgo.gui.screen__GT_board_SINGLEQUOTE_.call(null,pos,s,x,y);
});
var screen__GT_board__3 = (function (gui,x,y){return screen__GT_board.call(null,gui,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
screen__GT_board = function(gui,x,y){
switch(arguments.length){
case 2:
return screen__GT_board__2.call(this,gui,x);
case 3:
return screen__GT_board__3.call(this,gui,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
screen__GT_board.cljs$core$IFn$_invoke$arity$2 = screen__GT_board__2;
screen__GT_board.cljs$core$IFn$_invoke$arity$3 = screen__GT_board__3;
return screen__GT_board;
})()
;
/**
* Call this when the game ends to show score.
*/
webgo.gui.show_score_BANG_ = (function show_score_BANG_(gui){var scorebar = new cljs.core.Keyword(null,"scorebar","scorebar",528404403).cljs$core$IFn$_invoke$arity$1(gui);var board = cljs.core.deref.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(gui));var t = new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board);var m = new cljs.core.Keyword(null,"move","move",1017261891).cljs$core$IFn$_invoke$arity$1(board);var vec__42568 = webgo.go.score.call(null,board);var b = cljs.core.nth.call(null,vec__42568,0,null);var w = cljs.core.nth.call(null,vec__42568,1,null);var winner = (((b > w))?"Black won. ":(((b < w))?"White won. ":((new cljs.core.Keyword(null,"default","default",2558708147))?"It's a tie. ":null)));return scorebar.innerHTML = [cljs.core.str(winner),cljs.core.str("The final score was "),cljs.core.str(b),cljs.core.str(" to "),cljs.core.str(w),cljs.core.str(".")].join('');
});
/**
* Adds a click-listener func to listen for mouse clicks. If the mouse
* is clicked over the canvas, func is invoked with one argument, the
* position of the mouse in the form [board-x board-y] or nil if not on the board.
*/
webgo.gui.add_on_click = (function add_on_click(gui,func){new cljs.core.Keyword(null,"canvas","canvas",3941165258).cljs$core$IFn$_invoke$arity$1(gui).addEventListener("click",(function (e){var c = new cljs.core.Keyword(null,"canvas","canvas",3941165258).cljs$core$IFn$_invoke$arity$1(gui);var pos = webgo.gui.screen__GT_board.call(null,gui,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(e.pageX - c.offsetLeft),(e.pageY - c.offsetTop)], null));if(webgo.go.pos_valid_QMARK_.call(null,pos,cljs.core.deref.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(gui))))
{return func.call(null,pos);
} else
{return null;
}
}),false);
return new cljs.core.Keyword(null,"canvas","canvas",3941165258).cljs$core$IFn$_invoke$arity$1(gui).addEventListener("touchstart",(function (e){e.preventDefault();
var c = new cljs.core.Keyword(null,"canvas","canvas",3941165258).cljs$core$IFn$_invoke$arity$1(gui);var pos = webgo.gui.screen__GT_board.call(null,gui,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((e.touches[0]).pageX - c.offsetLeft),((e.touches[0]).pageY - c.offsetTop)], null));if(webgo.go.pos_valid_QMARK_.call(null,pos,cljs.core.deref.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(gui))))
{return func.call(null,pos);
} else
{return null;
}
}),false);
});

//# sourceMappingURL=gui.js.map