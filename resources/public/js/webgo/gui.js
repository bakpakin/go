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
webgo.gui.screen__GT_board_SINGLEQUOTE_ = (function screen__GT_board_SINGLEQUOTE_(p__40894,spacing,x_offset,y_offset){var vec__40896 = p__40894;var x = cljs.core.nth.call(null,vec__40896,0,null);var y = cljs.core.nth.call(null,vec__40896,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(Math.floor.call(null,((x - x_offset) / spacing)) | 0),(Math.floor.call(null,((y - y_offset) / spacing)) | 0)], null);
});
/**
* Converts board coordinates to screen coordinates.
*/
webgo.gui.board__GT_screen_SINGLEQUOTE_ = (function board__GT_screen_SINGLEQUOTE_(p__40897,spacing,x_offset,y_offset){var vec__40899 = p__40897;var x = cljs.core.nth.call(null,vec__40899,0,null);var y = cljs.core.nth.call(null,vec__40899,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x_offset + (spacing * x)) + (spacing / 2.0)),((y_offset + (spacing * y)) + (spacing / 2.0))], null);
});
/**
* Fills a circle with a gradient.
*/
webgo.gui.fill_circle = (function fill_circle(ctx,x,y,r,inner_color,outer_color){var vec__40902 = inner_color;var ri = cljs.core.nth.call(null,vec__40902,0,null);var gi = cljs.core.nth.call(null,vec__40902,1,null);var bi = cljs.core.nth.call(null,vec__40902,2,null);var vec__40903 = outer_color;var ro = cljs.core.nth.call(null,vec__40903,0,null);var go = cljs.core.nth.call(null,vec__40903,1,null);var bo = cljs.core.nth.call(null,vec__40903,2,null);var grd = ctx.createRadialGradient(x,y,0,x,y,r);grd.addColorStop(0,inner_color);
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
var b_40913 = (cell_size / 2);var b2_40914 = ((cell_size * size) - b_40913);var seq__40909_40915 = cljs.core.seq.call(null,cljs.core.map.call(null,(function (p1__40904_SHARP_){return (b_40913 + (cell_size * p1__40904_SHARP_));
}),cljs.core.range.call(null,size)));var chunk__40910_40916 = null;var count__40911_40917 = 0;var i__40912_40918 = 0;while(true){
if((i__40912_40918 < count__40911_40917))
{var i_40919 = cljs.core._nth.call(null,chunk__40910_40916,i__40912_40918);ctx.moveTo(b_40913,i_40919);
ctx.lineTo(b2_40914,i_40919);
ctx.moveTo(i_40919,b_40913);
ctx.lineTo(i_40919,b2_40914);
{
var G__40920 = seq__40909_40915;
var G__40921 = chunk__40910_40916;
var G__40922 = count__40911_40917;
var G__40923 = (i__40912_40918 + 1);
seq__40909_40915 = G__40920;
chunk__40910_40916 = G__40921;
count__40911_40917 = G__40922;
i__40912_40918 = G__40923;
continue;
}
} else
{var temp__4092__auto___40924 = cljs.core.seq.call(null,seq__40909_40915);if(temp__4092__auto___40924)
{var seq__40909_40925__$1 = temp__4092__auto___40924;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40909_40925__$1))
{var c__4191__auto___40926 = cljs.core.chunk_first.call(null,seq__40909_40925__$1);{
var G__40927 = cljs.core.chunk_rest.call(null,seq__40909_40925__$1);
var G__40928 = c__4191__auto___40926;
var G__40929 = cljs.core.count.call(null,c__4191__auto___40926);
var G__40930 = 0;
seq__40909_40915 = G__40927;
chunk__40910_40916 = G__40928;
count__40911_40917 = G__40929;
i__40912_40918 = G__40930;
continue;
}
} else
{var i_40931 = cljs.core.first.call(null,seq__40909_40925__$1);ctx.moveTo(b_40913,i_40931);
ctx.lineTo(b2_40914,i_40931);
ctx.moveTo(i_40931,b_40913);
ctx.lineTo(i_40931,b2_40914);
{
var G__40932 = cljs.core.next.call(null,seq__40909_40925__$1);
var G__40933 = null;
var G__40934 = 0;
var G__40935 = 0;
seq__40909_40915 = G__40932;
chunk__40910_40916 = G__40933;
count__40911_40917 = G__40934;
i__40912_40918 = G__40935;
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
{var l_40962 = webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,last_move,cell_size,x_offset,y_offset);var vec__40949_40963 = l_40962;var lx_40964 = cljs.core.nth.call(null,vec__40949_40963,0,null);var ly_40965 = cljs.core.nth.call(null,vec__40949_40963,1,null);webgo.gui.fill_circle.call(null,ctx,lx_40964,ly_40965,(cell_size * 0.5),"#00FFFF","#00AAAA");
} else
{}
var seq__40950 = cljs.core.seq.call(null,stones);var chunk__40951 = null;var count__40952 = 0;var i__40953 = 0;while(true){
if((i__40953 < count__40952))
{var vec__40954 = cljs.core._nth.call(null,chunk__40951,i__40953);var pos = cljs.core.nth.call(null,vec__40954,0,null);var color = cljs.core.nth.call(null,vec__40954,1,null);var vec__40955_40966 = webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,pos,cell_size,x_offset,y_offset);var x_40967 = cljs.core.nth.call(null,vec__40955_40966,0,null);var y_40968 = cljs.core.nth.call(null,vec__40955_40966,1,null);var c1_40969 = (function (){var G__40956 = color;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__40956))
{return "#CCCCCC";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__40956))
{return "#333333";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(color)].join('')));
} else
{return null;
}
}
}
})();var c2_40970 = (function (){var G__40957 = color;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__40957))
{return "#AAAAAA";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__40957))
{return "#111111";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(color)].join('')));
} else
{return null;
}
}
}
})();webgo.gui.fill_circle.call(null,ctx,x_40967,y_40968,(cell_size * 0.45),c1_40969,c2_40970);
{
var G__40971 = seq__40950;
var G__40972 = chunk__40951;
var G__40973 = count__40952;
var G__40974 = (i__40953 + 1);
seq__40950 = G__40971;
chunk__40951 = G__40972;
count__40952 = G__40973;
i__40953 = G__40974;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__40950);if(temp__4092__auto__)
{var seq__40950__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40950__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__40950__$1);{
var G__40975 = cljs.core.chunk_rest.call(null,seq__40950__$1);
var G__40976 = c__4191__auto__;
var G__40977 = cljs.core.count.call(null,c__4191__auto__);
var G__40978 = 0;
seq__40950 = G__40975;
chunk__40951 = G__40976;
count__40952 = G__40977;
i__40953 = G__40978;
continue;
}
} else
{var vec__40958 = cljs.core.first.call(null,seq__40950__$1);var pos = cljs.core.nth.call(null,vec__40958,0,null);var color = cljs.core.nth.call(null,vec__40958,1,null);var vec__40959_40979 = webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,pos,cell_size,x_offset,y_offset);var x_40980 = cljs.core.nth.call(null,vec__40959_40979,0,null);var y_40981 = cljs.core.nth.call(null,vec__40959_40979,1,null);var c1_40982 = (function (){var G__40960 = color;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__40960))
{return "#CCCCCC";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__40960))
{return "#333333";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(color)].join('')));
} else
{return null;
}
}
}
})();var c2_40983 = (function (){var G__40961 = color;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__40961))
{return "#AAAAAA";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__40961))
{return "#111111";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(color)].join('')));
} else
{return null;
}
}
}
})();webgo.gui.fill_circle.call(null,ctx,x_40980,y_40981,(cell_size * 0.45),c1_40982,c2_40983);
{
var G__40984 = cljs.core.next.call(null,seq__40950__$1);
var G__40985 = null;
var G__40986 = 0;
var G__40987 = 0;
seq__40950 = G__40984;
chunk__40951 = G__40985;
count__40952 = G__40986;
i__40953 = G__40987;
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
webgo.gui.update_scorebar_BANG_ = (function update_scorebar_BANG_(scorebar,board){var t = new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board);var m = new cljs.core.Keyword(null,"move","move",1017261891).cljs$core$IFn$_invoke$arity$1(board);return scorebar.innerHTML = [cljs.core.str("Turn "),cljs.core.str(m),cljs.core.str(". "),cljs.core.str((function (){var G__40989 = t;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__40989))
{return "White";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__40989))
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
webgo.gui.render = (function render(gui){var vec__40991 = webgo.gui.gui_xform.call(null,gui);var x = cljs.core.nth.call(null,vec__40991,0,null);var y = cljs.core.nth.call(null,vec__40991,1,null);var s = cljs.core.nth.call(null,vec__40991,2,null);var sb = new cljs.core.Keyword(null,"scorebar","scorebar",528404403).cljs$core$IFn$_invoke$arity$1(gui);var c = new cljs.core.Keyword(null,"canvas","canvas",3941165258).cljs$core$IFn$_invoke$arity$1(gui);var b = cljs.core.deref.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(gui));webgo.gui.draw.call(null,c,b,s,x,y);
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
var board__GT_screen__2 = (function (gui,pos){var vec__40993 = webgo.gui.gui_xform.call(null,gui);var x = cljs.core.nth.call(null,vec__40993,0,null);var y = cljs.core.nth.call(null,vec__40993,1,null);var s = cljs.core.nth.call(null,vec__40993,2,null);return webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,pos,s,x,y);
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
var screen__GT_board__2 = (function (gui,pos){var vec__40995 = webgo.gui.gui_xform.call(null,gui);var x = cljs.core.nth.call(null,vec__40995,0,null);var y = cljs.core.nth.call(null,vec__40995,1,null);var s = cljs.core.nth.call(null,vec__40995,2,null);return webgo.gui.screen__GT_board_SINGLEQUOTE_.call(null,pos,s,x,y);
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