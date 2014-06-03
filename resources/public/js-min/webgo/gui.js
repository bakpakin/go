// Compiled by ClojureScript 0.0-2227
goog.provide('webgo.gui');
goog.require('cljs.core');
goog.require('webgo.go');
goog.require('webgo.go');
/**
* Makes a new gui.
*/
webgo.gui.make = (function make(canvas,scorebar,board,optimum_square_size,border){return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$25,canvas,cljs.core.constant$keyword$26,scorebar,cljs.core.constant$keyword$27,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(board),cljs.core.constant$keyword$31,optimum_square_size,cljs.core.constant$keyword$28,border], null);
});
/**
* Converts screen coordinates to board coordinates.
*/
webgo.gui.screen__GT_board_SINGLEQUOTE_ = (function screen__GT_board_SINGLEQUOTE_(p__7123,spacing,x_offset,y_offset){var vec__7125 = p__7123;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7125,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7125,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(((x - x_offset) / spacing)) : Math.floor.call(null,((x - x_offset) / spacing))) | 0),((Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(((y - y_offset) / spacing)) : Math.floor.call(null,((y - y_offset) / spacing))) | 0)], null);
});
/**
* Converts board coordinates to screen coordinates.
*/
webgo.gui.board__GT_screen_SINGLEQUOTE_ = (function board__GT_screen_SINGLEQUOTE_(p__7126,spacing,x_offset,y_offset){var vec__7128 = p__7126;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7128,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7128,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x_offset + (spacing * x)) + (spacing / 2.0)),((y_offset + (spacing * y)) + (spacing / 2.0))], null);
});
/**
* Fills a circle with a gradient.
*/
webgo.gui.fill_circle = (function fill_circle(ctx,x,y,r,inner_color,outer_color){var vec__7131 = inner_color;var ri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7131,0,null);var gi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7131,1,null);var bi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7131,2,null);var vec__7132 = outer_color;var ro = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7132,0,null);var go = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7132,1,null);var bo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7132,2,null);var grd = ctx.createRadialGradient(x,y,0,x,y,r);grd.addColorStop(0,inner_color);
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
var b_7142 = (cell_size / 2);var b2_7143 = ((cell_size * size) - b_7142);var seq__7138_7144 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (b_7142,b2_7143){
return (function (p1__7133_SHARP_){return (b_7142 + (cell_size * p1__7133_SHARP_));
});})(b_7142,b2_7143))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(size)));var chunk__7139_7145 = null;var count__7140_7146 = 0;var i__7141_7147 = 0;while(true){
if((i__7141_7147 < count__7140_7146))
{var i_7148 = chunk__7139_7145.cljs$core$IIndexed$_nth$arity$2(null,i__7141_7147);ctx.moveTo(b_7142,i_7148);
ctx.lineTo(b2_7143,i_7148);
ctx.moveTo(i_7148,b_7142);
ctx.lineTo(i_7148,b2_7143);
{
var G__7149 = seq__7138_7144;
var G__7150 = chunk__7139_7145;
var G__7151 = count__7140_7146;
var G__7152 = (i__7141_7147 + 1);
seq__7138_7144 = G__7149;
chunk__7139_7145 = G__7150;
count__7140_7146 = G__7151;
i__7141_7147 = G__7152;
continue;
}
} else
{var temp__4126__auto___7153 = cljs.core.seq(seq__7138_7144);if(temp__4126__auto___7153)
{var seq__7138_7154__$1 = temp__4126__auto___7153;if(cljs.core.chunked_seq_QMARK_(seq__7138_7154__$1))
{var c__4297__auto___7155 = cljs.core.chunk_first(seq__7138_7154__$1);{
var G__7156 = cljs.core.chunk_rest(seq__7138_7154__$1);
var G__7157 = c__4297__auto___7155;
var G__7158 = cljs.core.count(c__4297__auto___7155);
var G__7159 = 0;
seq__7138_7144 = G__7156;
chunk__7139_7145 = G__7157;
count__7140_7146 = G__7158;
i__7141_7147 = G__7159;
continue;
}
} else
{var i_7160 = cljs.core.first(seq__7138_7154__$1);ctx.moveTo(b_7142,i_7160);
ctx.lineTo(b2_7143,i_7160);
ctx.moveTo(i_7160,b_7142);
ctx.lineTo(i_7160,b2_7143);
{
var G__7161 = cljs.core.next(seq__7138_7154__$1);
var G__7162 = null;
var G__7163 = 0;
var G__7164 = 0;
seq__7138_7144 = G__7161;
chunk__7139_7145 = G__7162;
count__7140_7146 = G__7163;
i__7141_7147 = G__7164;
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
{var l_7191 = webgo.gui.board__GT_screen_SINGLEQUOTE_(last_move,cell_size,x_offset,y_offset);var vec__7178_7192 = l_7191;var lx_7193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7178_7192,0,null);var ly_7194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7178_7192,1,null);webgo.gui.fill_circle(ctx,lx_7193,ly_7194,(cell_size * 0.5),"#00FFFF","#00AAAA");
} else
{}
var seq__7179 = cljs.core.seq(stones);var chunk__7180 = null;var count__7181 = 0;var i__7182 = 0;while(true){
if((i__7182 < count__7181))
{var vec__7183 = chunk__7180.cljs$core$IIndexed$_nth$arity$2(null,i__7182);var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7183,0,null);var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7183,1,null);var vec__7184_7195 = webgo.gui.board__GT_screen_SINGLEQUOTE_(pos,cell_size,x_offset,y_offset);var x_7196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7184_7195,0,null);var y_7197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7184_7195,1,null);var c1_7198 = (function (){var G__7185 = (((color instanceof cljs.core.Keyword))?color.fqn:null);var caseval__7200;
switch (G__7185){
case "white":
caseval__7200="#CCCCCC"
break;
case "black":
caseval__7200="#333333"
break;
default:
caseval__7200=(function(){throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color))))})()
}
return caseval__7200;
})();var c2_7199 = (function (){var G__7186 = (((color instanceof cljs.core.Keyword))?color.fqn:null);var caseval__7201;
switch (G__7186){
case "white":
caseval__7201="#AAAAAA"
break;
case "black":
caseval__7201="#111111"
break;
default:
caseval__7201=(function(){throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color))))})()
}
return caseval__7201;
})();webgo.gui.fill_circle(ctx,x_7196,y_7197,(cell_size * 0.45),c1_7198,c2_7199);
{
var G__7202 = seq__7179;
var G__7203 = chunk__7180;
var G__7204 = count__7181;
var G__7205 = (i__7182 + 1);
seq__7179 = G__7202;
chunk__7180 = G__7203;
count__7181 = G__7204;
i__7182 = G__7205;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__7179);if(temp__4126__auto__)
{var seq__7179__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__7179__$1))
{var c__4297__auto__ = cljs.core.chunk_first(seq__7179__$1);{
var G__7206 = cljs.core.chunk_rest(seq__7179__$1);
var G__7207 = c__4297__auto__;
var G__7208 = cljs.core.count(c__4297__auto__);
var G__7209 = 0;
seq__7179 = G__7206;
chunk__7180 = G__7207;
count__7181 = G__7208;
i__7182 = G__7209;
continue;
}
} else
{var vec__7187 = cljs.core.first(seq__7179__$1);var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7187,0,null);var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7187,1,null);var vec__7188_7210 = webgo.gui.board__GT_screen_SINGLEQUOTE_(pos,cell_size,x_offset,y_offset);var x_7211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7188_7210,0,null);var y_7212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7188_7210,1,null);var c1_7213 = (function (){var G__7189 = (((color instanceof cljs.core.Keyword))?color.fqn:null);var caseval__7215;
switch (G__7189){
case "white":
caseval__7215="#CCCCCC"
break;
case "black":
caseval__7215="#333333"
break;
default:
caseval__7215=(function(){throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color))))})()
}
return caseval__7215;
})();var c2_7214 = (function (){var G__7190 = (((color instanceof cljs.core.Keyword))?color.fqn:null);var caseval__7216;
switch (G__7190){
case "white":
caseval__7216="#AAAAAA"
break;
case "black":
caseval__7216="#111111"
break;
default:
caseval__7216=(function(){throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color))))})()
}
return caseval__7216;
})();webgo.gui.fill_circle(ctx,x_7211,y_7212,(cell_size * 0.45),c1_7213,c2_7214);
{
var G__7217 = cljs.core.next(seq__7179__$1);
var G__7218 = null;
var G__7219 = 0;
var G__7220 = 0;
seq__7179 = G__7217;
chunk__7180 = G__7218;
count__7181 = G__7219;
i__7182 = G__7220;
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
webgo.gui.draw = (function draw(canvas,board,cell_size,x_offset,y_offset){var ctx_7221 = canvas.getContext("2d");ctx_7221.clearRect(0,0,canvas.width,canvas.height);
ctx_7221.shadowBlur = 0;
ctx_7221.shadowColor = "black";
ctx_7221.fillStyle = "black";
ctx_7221.strokeStyle = "#009999";
webgo.gui.draw_grid(ctx_7221,cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(board),cell_size,x_offset,y_offset);
ctx_7221.shadowBlur = 5;
webgo.gui.draw_stones(ctx_7221,cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(board),cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(board),cell_size,x_offset,y_offset);
return window.requestAnimationFrame((function (){return null;
}));
});
/**
* Gets the transformation of the gui on the canavas as [x-offset y-offset square-size].
*/
webgo.gui.gui_xform = (function gui_xform(gui){var canvas = cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(gui);var board = cljs.core.deref(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(gui));var border = cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(gui);var w = canvas.width;var h = canvas.height;var bsize = cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(board);var ssize = (function (){var x__3848__auto__ = 1;var y__3849__auto__ = (function (){var x__3855__auto__ = cljs.core.constant$keyword$31.cljs$core$IFn$_invoke$arity$1(gui);var y__3856__auto__ = (((function (){var x__3855__auto____$1 = w;var y__3856__auto__ = h;return ((x__3855__auto____$1 < y__3856__auto__) ? x__3855__auto____$1 : y__3856__auto__);
})() - (2 * border)) / bsize);return ((x__3855__auto__ < y__3856__auto__) ? x__3855__auto__ : y__3856__auto__);
})();return ((x__3848__auto__ > y__3849__auto__) ? x__3848__auto__ : y__3849__auto__);
})();var x = ((w - (bsize * ssize)) / 2);var y = ((h - (bsize * ssize)) / 2);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,ssize], null);
});
/**
* Updates the scorebar.
*/
webgo.gui.update_scorebar_BANG_ = (function update_scorebar_BANG_(scorebar,board){var t = cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(board);var m = cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(board);return scorebar.innerHTML = ("Turn "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)+". "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__7223 = (((t instanceof cljs.core.Keyword))?t.fqn:null);var caseval__7224;
switch (G__7223){
case "white":
caseval__7224="White"
break;
case "black":
caseval__7224="Black"
break;
default:
caseval__7224=(function(){throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(t))))})()
}
return caseval__7224;
})())+" to move.");
});
/**
* Renders the gui.
*/
webgo.gui.render = (function render(gui){var vec__7226 = webgo.gui.gui_xform(gui);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7226,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7226,1,null);var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7226,2,null);var sb = cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(gui);var c = cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(gui);var b = cljs.core.deref(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(gui));webgo.gui.draw(c,b,s,x,y);
return webgo.gui.update_scorebar_BANG_(sb,b);
});
/**
* Updates the gui with a new board and repaints.
*/
webgo.gui.update_BANG_ = (function update_BANG_(gui,board){cljs.core.reset_BANG_(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(gui),board);
return webgo.gui.render(gui);
});
/**
* Converts board coordinates to screen coordinates.
*/
webgo.gui.board__GT_screen = (function() {
var board__GT_screen = null;
var board__GT_screen__2 = (function (gui,pos){var vec__7228 = webgo.gui.gui_xform(gui);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7228,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7228,1,null);var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7228,2,null);return webgo.gui.board__GT_screen_SINGLEQUOTE_(pos,s,x,y);
});
var board__GT_screen__3 = (function (gui,x,y){return board__GT_screen.cljs$core$IFn$_invoke$arity$2(gui,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
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
var screen__GT_board__2 = (function (gui,pos){var vec__7230 = webgo.gui.gui_xform(gui);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7230,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7230,1,null);var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7230,2,null);return webgo.gui.screen__GT_board_SINGLEQUOTE_(pos,s,x,y);
});
var screen__GT_board__3 = (function (gui,x,y){return screen__GT_board.cljs$core$IFn$_invoke$arity$2(gui,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
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
webgo.gui.show_score_BANG_ = (function show_score_BANG_(gui){var scorebar = cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(gui);var board = cljs.core.deref(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(gui));var t = cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(board);var m = cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(board);var vec__7232 = webgo.go.score(board);var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7232,0,null);var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7232,1,null);var winner = (((b > w))?"Black won. ":(((b < w))?"White won. ":((cljs.core.constant$keyword$7)?"It's a tie. ":null)));return scorebar.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(winner)+"The final score was "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)+" to "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(w)+".");
});
/**
* Adds a click-listener func to listen for mouse clicks. If the mouse
* is clicked over the canvas, func is invoked with one argument, the
* position of the mouse in the form [board-x board-y] or nil if not on the board.
*/
webgo.gui.add_on_click = (function add_on_click(gui,func){cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(gui).addEventListener("click",(function (e){var c = cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(gui);var pos = webgo.gui.screen__GT_board.cljs$core$IFn$_invoke$arity$2(gui,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(e.pageX - c.offsetLeft),(e.pageY - c.offsetTop)], null));if(webgo.go.pos_valid_QMARK_(pos,cljs.core.deref(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(gui))))
{return (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(pos) : func.call(null,pos));
} else
{return null;
}
}),false);
return cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(gui).addEventListener("touchstart",(function (e){e.preventDefault();
var c = cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(gui);var pos = webgo.gui.screen__GT_board.cljs$core$IFn$_invoke$arity$2(gui,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((e.touches[0]).pageX - c.offsetLeft),((e.touches[0]).pageY - c.offsetTop)], null));if(webgo.go.pos_valid_QMARK_(pos,cljs.core.deref(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(gui))))
{return (func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(pos) : func.call(null,pos));
} else
{return null;
}
}),false);
});
