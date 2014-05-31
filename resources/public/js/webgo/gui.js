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
webgo.gui.screen__GT_board_SINGLEQUOTE_ = (function screen__GT_board_SINGLEQUOTE_(p__42359,spacing,x_offset,y_offset){var vec__42361 = p__42359;var x = cljs.core.nth.call(null,vec__42361,0,null);var y = cljs.core.nth.call(null,vec__42361,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(Math.floor.call(null,((x - x_offset) / spacing)) | 0),(Math.floor.call(null,((y - y_offset) / spacing)) | 0)], null);
});
/**
* Converts board coordinates to screen coordinates.
*/
webgo.gui.board__GT_screen_SINGLEQUOTE_ = (function board__GT_screen_SINGLEQUOTE_(p__42362,spacing,x_offset,y_offset){var vec__42364 = p__42362;var x = cljs.core.nth.call(null,vec__42364,0,null);var y = cljs.core.nth.call(null,vec__42364,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x_offset + (spacing * x)) + (spacing / 2.0)),((y_offset + (spacing * y)) + (spacing / 2.0))], null);
});
/**
* Fills a circle with a gradient.
*/
webgo.gui.fill_circle = (function fill_circle(ctx,x,y,r,inner_color,outer_color){var vec__42367 = inner_color;var ri = cljs.core.nth.call(null,vec__42367,0,null);var gi = cljs.core.nth.call(null,vec__42367,1,null);var bi = cljs.core.nth.call(null,vec__42367,2,null);var vec__42368 = outer_color;var ro = cljs.core.nth.call(null,vec__42368,0,null);var go = cljs.core.nth.call(null,vec__42368,1,null);var bo = cljs.core.nth.call(null,vec__42368,2,null);var grd = ctx.createRadialGradient(x,y,0,x,y,r);grd.addColorStop(0,inner_color);
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
var b_42378 = (cell_size / 2);var b2_42379 = ((cell_size * size) - b_42378);var seq__42374_42380 = cljs.core.seq.call(null,cljs.core.map.call(null,(function (p1__42369_SHARP_){return (b_42378 + (cell_size * p1__42369_SHARP_));
}),cljs.core.range.call(null,size)));var chunk__42375_42381 = null;var count__42376_42382 = 0;var i__42377_42383 = 0;while(true){
if((i__42377_42383 < count__42376_42382))
{var i_42384 = cljs.core._nth.call(null,chunk__42375_42381,i__42377_42383);ctx.moveTo(b_42378,i_42384);
ctx.lineTo(b2_42379,i_42384);
ctx.moveTo(i_42384,b_42378);
ctx.lineTo(i_42384,b2_42379);
{
var G__42385 = seq__42374_42380;
var G__42386 = chunk__42375_42381;
var G__42387 = count__42376_42382;
var G__42388 = (i__42377_42383 + 1);
seq__42374_42380 = G__42385;
chunk__42375_42381 = G__42386;
count__42376_42382 = G__42387;
i__42377_42383 = G__42388;
continue;
}
} else
{var temp__4092__auto___42389 = cljs.core.seq.call(null,seq__42374_42380);if(temp__4092__auto___42389)
{var seq__42374_42390__$1 = temp__4092__auto___42389;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42374_42390__$1))
{var c__4191__auto___42391 = cljs.core.chunk_first.call(null,seq__42374_42390__$1);{
var G__42392 = cljs.core.chunk_rest.call(null,seq__42374_42390__$1);
var G__42393 = c__4191__auto___42391;
var G__42394 = cljs.core.count.call(null,c__4191__auto___42391);
var G__42395 = 0;
seq__42374_42380 = G__42392;
chunk__42375_42381 = G__42393;
count__42376_42382 = G__42394;
i__42377_42383 = G__42395;
continue;
}
} else
{var i_42396 = cljs.core.first.call(null,seq__42374_42390__$1);ctx.moveTo(b_42378,i_42396);
ctx.lineTo(b2_42379,i_42396);
ctx.moveTo(i_42396,b_42378);
ctx.lineTo(i_42396,b2_42379);
{
var G__42397 = cljs.core.next.call(null,seq__42374_42390__$1);
var G__42398 = null;
var G__42399 = 0;
var G__42400 = 0;
seq__42374_42380 = G__42397;
chunk__42375_42381 = G__42398;
count__42376_42382 = G__42399;
i__42377_42383 = G__42400;
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
{var l_42427 = webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,last_move,cell_size,x_offset,y_offset);var vec__42414_42428 = l_42427;var lx_42429 = cljs.core.nth.call(null,vec__42414_42428,0,null);var ly_42430 = cljs.core.nth.call(null,vec__42414_42428,1,null);webgo.gui.fill_circle.call(null,ctx,lx_42429,ly_42430,(cell_size * 0.5),"#00FFFF","#00AAAA");
} else
{}
var seq__42415 = cljs.core.seq.call(null,stones);var chunk__42416 = null;var count__42417 = 0;var i__42418 = 0;while(true){
if((i__42418 < count__42417))
{var vec__42419 = cljs.core._nth.call(null,chunk__42416,i__42418);var pos = cljs.core.nth.call(null,vec__42419,0,null);var color = cljs.core.nth.call(null,vec__42419,1,null);var vec__42420_42431 = webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,pos,cell_size,x_offset,y_offset);var x_42432 = cljs.core.nth.call(null,vec__42420_42431,0,null);var y_42433 = cljs.core.nth.call(null,vec__42420_42431,1,null);var c1_42434 = (function (){var G__42421 = color;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__42421))
{return "#CCCCCC";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__42421))
{return "#333333";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(color)].join('')));
} else
{return null;
}
}
}
})();var c2_42435 = (function (){var G__42422 = color;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__42422))
{return "#AAAAAA";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__42422))
{return "#111111";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(color)].join('')));
} else
{return null;
}
}
}
})();webgo.gui.fill_circle.call(null,ctx,x_42432,y_42433,(cell_size * 0.45),c1_42434,c2_42435);
{
var G__42436 = seq__42415;
var G__42437 = chunk__42416;
var G__42438 = count__42417;
var G__42439 = (i__42418 + 1);
seq__42415 = G__42436;
chunk__42416 = G__42437;
count__42417 = G__42438;
i__42418 = G__42439;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__42415);if(temp__4092__auto__)
{var seq__42415__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42415__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__42415__$1);{
var G__42440 = cljs.core.chunk_rest.call(null,seq__42415__$1);
var G__42441 = c__4191__auto__;
var G__42442 = cljs.core.count.call(null,c__4191__auto__);
var G__42443 = 0;
seq__42415 = G__42440;
chunk__42416 = G__42441;
count__42417 = G__42442;
i__42418 = G__42443;
continue;
}
} else
{var vec__42423 = cljs.core.first.call(null,seq__42415__$1);var pos = cljs.core.nth.call(null,vec__42423,0,null);var color = cljs.core.nth.call(null,vec__42423,1,null);var vec__42424_42444 = webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,pos,cell_size,x_offset,y_offset);var x_42445 = cljs.core.nth.call(null,vec__42424_42444,0,null);var y_42446 = cljs.core.nth.call(null,vec__42424_42444,1,null);var c1_42447 = (function (){var G__42425 = color;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__42425))
{return "#CCCCCC";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__42425))
{return "#333333";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(color)].join('')));
} else
{return null;
}
}
}
})();var c2_42448 = (function (){var G__42426 = color;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__42426))
{return "#AAAAAA";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__42426))
{return "#111111";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(color)].join('')));
} else
{return null;
}
}
}
})();webgo.gui.fill_circle.call(null,ctx,x_42445,y_42446,(cell_size * 0.45),c1_42447,c2_42448);
{
var G__42449 = cljs.core.next.call(null,seq__42415__$1);
var G__42450 = null;
var G__42451 = 0;
var G__42452 = 0;
seq__42415 = G__42449;
chunk__42416 = G__42450;
count__42417 = G__42451;
i__42418 = G__42452;
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
webgo.gui.draw = (function draw(canvas,board,cell_size,x_offset,y_offset){var ctx_42453 = canvas.getContext("2d");ctx_42453.clearRect(0,0,canvas.width,canvas.height);
ctx_42453.shadowBlur = 0;
ctx_42453.shadowColor = "black";
ctx_42453.fillStyle = "black";
ctx_42453.strokeStyle = "#009999";
webgo.gui.draw_grid.call(null,ctx_42453,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(board),cell_size,x_offset,y_offset);
ctx_42453.shadowBlur = 5;
webgo.gui.draw_stones.call(null,ctx_42453,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board),new cljs.core.Keyword(null,"last-move","last-move",2980834330).cljs$core$IFn$_invoke$arity$1(board),cell_size,x_offset,y_offset);
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
webgo.gui.update_scorebar_BANG_ = (function update_scorebar_BANG_(scorebar,board){var t = new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board);var m = new cljs.core.Keyword(null,"move","move",1017261891).cljs$core$IFn$_invoke$arity$1(board);return scorebar.innerHTML = [cljs.core.str("Turn "),cljs.core.str(m),cljs.core.str(". "),cljs.core.str((function (){var G__42455 = t;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__42455))
{return "White";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__42455))
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
webgo.gui.render = (function render(gui){var vec__42457 = webgo.gui.gui_xform.call(null,gui);var x = cljs.core.nth.call(null,vec__42457,0,null);var y = cljs.core.nth.call(null,vec__42457,1,null);var s = cljs.core.nth.call(null,vec__42457,2,null);var sb = new cljs.core.Keyword(null,"scorebar","scorebar",528404403).cljs$core$IFn$_invoke$arity$1(gui);var c = new cljs.core.Keyword(null,"canvas","canvas",3941165258).cljs$core$IFn$_invoke$arity$1(gui);var b = cljs.core.deref.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(gui));webgo.gui.draw.call(null,c,b,s,x,y);
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
var board__GT_screen__2 = (function (gui,pos){var vec__42459 = webgo.gui.gui_xform.call(null,gui);var x = cljs.core.nth.call(null,vec__42459,0,null);var y = cljs.core.nth.call(null,vec__42459,1,null);var s = cljs.core.nth.call(null,vec__42459,2,null);return webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,pos,s,x,y);
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
var screen__GT_board__2 = (function (gui,pos){var vec__42461 = webgo.gui.gui_xform.call(null,gui);var x = cljs.core.nth.call(null,vec__42461,0,null);var y = cljs.core.nth.call(null,vec__42461,1,null);var s = cljs.core.nth.call(null,vec__42461,2,null);return webgo.gui.screen__GT_board_SINGLEQUOTE_.call(null,pos,s,x,y);
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
webgo.gui.show_score_BANG_ = (function show_score_BANG_(gui){var scorebar = new cljs.core.Keyword(null,"scorebar","scorebar",528404403).cljs$core$IFn$_invoke$arity$1(gui);var board = cljs.core.deref.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(gui));var t = new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board);var m = new cljs.core.Keyword(null,"move","move",1017261891).cljs$core$IFn$_invoke$arity$1(board);var vec__42463 = webgo.go.score.call(null,board);var b = cljs.core.nth.call(null,vec__42463,0,null);var w = cljs.core.nth.call(null,vec__42463,1,null);var winner = (((b > w))?"Black won. ":(((b < w))?"White won. ":((new cljs.core.Keyword(null,"default","default",2558708147))?"It's a tie. ":null)));return scorebar.innerHTML = [cljs.core.str(winner),cljs.core.str("The final score was "),cljs.core.str(b),cljs.core.str(" to "),cljs.core.str(w),cljs.core.str(".")].join('');
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