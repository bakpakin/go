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
webgo.gui.screen__GT_board_SINGLEQUOTE_ = (function screen__GT_board_SINGLEQUOTE_(p__41733,spacing,x_offset,y_offset){var vec__41735 = p__41733;var x = cljs.core.nth.call(null,vec__41735,0,null);var y = cljs.core.nth.call(null,vec__41735,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(Math.floor.call(null,((x - x_offset) / spacing)) | 0),(Math.floor.call(null,((y - y_offset) / spacing)) | 0)], null);
});
/**
* Converts board coordinates to screen coordinates.
*/
webgo.gui.board__GT_screen_SINGLEQUOTE_ = (function board__GT_screen_SINGLEQUOTE_(p__41736,spacing,x_offset,y_offset){var vec__41738 = p__41736;var x = cljs.core.nth.call(null,vec__41738,0,null);var y = cljs.core.nth.call(null,vec__41738,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x_offset + (spacing * x)) + (spacing / 2.0)),((y_offset + (spacing * y)) + (spacing / 2.0))], null);
});
/**
* Fills a circle with a gradient.
*/
webgo.gui.fill_circle = (function fill_circle(ctx,x,y,r,inner_color,outer_color){var vec__41741 = inner_color;var ri = cljs.core.nth.call(null,vec__41741,0,null);var gi = cljs.core.nth.call(null,vec__41741,1,null);var bi = cljs.core.nth.call(null,vec__41741,2,null);var vec__41742 = outer_color;var ro = cljs.core.nth.call(null,vec__41742,0,null);var go = cljs.core.nth.call(null,vec__41742,1,null);var bo = cljs.core.nth.call(null,vec__41742,2,null);var grd = ctx.createRadialGradient(x,y,0,x,y,r);grd.addColorStop(0,inner_color);
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
var b_41752 = (cell_size / 2);var b2_41753 = ((cell_size * size) - b_41752);var seq__41748_41754 = cljs.core.seq.call(null,cljs.core.map.call(null,(function (p1__41743_SHARP_){return (b_41752 + (cell_size * p1__41743_SHARP_));
}),cljs.core.range.call(null,size)));var chunk__41749_41755 = null;var count__41750_41756 = 0;var i__41751_41757 = 0;while(true){
if((i__41751_41757 < count__41750_41756))
{var i_41758 = cljs.core._nth.call(null,chunk__41749_41755,i__41751_41757);ctx.moveTo(b_41752,i_41758);
ctx.lineTo(b2_41753,i_41758);
ctx.moveTo(i_41758,b_41752);
ctx.lineTo(i_41758,b2_41753);
{
var G__41759 = seq__41748_41754;
var G__41760 = chunk__41749_41755;
var G__41761 = count__41750_41756;
var G__41762 = (i__41751_41757 + 1);
seq__41748_41754 = G__41759;
chunk__41749_41755 = G__41760;
count__41750_41756 = G__41761;
i__41751_41757 = G__41762;
continue;
}
} else
{var temp__4092__auto___41763 = cljs.core.seq.call(null,seq__41748_41754);if(temp__4092__auto___41763)
{var seq__41748_41764__$1 = temp__4092__auto___41763;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41748_41764__$1))
{var c__4191__auto___41765 = cljs.core.chunk_first.call(null,seq__41748_41764__$1);{
var G__41766 = cljs.core.chunk_rest.call(null,seq__41748_41764__$1);
var G__41767 = c__4191__auto___41765;
var G__41768 = cljs.core.count.call(null,c__4191__auto___41765);
var G__41769 = 0;
seq__41748_41754 = G__41766;
chunk__41749_41755 = G__41767;
count__41750_41756 = G__41768;
i__41751_41757 = G__41769;
continue;
}
} else
{var i_41770 = cljs.core.first.call(null,seq__41748_41764__$1);ctx.moveTo(b_41752,i_41770);
ctx.lineTo(b2_41753,i_41770);
ctx.moveTo(i_41770,b_41752);
ctx.lineTo(i_41770,b2_41753);
{
var G__41771 = cljs.core.next.call(null,seq__41748_41764__$1);
var G__41772 = null;
var G__41773 = 0;
var G__41774 = 0;
seq__41748_41754 = G__41771;
chunk__41749_41755 = G__41772;
count__41750_41756 = G__41773;
i__41751_41757 = G__41774;
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
{var l_41801 = webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,last_move,cell_size,x_offset,y_offset);var vec__41788_41802 = l_41801;var lx_41803 = cljs.core.nth.call(null,vec__41788_41802,0,null);var ly_41804 = cljs.core.nth.call(null,vec__41788_41802,1,null);webgo.gui.fill_circle.call(null,ctx,lx_41803,ly_41804,(cell_size * 0.5),"#00FFFF","#00AAAA");
} else
{}
var seq__41789 = cljs.core.seq.call(null,stones);var chunk__41790 = null;var count__41791 = 0;var i__41792 = 0;while(true){
if((i__41792 < count__41791))
{var vec__41793 = cljs.core._nth.call(null,chunk__41790,i__41792);var pos = cljs.core.nth.call(null,vec__41793,0,null);var color = cljs.core.nth.call(null,vec__41793,1,null);var vec__41794_41805 = webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,pos,cell_size,x_offset,y_offset);var x_41806 = cljs.core.nth.call(null,vec__41794_41805,0,null);var y_41807 = cljs.core.nth.call(null,vec__41794_41805,1,null);var c1_41808 = (function (){var G__41795 = color;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__41795))
{return "#CCCCCC";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__41795))
{return "#333333";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(color)].join('')));
} else
{return null;
}
}
}
})();var c2_41809 = (function (){var G__41796 = color;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__41796))
{return "#AAAAAA";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__41796))
{return "#111111";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(color)].join('')));
} else
{return null;
}
}
}
})();webgo.gui.fill_circle.call(null,ctx,x_41806,y_41807,(cell_size * 0.45),c1_41808,c2_41809);
{
var G__41810 = seq__41789;
var G__41811 = chunk__41790;
var G__41812 = count__41791;
var G__41813 = (i__41792 + 1);
seq__41789 = G__41810;
chunk__41790 = G__41811;
count__41791 = G__41812;
i__41792 = G__41813;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__41789);if(temp__4092__auto__)
{var seq__41789__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41789__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__41789__$1);{
var G__41814 = cljs.core.chunk_rest.call(null,seq__41789__$1);
var G__41815 = c__4191__auto__;
var G__41816 = cljs.core.count.call(null,c__4191__auto__);
var G__41817 = 0;
seq__41789 = G__41814;
chunk__41790 = G__41815;
count__41791 = G__41816;
i__41792 = G__41817;
continue;
}
} else
{var vec__41797 = cljs.core.first.call(null,seq__41789__$1);var pos = cljs.core.nth.call(null,vec__41797,0,null);var color = cljs.core.nth.call(null,vec__41797,1,null);var vec__41798_41818 = webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,pos,cell_size,x_offset,y_offset);var x_41819 = cljs.core.nth.call(null,vec__41798_41818,0,null);var y_41820 = cljs.core.nth.call(null,vec__41798_41818,1,null);var c1_41821 = (function (){var G__41799 = color;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__41799))
{return "#CCCCCC";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__41799))
{return "#333333";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(color)].join('')));
} else
{return null;
}
}
}
})();var c2_41822 = (function (){var G__41800 = color;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__41800))
{return "#AAAAAA";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__41800))
{return "#111111";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(color)].join('')));
} else
{return null;
}
}
}
})();webgo.gui.fill_circle.call(null,ctx,x_41819,y_41820,(cell_size * 0.45),c1_41821,c2_41822);
{
var G__41823 = cljs.core.next.call(null,seq__41789__$1);
var G__41824 = null;
var G__41825 = 0;
var G__41826 = 0;
seq__41789 = G__41823;
chunk__41790 = G__41824;
count__41791 = G__41825;
i__41792 = G__41826;
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
webgo.gui.draw = (function draw(canvas,board,cell_size,x_offset,y_offset){var ctx_41827 = canvas.getContext("2d");ctx_41827.clearRect(0,0,canvas.width,canvas.height);
ctx_41827.shadowBlur = 0;
ctx_41827.shadowColor = "black";
ctx_41827.fillStyle = "black";
ctx_41827.strokeStyle = "#009999";
webgo.gui.draw_grid.call(null,ctx_41827,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(board),cell_size,x_offset,y_offset);
ctx_41827.shadowBlur = 5;
webgo.gui.draw_stones.call(null,ctx_41827,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board),new cljs.core.Keyword(null,"last-move","last-move",2980834330).cljs$core$IFn$_invoke$arity$1(board),cell_size,x_offset,y_offset);
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
webgo.gui.update_scorebar_BANG_ = (function update_scorebar_BANG_(scorebar,board){var t = new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board);var m = new cljs.core.Keyword(null,"move","move",1017261891).cljs$core$IFn$_invoke$arity$1(board);return scorebar.innerHTML = [cljs.core.str("Turn "),cljs.core.str(m),cljs.core.str(". "),cljs.core.str((function (){var G__41829 = t;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__41829))
{return "White";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__41829))
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
webgo.gui.render = (function render(gui){var vec__41831 = webgo.gui.gui_xform.call(null,gui);var x = cljs.core.nth.call(null,vec__41831,0,null);var y = cljs.core.nth.call(null,vec__41831,1,null);var s = cljs.core.nth.call(null,vec__41831,2,null);var sb = new cljs.core.Keyword(null,"scorebar","scorebar",528404403).cljs$core$IFn$_invoke$arity$1(gui);var c = new cljs.core.Keyword(null,"canvas","canvas",3941165258).cljs$core$IFn$_invoke$arity$1(gui);var b = cljs.core.deref.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(gui));webgo.gui.draw.call(null,c,b,s,x,y);
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
var board__GT_screen__2 = (function (gui,pos){var vec__41833 = webgo.gui.gui_xform.call(null,gui);var x = cljs.core.nth.call(null,vec__41833,0,null);var y = cljs.core.nth.call(null,vec__41833,1,null);var s = cljs.core.nth.call(null,vec__41833,2,null);return webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,pos,s,x,y);
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
var screen__GT_board__2 = (function (gui,pos){var vec__41835 = webgo.gui.gui_xform.call(null,gui);var x = cljs.core.nth.call(null,vec__41835,0,null);var y = cljs.core.nth.call(null,vec__41835,1,null);var s = cljs.core.nth.call(null,vec__41835,2,null);return webgo.gui.screen__GT_board_SINGLEQUOTE_.call(null,pos,s,x,y);
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
}),false);
return new cljs.core.Keyword(null,"canvas","canvas",3941165258).cljs$core$IFn$_invoke$arity$1(gui).addEventListener("touchstart",(function (e){var c = new cljs.core.Keyword(null,"canvas","canvas",3941165258).cljs$core$IFn$_invoke$arity$1(gui);var pos = webgo.gui.screen__GT_board.call(null,gui,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((e.touches[0]).pageX - c.offsetLeft),((e.touches[0]).pageY - c.offsetTop)], null));if(webgo.go.pos_valid_QMARK_.call(null,pos,cljs.core.deref.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(gui))))
{return func.call(null,pos);
} else
{return null;
}
}),false);
});

//# sourceMappingURL=gui.js.map