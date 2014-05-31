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
webgo.gui.screen__GT_board_SINGLEQUOTE_ = (function screen__GT_board_SINGLEQUOTE_(p__40482,spacing,x_offset,y_offset){var vec__40484 = p__40482;var x = cljs.core.nth.call(null,vec__40484,0,null);var y = cljs.core.nth.call(null,vec__40484,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(Math.floor.call(null,((x - x_offset) / spacing)) | 0),(Math.floor.call(null,((y - y_offset) / spacing)) | 0)], null);
});
/**
* Converts board coordinates to screen coordinates.
*/
webgo.gui.board__GT_screen_SINGLEQUOTE_ = (function board__GT_screen_SINGLEQUOTE_(p__40485,spacing,x_offset,y_offset){var vec__40487 = p__40485;var x = cljs.core.nth.call(null,vec__40487,0,null);var y = cljs.core.nth.call(null,vec__40487,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x_offset + (spacing * x)) + (spacing / 2.0)),((y_offset + (spacing * y)) + (spacing / 2.0))], null);
});
/**
* Fills a circle with a gradient.
*/
webgo.gui.fill_circle = (function fill_circle(ctx,x,y,r,inner_color,outer_color){var vec__40490 = inner_color;var ri = cljs.core.nth.call(null,vec__40490,0,null);var gi = cljs.core.nth.call(null,vec__40490,1,null);var bi = cljs.core.nth.call(null,vec__40490,2,null);var vec__40491 = outer_color;var ro = cljs.core.nth.call(null,vec__40491,0,null);var go = cljs.core.nth.call(null,vec__40491,1,null);var bo = cljs.core.nth.call(null,vec__40491,2,null);var grd = ctx.createRadialGradient(x,y,0,x,y,r);grd.addColorStop(0,inner_color);
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
var b_40501 = (cell_size / 2);var b2_40502 = ((cell_size * size) - b_40501);var seq__40497_40503 = cljs.core.seq.call(null,cljs.core.map.call(null,(function (p1__40492_SHARP_){return (b_40501 + (cell_size * p1__40492_SHARP_));
}),cljs.core.range.call(null,size)));var chunk__40498_40504 = null;var count__40499_40505 = 0;var i__40500_40506 = 0;while(true){
if((i__40500_40506 < count__40499_40505))
{var i_40507 = cljs.core._nth.call(null,chunk__40498_40504,i__40500_40506);ctx.moveTo(b_40501,i_40507);
ctx.lineTo(b2_40502,i_40507);
ctx.moveTo(i_40507,b_40501);
ctx.lineTo(i_40507,b2_40502);
{
var G__40508 = seq__40497_40503;
var G__40509 = chunk__40498_40504;
var G__40510 = count__40499_40505;
var G__40511 = (i__40500_40506 + 1);
seq__40497_40503 = G__40508;
chunk__40498_40504 = G__40509;
count__40499_40505 = G__40510;
i__40500_40506 = G__40511;
continue;
}
} else
{var temp__4092__auto___40512 = cljs.core.seq.call(null,seq__40497_40503);if(temp__4092__auto___40512)
{var seq__40497_40513__$1 = temp__4092__auto___40512;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40497_40513__$1))
{var c__4191__auto___40514 = cljs.core.chunk_first.call(null,seq__40497_40513__$1);{
var G__40515 = cljs.core.chunk_rest.call(null,seq__40497_40513__$1);
var G__40516 = c__4191__auto___40514;
var G__40517 = cljs.core.count.call(null,c__4191__auto___40514);
var G__40518 = 0;
seq__40497_40503 = G__40515;
chunk__40498_40504 = G__40516;
count__40499_40505 = G__40517;
i__40500_40506 = G__40518;
continue;
}
} else
{var i_40519 = cljs.core.first.call(null,seq__40497_40513__$1);ctx.moveTo(b_40501,i_40519);
ctx.lineTo(b2_40502,i_40519);
ctx.moveTo(i_40519,b_40501);
ctx.lineTo(i_40519,b2_40502);
{
var G__40520 = cljs.core.next.call(null,seq__40497_40513__$1);
var G__40521 = null;
var G__40522 = 0;
var G__40523 = 0;
seq__40497_40503 = G__40520;
chunk__40498_40504 = G__40521;
count__40499_40505 = G__40522;
i__40500_40506 = G__40523;
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
{var l_40550 = webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,last_move,cell_size,x_offset,y_offset);var vec__40537_40551 = l_40550;var lx_40552 = cljs.core.nth.call(null,vec__40537_40551,0,null);var ly_40553 = cljs.core.nth.call(null,vec__40537_40551,1,null);webgo.gui.fill_circle.call(null,ctx,lx_40552,ly_40553,(cell_size * 0.5),"#00FFFF","#00AAAA");
} else
{}
var seq__40538 = cljs.core.seq.call(null,stones);var chunk__40539 = null;var count__40540 = 0;var i__40541 = 0;while(true){
if((i__40541 < count__40540))
{var vec__40542 = cljs.core._nth.call(null,chunk__40539,i__40541);var pos = cljs.core.nth.call(null,vec__40542,0,null);var color = cljs.core.nth.call(null,vec__40542,1,null);var vec__40543_40554 = webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,pos,cell_size,x_offset,y_offset);var x_40555 = cljs.core.nth.call(null,vec__40543_40554,0,null);var y_40556 = cljs.core.nth.call(null,vec__40543_40554,1,null);var c1_40557 = (function (){var G__40544 = color;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__40544))
{return "#CCCCCC";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__40544))
{return "#333333";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(color)].join('')));
} else
{return null;
}
}
}
})();var c2_40558 = (function (){var G__40545 = color;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__40545))
{return "#AAAAAA";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__40545))
{return "#111111";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(color)].join('')));
} else
{return null;
}
}
}
})();webgo.gui.fill_circle.call(null,ctx,x_40555,y_40556,(cell_size * 0.45),c1_40557,c2_40558);
{
var G__40559 = seq__40538;
var G__40560 = chunk__40539;
var G__40561 = count__40540;
var G__40562 = (i__40541 + 1);
seq__40538 = G__40559;
chunk__40539 = G__40560;
count__40540 = G__40561;
i__40541 = G__40562;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__40538);if(temp__4092__auto__)
{var seq__40538__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40538__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__40538__$1);{
var G__40563 = cljs.core.chunk_rest.call(null,seq__40538__$1);
var G__40564 = c__4191__auto__;
var G__40565 = cljs.core.count.call(null,c__4191__auto__);
var G__40566 = 0;
seq__40538 = G__40563;
chunk__40539 = G__40564;
count__40540 = G__40565;
i__40541 = G__40566;
continue;
}
} else
{var vec__40546 = cljs.core.first.call(null,seq__40538__$1);var pos = cljs.core.nth.call(null,vec__40546,0,null);var color = cljs.core.nth.call(null,vec__40546,1,null);var vec__40547_40567 = webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,pos,cell_size,x_offset,y_offset);var x_40568 = cljs.core.nth.call(null,vec__40547_40567,0,null);var y_40569 = cljs.core.nth.call(null,vec__40547_40567,1,null);var c1_40570 = (function (){var G__40548 = color;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__40548))
{return "#CCCCCC";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__40548))
{return "#333333";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(color)].join('')));
} else
{return null;
}
}
}
})();var c2_40571 = (function (){var G__40549 = color;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__40549))
{return "#AAAAAA";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__40549))
{return "#111111";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(color)].join('')));
} else
{return null;
}
}
}
})();webgo.gui.fill_circle.call(null,ctx,x_40568,y_40569,(cell_size * 0.45),c1_40570,c2_40571);
{
var G__40572 = cljs.core.next.call(null,seq__40538__$1);
var G__40573 = null;
var G__40574 = 0;
var G__40575 = 0;
seq__40538 = G__40572;
chunk__40539 = G__40573;
count__40540 = G__40574;
i__40541 = G__40575;
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
webgo.gui.draw = (function draw(canvas,board,cell_size,x_offset,y_offset){var ctx = canvas.getContext("2d");ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.shadowBlur = 0;
ctx.shadowColor = "black";
ctx.fillStyle = "black";
ctx.strokeStyle = "#009999";
webgo.gui.draw_grid.call(null,ctx,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(board),cell_size,x_offset,y_offset);
ctx.shadowBlur = 5;
return webgo.gui.draw_stones.call(null,ctx,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board),new cljs.core.Keyword(null,"last-move","last-move",2980834330).cljs$core$IFn$_invoke$arity$1(board),cell_size,x_offset,y_offset);
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
webgo.gui.update_scorebar_BANG_ = (function update_scorebar_BANG_(scorebar,board){var t = new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board);var m = new cljs.core.Keyword(null,"move","move",1017261891).cljs$core$IFn$_invoke$arity$1(board);return scorebar.innerHTML = [cljs.core.str("Turn "),cljs.core.str(m),cljs.core.str(". "),cljs.core.str((function (){var G__40577 = t;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__40577))
{return "White";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__40577))
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
webgo.gui.render = (function render(gui){var vec__40579 = webgo.gui.gui_xform.call(null,gui);var x = cljs.core.nth.call(null,vec__40579,0,null);var y = cljs.core.nth.call(null,vec__40579,1,null);var s = cljs.core.nth.call(null,vec__40579,2,null);var sb = new cljs.core.Keyword(null,"scorebar","scorebar",528404403).cljs$core$IFn$_invoke$arity$1(gui);var c = new cljs.core.Keyword(null,"canvas","canvas",3941165258).cljs$core$IFn$_invoke$arity$1(gui);var b = cljs.core.deref.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(gui));webgo.gui.draw.call(null,c,b,s,x,y);
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
var board__GT_screen__2 = (function (gui,pos){var vec__40581 = webgo.gui.gui_xform.call(null,gui);var x = cljs.core.nth.call(null,vec__40581,0,null);var y = cljs.core.nth.call(null,vec__40581,1,null);var s = cljs.core.nth.call(null,vec__40581,2,null);return webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,pos,s,x,y);
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
var screen__GT_board__2 = (function (gui,pos){var vec__40583 = webgo.gui.gui_xform.call(null,gui);var x = cljs.core.nth.call(null,vec__40583,0,null);var y = cljs.core.nth.call(null,vec__40583,1,null);var s = cljs.core.nth.call(null,vec__40583,2,null);return webgo.gui.screen__GT_board_SINGLEQUOTE_.call(null,pos,s,x,y);
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
* Adds a click-listener func to listen for mouse clicks. If the mouse
* is clicked over the canvas, func is invoked with one argument, the
* position of the mouse in the form [board-x board-y] or nil if not on the board.
*/
webgo.gui.add_on_click = (function add_on_click(gui,func){new cljs.core.Keyword(null,"canvas","canvas",3941165258).cljs$core$IFn$_invoke$arity$1(gui).addEventListener("click",(function (e){var c = new cljs.core.Keyword(null,"canvas","canvas",3941165258).cljs$core$IFn$_invoke$arity$1(gui);var pos = webgo.gui.screen__GT_board.call(null,gui,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(e.pageX - c.offsetLeft),(e.pageY - c.offsetTop)], null));if(webgo.go.pos_valid_QMARK_.call(null,pos,cljs.core.deref.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(gui))))
{return func.call(null,pos);
} else
{return null;
}
}),true);
return new cljs.core.Keyword(null,"canvas","canvas",3941165258).cljs$core$IFn$_invoke$arity$1(gui).addEventListener("touchstart",(function g(e){e.preventDefault();
var c = new cljs.core.Keyword(null,"canvas","canvas",3941165258).cljs$core$IFn$_invoke$arity$1(gui);var pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first.call(null,e.targetTouches).pageX - c.offsetLeft),(cljs.core.first.call(null,e.targetTouches).pageY - c.offsetTop)], null);var p = webgo.gui.screen__GT_board.call(null,gui,pos);if(webgo.go.pos_valid_QMARK_.call(null,p,cljs.core.deref.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(gui))))
{return func.call(null,p);
} else
{return null;
}
}),true);
});

//# sourceMappingURL=gui.js.map