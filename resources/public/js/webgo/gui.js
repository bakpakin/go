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
webgo.gui.screen__GT_board_SINGLEQUOTE_ = (function screen__GT_board_SINGLEQUOTE_(p__41836,spacing,x_offset,y_offset){var vec__41838 = p__41836;var x = cljs.core.nth.call(null,vec__41838,0,null);var y = cljs.core.nth.call(null,vec__41838,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(Math.floor.call(null,((x - x_offset) / spacing)) | 0),(Math.floor.call(null,((y - y_offset) / spacing)) | 0)], null);
});
/**
* Converts board coordinates to screen coordinates.
*/
webgo.gui.board__GT_screen_SINGLEQUOTE_ = (function board__GT_screen_SINGLEQUOTE_(p__41839,spacing,x_offset,y_offset){var vec__41841 = p__41839;var x = cljs.core.nth.call(null,vec__41841,0,null);var y = cljs.core.nth.call(null,vec__41841,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x_offset + (spacing * x)) + (spacing / 2.0)),((y_offset + (spacing * y)) + (spacing / 2.0))], null);
});
/**
* Fills a circle with a gradient.
*/
webgo.gui.fill_circle = (function fill_circle(ctx,x,y,r,inner_color,outer_color){var vec__41844 = inner_color;var ri = cljs.core.nth.call(null,vec__41844,0,null);var gi = cljs.core.nth.call(null,vec__41844,1,null);var bi = cljs.core.nth.call(null,vec__41844,2,null);var vec__41845 = outer_color;var ro = cljs.core.nth.call(null,vec__41845,0,null);var go = cljs.core.nth.call(null,vec__41845,1,null);var bo = cljs.core.nth.call(null,vec__41845,2,null);var grd = ctx.createRadialGradient(x,y,0,x,y,r);grd.addColorStop(0,inner_color);
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
var b_41855 = (cell_size / 2);var b2_41856 = ((cell_size * size) - b_41855);var seq__41851_41857 = cljs.core.seq.call(null,cljs.core.map.call(null,(function (p1__41846_SHARP_){return (b_41855 + (cell_size * p1__41846_SHARP_));
}),cljs.core.range.call(null,size)));var chunk__41852_41858 = null;var count__41853_41859 = 0;var i__41854_41860 = 0;while(true){
if((i__41854_41860 < count__41853_41859))
{var i_41861 = cljs.core._nth.call(null,chunk__41852_41858,i__41854_41860);ctx.moveTo(b_41855,i_41861);
ctx.lineTo(b2_41856,i_41861);
ctx.moveTo(i_41861,b_41855);
ctx.lineTo(i_41861,b2_41856);
{
var G__41862 = seq__41851_41857;
var G__41863 = chunk__41852_41858;
var G__41864 = count__41853_41859;
var G__41865 = (i__41854_41860 + 1);
seq__41851_41857 = G__41862;
chunk__41852_41858 = G__41863;
count__41853_41859 = G__41864;
i__41854_41860 = G__41865;
continue;
}
} else
{var temp__4092__auto___41866 = cljs.core.seq.call(null,seq__41851_41857);if(temp__4092__auto___41866)
{var seq__41851_41867__$1 = temp__4092__auto___41866;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41851_41867__$1))
{var c__4191__auto___41868 = cljs.core.chunk_first.call(null,seq__41851_41867__$1);{
var G__41869 = cljs.core.chunk_rest.call(null,seq__41851_41867__$1);
var G__41870 = c__4191__auto___41868;
var G__41871 = cljs.core.count.call(null,c__4191__auto___41868);
var G__41872 = 0;
seq__41851_41857 = G__41869;
chunk__41852_41858 = G__41870;
count__41853_41859 = G__41871;
i__41854_41860 = G__41872;
continue;
}
} else
{var i_41873 = cljs.core.first.call(null,seq__41851_41867__$1);ctx.moveTo(b_41855,i_41873);
ctx.lineTo(b2_41856,i_41873);
ctx.moveTo(i_41873,b_41855);
ctx.lineTo(i_41873,b2_41856);
{
var G__41874 = cljs.core.next.call(null,seq__41851_41867__$1);
var G__41875 = null;
var G__41876 = 0;
var G__41877 = 0;
seq__41851_41857 = G__41874;
chunk__41852_41858 = G__41875;
count__41853_41859 = G__41876;
i__41854_41860 = G__41877;
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
{var l_41904 = webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,last_move,cell_size,x_offset,y_offset);var vec__41891_41905 = l_41904;var lx_41906 = cljs.core.nth.call(null,vec__41891_41905,0,null);var ly_41907 = cljs.core.nth.call(null,vec__41891_41905,1,null);webgo.gui.fill_circle.call(null,ctx,lx_41906,ly_41907,(cell_size * 0.5),"#00FFFF","#00AAAA");
} else
{}
var seq__41892 = cljs.core.seq.call(null,stones);var chunk__41893 = null;var count__41894 = 0;var i__41895 = 0;while(true){
if((i__41895 < count__41894))
{var vec__41896 = cljs.core._nth.call(null,chunk__41893,i__41895);var pos = cljs.core.nth.call(null,vec__41896,0,null);var color = cljs.core.nth.call(null,vec__41896,1,null);var vec__41897_41908 = webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,pos,cell_size,x_offset,y_offset);var x_41909 = cljs.core.nth.call(null,vec__41897_41908,0,null);var y_41910 = cljs.core.nth.call(null,vec__41897_41908,1,null);var c1_41911 = (function (){var G__41898 = color;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__41898))
{return "#CCCCCC";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__41898))
{return "#333333";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(color)].join('')));
} else
{return null;
}
}
}
})();var c2_41912 = (function (){var G__41899 = color;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__41899))
{return "#AAAAAA";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__41899))
{return "#111111";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(color)].join('')));
} else
{return null;
}
}
}
})();webgo.gui.fill_circle.call(null,ctx,x_41909,y_41910,(cell_size * 0.45),c1_41911,c2_41912);
{
var G__41913 = seq__41892;
var G__41914 = chunk__41893;
var G__41915 = count__41894;
var G__41916 = (i__41895 + 1);
seq__41892 = G__41913;
chunk__41893 = G__41914;
count__41894 = G__41915;
i__41895 = G__41916;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__41892);if(temp__4092__auto__)
{var seq__41892__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41892__$1))
{var c__4191__auto__ = cljs.core.chunk_first.call(null,seq__41892__$1);{
var G__41917 = cljs.core.chunk_rest.call(null,seq__41892__$1);
var G__41918 = c__4191__auto__;
var G__41919 = cljs.core.count.call(null,c__4191__auto__);
var G__41920 = 0;
seq__41892 = G__41917;
chunk__41893 = G__41918;
count__41894 = G__41919;
i__41895 = G__41920;
continue;
}
} else
{var vec__41900 = cljs.core.first.call(null,seq__41892__$1);var pos = cljs.core.nth.call(null,vec__41900,0,null);var color = cljs.core.nth.call(null,vec__41900,1,null);var vec__41901_41921 = webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,pos,cell_size,x_offset,y_offset);var x_41922 = cljs.core.nth.call(null,vec__41901_41921,0,null);var y_41923 = cljs.core.nth.call(null,vec__41901_41921,1,null);var c1_41924 = (function (){var G__41902 = color;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__41902))
{return "#CCCCCC";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__41902))
{return "#333333";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(color)].join('')));
} else
{return null;
}
}
}
})();var c2_41925 = (function (){var G__41903 = color;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__41903))
{return "#AAAAAA";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__41903))
{return "#111111";
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(color)].join('')));
} else
{return null;
}
}
}
})();webgo.gui.fill_circle.call(null,ctx,x_41922,y_41923,(cell_size * 0.45),c1_41924,c2_41925);
{
var G__41926 = cljs.core.next.call(null,seq__41892__$1);
var G__41927 = null;
var G__41928 = 0;
var G__41929 = 0;
seq__41892 = G__41926;
chunk__41893 = G__41927;
count__41894 = G__41928;
i__41895 = G__41929;
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
webgo.gui.draw = (function draw(canvas,board,cell_size,x_offset,y_offset){var ctx_41930 = canvas.getContext("2d");ctx_41930.clearRect(0,0,canvas.width,canvas.height);
ctx_41930.shadowBlur = 0;
ctx_41930.shadowColor = "black";
ctx_41930.fillStyle = "black";
ctx_41930.strokeStyle = "#009999";
webgo.gui.draw_grid.call(null,ctx_41930,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(board),cell_size,x_offset,y_offset);
ctx_41930.shadowBlur = 5;
webgo.gui.draw_stones.call(null,ctx_41930,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board),new cljs.core.Keyword(null,"last-move","last-move",2980834330).cljs$core$IFn$_invoke$arity$1(board),cell_size,x_offset,y_offset);
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
webgo.gui.update_scorebar_BANG_ = (function update_scorebar_BANG_(scorebar,board){var t = new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board);var m = new cljs.core.Keyword(null,"move","move",1017261891).cljs$core$IFn$_invoke$arity$1(board);return scorebar.innerHTML = [cljs.core.str("Turn "),cljs.core.str(m),cljs.core.str(". "),cljs.core.str((function (){var G__41932 = t;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__41932))
{return "White";
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__41932))
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
webgo.gui.render = (function render(gui){var vec__41934 = webgo.gui.gui_xform.call(null,gui);var x = cljs.core.nth.call(null,vec__41934,0,null);var y = cljs.core.nth.call(null,vec__41934,1,null);var s = cljs.core.nth.call(null,vec__41934,2,null);var sb = new cljs.core.Keyword(null,"scorebar","scorebar",528404403).cljs$core$IFn$_invoke$arity$1(gui);var c = new cljs.core.Keyword(null,"canvas","canvas",3941165258).cljs$core$IFn$_invoke$arity$1(gui);var b = cljs.core.deref.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(gui));webgo.gui.draw.call(null,c,b,s,x,y);
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
var board__GT_screen__2 = (function (gui,pos){var vec__41936 = webgo.gui.gui_xform.call(null,gui);var x = cljs.core.nth.call(null,vec__41936,0,null);var y = cljs.core.nth.call(null,vec__41936,1,null);var s = cljs.core.nth.call(null,vec__41936,2,null);return webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,pos,s,x,y);
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
var screen__GT_board__2 = (function (gui,pos){var vec__41938 = webgo.gui.gui_xform.call(null,gui);var x = cljs.core.nth.call(null,vec__41938,0,null);var y = cljs.core.nth.call(null,vec__41938,1,null);var s = cljs.core.nth.call(null,vec__41938,2,null);return webgo.gui.screen__GT_board_SINGLEQUOTE_.call(null,pos,s,x,y);
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
return new cljs.core.Keyword(null,"canvas","canvas",3941165258).cljs$core$IFn$_invoke$arity$1(gui).addEventListener("touchstart",(function (e){e.preventDefault();
var c = new cljs.core.Keyword(null,"canvas","canvas",3941165258).cljs$core$IFn$_invoke$arity$1(gui);var pos = webgo.gui.screen__GT_board.call(null,gui,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((e.touches[0]).pageX - c.offsetLeft),((e.touches[0]).pageY - c.offsetTop)], null));if(webgo.go.pos_valid_QMARK_.call(null,pos,cljs.core.deref.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(gui))))
{return func.call(null,pos);
} else
{return null;
}
}),false);
});

//# sourceMappingURL=gui.js.map