// Compiled by ClojureScript 0.0-2227
goog.provide('webgo.gui');
goog.require('cljs.core');
goog.require('webgo.go');
goog.require('webgo.go');
/**
* Makes a new gui.
*/
webgo.gui.make = (function make(canvas,scorebar,board,border){return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$25,canvas,cljs.core.constant$keyword$26,scorebar,cljs.core.constant$keyword$27,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(board),cljs.core.constant$keyword$28,border], null);
});
/**
* Converts screen coordinates to board coordinates.
*/
webgo.gui.screen__GT_board_SINGLEQUOTE_ = (function screen__GT_board_SINGLEQUOTE_(p__5162,spacing,x_offset,y_offset){var vec__5164 = p__5162;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5164,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5164,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(((x - x_offset) / spacing)) : Math.floor.call(null,((x - x_offset) / spacing))) | 0),((Math.floor.cljs$core$IFn$_invoke$arity$1 ? Math.floor.cljs$core$IFn$_invoke$arity$1(((y - y_offset) / spacing)) : Math.floor.call(null,((y - y_offset) / spacing))) | 0)], null);
});
/**
* Converts board coordinates to screen coordinates.
*/
webgo.gui.board__GT_screen_SINGLEQUOTE_ = (function board__GT_screen_SINGLEQUOTE_(p__5165,spacing,x_offset,y_offset){var vec__5167 = p__5165;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5167,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5167,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x_offset + (spacing * x)) + (spacing / 2.0)),((y_offset + (spacing * y)) + (spacing / 2.0))], null);
});
/**
* Fills a circle with a gradient.
*/
webgo.gui.fill_circle = (function fill_circle(ctx,x,y,r,inner_color,outer_color){var vec__5170 = inner_color;var ri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5170,0,null);var gi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5170,1,null);var bi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5170,2,null);var vec__5171 = outer_color;var ro = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5171,0,null);var go = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5171,1,null);var bo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5171,2,null);var grd = ctx.createRadialGradient(x,y,0,x,y,r);grd.addColorStop(0,inner_color);
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
var b_5181 = (cell_size / 2);var b2_5182 = ((cell_size * size) - b_5181);var seq__5177_5183 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (b_5181,b2_5182){
return (function (p1__5172_SHARP_){return (b_5181 + (cell_size * p1__5172_SHARP_));
});})(b_5181,b2_5182))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(size)));var chunk__5178_5184 = null;var count__5179_5185 = 0;var i__5180_5186 = 0;while(true){
if((i__5180_5186 < count__5179_5185))
{var i_5187 = chunk__5178_5184.cljs$core$IIndexed$_nth$arity$2(null,i__5180_5186);ctx.moveTo(b_5181,i_5187);
ctx.lineTo(b2_5182,i_5187);
ctx.moveTo(i_5187,b_5181);
ctx.lineTo(i_5187,b2_5182);
{
var G__5188 = seq__5177_5183;
var G__5189 = chunk__5178_5184;
var G__5190 = count__5179_5185;
var G__5191 = (i__5180_5186 + 1);
seq__5177_5183 = G__5188;
chunk__5178_5184 = G__5189;
count__5179_5185 = G__5190;
i__5180_5186 = G__5191;
continue;
}
} else
{var temp__4126__auto___5192 = cljs.core.seq(seq__5177_5183);if(temp__4126__auto___5192)
{var seq__5177_5193__$1 = temp__4126__auto___5192;if(cljs.core.chunked_seq_QMARK_(seq__5177_5193__$1))
{var c__4297__auto___5194 = cljs.core.chunk_first(seq__5177_5193__$1);{
var G__5195 = cljs.core.chunk_rest(seq__5177_5193__$1);
var G__5196 = c__4297__auto___5194;
var G__5197 = cljs.core.count(c__4297__auto___5194);
var G__5198 = 0;
seq__5177_5183 = G__5195;
chunk__5178_5184 = G__5196;
count__5179_5185 = G__5197;
i__5180_5186 = G__5198;
continue;
}
} else
{var i_5199 = cljs.core.first(seq__5177_5193__$1);ctx.moveTo(b_5181,i_5199);
ctx.lineTo(b2_5182,i_5199);
ctx.moveTo(i_5199,b_5181);
ctx.lineTo(i_5199,b2_5182);
{
var G__5200 = cljs.core.next(seq__5177_5193__$1);
var G__5201 = null;
var G__5202 = 0;
var G__5203 = 0;
seq__5177_5183 = G__5200;
chunk__5178_5184 = G__5201;
count__5179_5185 = G__5202;
i__5180_5186 = G__5203;
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
{var l_5230 = webgo.gui.board__GT_screen_SINGLEQUOTE_(last_move,cell_size,x_offset,y_offset);var vec__5217_5231 = l_5230;var lx_5232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5217_5231,0,null);var ly_5233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5217_5231,1,null);webgo.gui.fill_circle(ctx,lx_5232,ly_5233,(cell_size * 0.5),"#00FFFF","#00AAAA");
} else
{}
var seq__5218 = cljs.core.seq(stones);var chunk__5219 = null;var count__5220 = 0;var i__5221 = 0;while(true){
if((i__5221 < count__5220))
{var vec__5222 = chunk__5219.cljs$core$IIndexed$_nth$arity$2(null,i__5221);var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5222,0,null);var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5222,1,null);var vec__5223_5234 = webgo.gui.board__GT_screen_SINGLEQUOTE_(pos,cell_size,x_offset,y_offset);var x_5235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5223_5234,0,null);var y_5236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5223_5234,1,null);var c1_5237 = (function (){var G__5224 = (((color instanceof cljs.core.Keyword))?color.fqn:null);var caseval__5239;
switch (G__5224){
case "white":
caseval__5239="#CCCCCC"
break;
case "black":
caseval__5239="#333333"
break;
default:
caseval__5239=(function(){throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color))))})()
}
return caseval__5239;
})();var c2_5238 = (function (){var G__5225 = (((color instanceof cljs.core.Keyword))?color.fqn:null);var caseval__5240;
switch (G__5225){
case "white":
caseval__5240="#AAAAAA"
break;
case "black":
caseval__5240="#111111"
break;
default:
caseval__5240=(function(){throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color))))})()
}
return caseval__5240;
})();webgo.gui.fill_circle(ctx,x_5235,y_5236,(cell_size * 0.45),c1_5237,c2_5238);
{
var G__5241 = seq__5218;
var G__5242 = chunk__5219;
var G__5243 = count__5220;
var G__5244 = (i__5221 + 1);
seq__5218 = G__5241;
chunk__5219 = G__5242;
count__5220 = G__5243;
i__5221 = G__5244;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__5218);if(temp__4126__auto__)
{var seq__5218__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__5218__$1))
{var c__4297__auto__ = cljs.core.chunk_first(seq__5218__$1);{
var G__5245 = cljs.core.chunk_rest(seq__5218__$1);
var G__5246 = c__4297__auto__;
var G__5247 = cljs.core.count(c__4297__auto__);
var G__5248 = 0;
seq__5218 = G__5245;
chunk__5219 = G__5246;
count__5220 = G__5247;
i__5221 = G__5248;
continue;
}
} else
{var vec__5226 = cljs.core.first(seq__5218__$1);var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5226,0,null);var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5226,1,null);var vec__5227_5249 = webgo.gui.board__GT_screen_SINGLEQUOTE_(pos,cell_size,x_offset,y_offset);var x_5250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5227_5249,0,null);var y_5251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5227_5249,1,null);var c1_5252 = (function (){var G__5228 = (((color instanceof cljs.core.Keyword))?color.fqn:null);var caseval__5254;
switch (G__5228){
case "white":
caseval__5254="#CCCCCC"
break;
case "black":
caseval__5254="#333333"
break;
default:
caseval__5254=(function(){throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color))))})()
}
return caseval__5254;
})();var c2_5253 = (function (){var G__5229 = (((color instanceof cljs.core.Keyword))?color.fqn:null);var caseval__5255;
switch (G__5229){
case "white":
caseval__5255="#AAAAAA"
break;
case "black":
caseval__5255="#111111"
break;
default:
caseval__5255=(function(){throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color))))})()
}
return caseval__5255;
})();webgo.gui.fill_circle(ctx,x_5250,y_5251,(cell_size * 0.45),c1_5252,c2_5253);
{
var G__5256 = cljs.core.next(seq__5218__$1);
var G__5257 = null;
var G__5258 = 0;
var G__5259 = 0;
seq__5218 = G__5256;
chunk__5219 = G__5257;
count__5220 = G__5258;
i__5221 = G__5259;
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
webgo.gui.draw = (function draw(canvas,board,cell_size,x_offset,y_offset){var ctx_5260 = canvas.getContext("2d");ctx_5260.clearRect(0,0,canvas.width,canvas.height);
ctx_5260.shadowBlur = 0;
ctx_5260.shadowColor = "black";
ctx_5260.fillStyle = "black";
ctx_5260.strokeStyle = "#009999";
webgo.gui.draw_grid(ctx_5260,cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(board),cell_size,x_offset,y_offset);
ctx_5260.shadowBlur = 5;
webgo.gui.draw_stones(ctx_5260,cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(board),cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(board),cell_size,x_offset,y_offset);
return window.requestAnimationFrame((function (){return null;
}));
});
/**
* Gets the transformation of the gui on the canavas as [x-offset y-offset square-size].
*/
webgo.gui.gui_xform = (function gui_xform(gui){var canvas = cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(gui);var board = cljs.core.deref(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(gui));var border = cljs.core.constant$keyword$28.cljs$core$IFn$_invoke$arity$1(gui);var w = canvas.width;var h = canvas.height;var bsize = cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(board);var ssize = (((function (){var x__3855__auto__ = w;var y__3856__auto__ = h;return ((x__3855__auto__ < y__3856__auto__) ? x__3855__auto__ : y__3856__auto__);
})() - (2 * border)) / bsize);var x = ((w - (bsize * ssize)) / 2);var y = ((h - (bsize * ssize)) / 2);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,ssize], null);
});
/**
* Updates the scorebar.
*/
webgo.gui.update_scorebar_BANG_ = (function update_scorebar_BANG_(scorebar,board){var t = cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(board);var m = cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(board);return scorebar.innerHTML = ("Turn "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)+". "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__5262 = (((t instanceof cljs.core.Keyword))?t.fqn:null);var caseval__5263;
switch (G__5262){
case "white":
caseval__5263="White"
break;
case "black":
caseval__5263="Black"
break;
default:
caseval__5263=(function(){throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(t))))})()
}
return caseval__5263;
})())+" to move.");
});
/**
* Renders the gui.
*/
webgo.gui.render = (function render(gui){var vec__5265 = webgo.gui.gui_xform(gui);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5265,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5265,1,null);var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5265,2,null);var sb = cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(gui);var c = cljs.core.constant$keyword$25.cljs$core$IFn$_invoke$arity$1(gui);var b = cljs.core.deref(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(gui));webgo.gui.draw(c,b,s,x,y);
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
var board__GT_screen__2 = (function (gui,pos){var vec__5267 = webgo.gui.gui_xform(gui);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5267,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5267,1,null);var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5267,2,null);return webgo.gui.board__GT_screen_SINGLEQUOTE_(pos,s,x,y);
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
var screen__GT_board__2 = (function (gui,pos){var vec__5269 = webgo.gui.gui_xform(gui);var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5269,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5269,1,null);var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5269,2,null);return webgo.gui.screen__GT_board_SINGLEQUOTE_(pos,s,x,y);
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
webgo.gui.show_score_BANG_ = (function show_score_BANG_(gui){var scorebar = cljs.core.constant$keyword$26.cljs$core$IFn$_invoke$arity$1(gui);var board = cljs.core.deref(cljs.core.constant$keyword$27.cljs$core$IFn$_invoke$arity$1(gui));var t = cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(board);var m = cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(board);var vec__5271 = webgo.go.score(board);var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5271,0,null);var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5271,1,null);var winner = (((b > w))?"Black won. ":(((b < w))?"White won. ":((cljs.core.constant$keyword$7)?"It's a tie. ":null)));return scorebar.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(winner)+"The final score was "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)+" to "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(w)+".");
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
