// Compiled by ClojureScript 0.0-2227
goog.provide('webgo.gui');
goog.require('cljs.core');
goog.require('webgo.go');
goog.require('webgo.go');
/**
* Makes a new gui.
*/
webgo.gui.make = (function make(canvas,scorebar,board,border){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"canvas","canvas",3941165258),canvas,new cljs.core.Keyword(null,"scorebar","scorebar",528404403),scorebar,new cljs.core.Keyword(null,"board","board",1107812952),cljs.core.atom.call(null,board),new cljs.core.Keyword(null,"border","border",3925567390),border], null);
});
/**
* Converts screen coordinates to board coordinates.
*/
webgo.gui.screen__GT_board_SINGLEQUOTE_ = (function screen__GT_board_SINGLEQUOTE_(p__5164,spacing,x_offset,y_offset){var vec__5166 = p__5164;var x = cljs.core.nth.call(null,vec__5166,0,null);var y = cljs.core.nth.call(null,vec__5166,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(Math.floor.call(null,((x - x_offset) / spacing)) | 0),(Math.floor.call(null,((y - y_offset) / spacing)) | 0)], null);
});
/**
* Converts board coordinates to screen coordinates.
*/
webgo.gui.board__GT_screen_SINGLEQUOTE_ = (function board__GT_screen_SINGLEQUOTE_(p__5167,spacing,x_offset,y_offset){var vec__5169 = p__5167;var x = cljs.core.nth.call(null,vec__5169,0,null);var y = cljs.core.nth.call(null,vec__5169,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x_offset + (spacing * x)) + (spacing / 2.0)),((y_offset + (spacing * y)) + (spacing / 2.0))], null);
});
/**
* Fills a circle with a gradient.
*/
webgo.gui.fill_circle = (function fill_circle(ctx,x,y,r,inner_color,outer_color){var vec__5172 = inner_color;var ri = cljs.core.nth.call(null,vec__5172,0,null);var gi = cljs.core.nth.call(null,vec__5172,1,null);var bi = cljs.core.nth.call(null,vec__5172,2,null);var vec__5173 = outer_color;var ro = cljs.core.nth.call(null,vec__5173,0,null);var go = cljs.core.nth.call(null,vec__5173,1,null);var bo = cljs.core.nth.call(null,vec__5173,2,null);var grd = ctx.createRadialGradient(x,y,0,x,y,r);grd.addColorStop(0,inner_color);
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
var b_5183 = (cell_size / 2);var b2_5184 = ((cell_size * size) - b_5183);var seq__5179_5185 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (b_5183,b2_5184){
return (function (p1__5174_SHARP_){return (b_5183 + (cell_size * p1__5174_SHARP_));
});})(b_5183,b2_5184))
,cljs.core.range.call(null,size)));var chunk__5180_5186 = null;var count__5181_5187 = 0;var i__5182_5188 = 0;while(true){
if((i__5182_5188 < count__5181_5187))
{var i_5189 = cljs.core._nth.call(null,chunk__5180_5186,i__5182_5188);ctx.moveTo(b_5183,i_5189);
ctx.lineTo(b2_5184,i_5189);
ctx.moveTo(i_5189,b_5183);
ctx.lineTo(i_5189,b2_5184);
{
var G__5190 = seq__5179_5185;
var G__5191 = chunk__5180_5186;
var G__5192 = count__5181_5187;
var G__5193 = (i__5182_5188 + 1);
seq__5179_5185 = G__5190;
chunk__5180_5186 = G__5191;
count__5181_5187 = G__5192;
i__5182_5188 = G__5193;
continue;
}
} else
{var temp__4126__auto___5194 = cljs.core.seq.call(null,seq__5179_5185);if(temp__4126__auto___5194)
{var seq__5179_5195__$1 = temp__4126__auto___5194;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5179_5195__$1))
{var c__4297__auto___5196 = cljs.core.chunk_first.call(null,seq__5179_5195__$1);{
var G__5197 = cljs.core.chunk_rest.call(null,seq__5179_5195__$1);
var G__5198 = c__4297__auto___5196;
var G__5199 = cljs.core.count.call(null,c__4297__auto___5196);
var G__5200 = 0;
seq__5179_5185 = G__5197;
chunk__5180_5186 = G__5198;
count__5181_5187 = G__5199;
i__5182_5188 = G__5200;
continue;
}
} else
{var i_5201 = cljs.core.first.call(null,seq__5179_5195__$1);ctx.moveTo(b_5183,i_5201);
ctx.lineTo(b2_5184,i_5201);
ctx.moveTo(i_5201,b_5183);
ctx.lineTo(i_5201,b2_5184);
{
var G__5202 = cljs.core.next.call(null,seq__5179_5195__$1);
var G__5203 = null;
var G__5204 = 0;
var G__5205 = 0;
seq__5179_5185 = G__5202;
chunk__5180_5186 = G__5203;
count__5181_5187 = G__5204;
i__5182_5188 = G__5205;
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
{var l_5232 = webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,last_move,cell_size,x_offset,y_offset);var vec__5219_5233 = l_5232;var lx_5234 = cljs.core.nth.call(null,vec__5219_5233,0,null);var ly_5235 = cljs.core.nth.call(null,vec__5219_5233,1,null);webgo.gui.fill_circle.call(null,ctx,lx_5234,ly_5235,(cell_size * 0.5),"#00FFFF","#00AAAA");
} else
{}
var seq__5220 = cljs.core.seq.call(null,stones);var chunk__5221 = null;var count__5222 = 0;var i__5223 = 0;while(true){
if((i__5223 < count__5222))
{var vec__5224 = cljs.core._nth.call(null,chunk__5221,i__5223);var pos = cljs.core.nth.call(null,vec__5224,0,null);var color = cljs.core.nth.call(null,vec__5224,1,null);var vec__5225_5236 = webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,pos,cell_size,x_offset,y_offset);var x_5237 = cljs.core.nth.call(null,vec__5225_5236,0,null);var y_5238 = cljs.core.nth.call(null,vec__5225_5236,1,null);var c1_5239 = (function (){var G__5226 = (((color instanceof cljs.core.Keyword))?color.fqn:null);var caseval__5241;
switch (G__5226){
case "white":
caseval__5241="#CCCCCC"
break;
case "black":
caseval__5241="#333333"
break;
default:
caseval__5241=(function(){throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color))))})()
}
return caseval__5241;
})();var c2_5240 = (function (){var G__5227 = (((color instanceof cljs.core.Keyword))?color.fqn:null);var caseval__5242;
switch (G__5227){
case "white":
caseval__5242="#AAAAAA"
break;
case "black":
caseval__5242="#111111"
break;
default:
caseval__5242=(function(){throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color))))})()
}
return caseval__5242;
})();webgo.gui.fill_circle.call(null,ctx,x_5237,y_5238,(cell_size * 0.45),c1_5239,c2_5240);
{
var G__5243 = seq__5220;
var G__5244 = chunk__5221;
var G__5245 = count__5222;
var G__5246 = (i__5223 + 1);
seq__5220 = G__5243;
chunk__5221 = G__5244;
count__5222 = G__5245;
i__5223 = G__5246;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5220);if(temp__4126__auto__)
{var seq__5220__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5220__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__5220__$1);{
var G__5247 = cljs.core.chunk_rest.call(null,seq__5220__$1);
var G__5248 = c__4297__auto__;
var G__5249 = cljs.core.count.call(null,c__4297__auto__);
var G__5250 = 0;
seq__5220 = G__5247;
chunk__5221 = G__5248;
count__5222 = G__5249;
i__5223 = G__5250;
continue;
}
} else
{var vec__5228 = cljs.core.first.call(null,seq__5220__$1);var pos = cljs.core.nth.call(null,vec__5228,0,null);var color = cljs.core.nth.call(null,vec__5228,1,null);var vec__5229_5251 = webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,pos,cell_size,x_offset,y_offset);var x_5252 = cljs.core.nth.call(null,vec__5229_5251,0,null);var y_5253 = cljs.core.nth.call(null,vec__5229_5251,1,null);var c1_5254 = (function (){var G__5230 = (((color instanceof cljs.core.Keyword))?color.fqn:null);var caseval__5256;
switch (G__5230){
case "white":
caseval__5256="#CCCCCC"
break;
case "black":
caseval__5256="#333333"
break;
default:
caseval__5256=(function(){throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color))))})()
}
return caseval__5256;
})();var c2_5255 = (function (){var G__5231 = (((color instanceof cljs.core.Keyword))?color.fqn:null);var caseval__5257;
switch (G__5231){
case "white":
caseval__5257="#AAAAAA"
break;
case "black":
caseval__5257="#111111"
break;
default:
caseval__5257=(function(){throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color))))})()
}
return caseval__5257;
})();webgo.gui.fill_circle.call(null,ctx,x_5252,y_5253,(cell_size * 0.45),c1_5254,c2_5255);
{
var G__5258 = cljs.core.next.call(null,seq__5220__$1);
var G__5259 = null;
var G__5260 = 0;
var G__5261 = 0;
seq__5220 = G__5258;
chunk__5221 = G__5259;
count__5222 = G__5260;
i__5223 = G__5261;
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
webgo.gui.draw = (function draw(canvas,board,cell_size,x_offset,y_offset){var ctx_5262 = canvas.getContext("2d");ctx_5262.clearRect(0,0,canvas.width,canvas.height);
ctx_5262.shadowBlur = 0;
ctx_5262.shadowColor = "black";
ctx_5262.fillStyle = "black";
ctx_5262.strokeStyle = "#009999";
webgo.gui.draw_grid.call(null,ctx_5262,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(board),cell_size,x_offset,y_offset);
ctx_5262.shadowBlur = 5;
webgo.gui.draw_stones.call(null,ctx_5262,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board),new cljs.core.Keyword(null,"last-move","last-move",2980834330).cljs$core$IFn$_invoke$arity$1(board),cell_size,x_offset,y_offset);
return window.requestAnimationFrame((function (){return null;
}));
});
/**
* Gets the transformation of the gui on the canavas as [x-offset y-offset square-size].
*/
webgo.gui.gui_xform = (function gui_xform(gui){var canvas = new cljs.core.Keyword(null,"canvas","canvas",3941165258).cljs$core$IFn$_invoke$arity$1(gui);var board = cljs.core.deref.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(gui));var border = new cljs.core.Keyword(null,"border","border",3925567390).cljs$core$IFn$_invoke$arity$1(gui);var w = canvas.width;var h = canvas.height;var bsize = new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(board);var ssize = (((function (){var x__3855__auto__ = w;var y__3856__auto__ = h;return ((x__3855__auto__ < y__3856__auto__) ? x__3855__auto__ : y__3856__auto__);
})() - (2 * border)) / bsize);var x = ((w - (bsize * ssize)) / 2);var y = ((h - (bsize * ssize)) / 2);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,ssize], null);
});
/**
* Updates the scorebar.
*/
webgo.gui.update_scorebar_BANG_ = (function update_scorebar_BANG_(scorebar,board){var t = new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board);var m = new cljs.core.Keyword(null,"move","move",1017261891).cljs$core$IFn$_invoke$arity$1(board);return scorebar.innerHTML = ("Turn "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)+". "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__5264 = (((t instanceof cljs.core.Keyword))?t.fqn:null);var caseval__5265;
switch (G__5264){
case "white":
caseval__5265="White"
break;
case "black":
caseval__5265="Black"
break;
default:
caseval__5265=(function(){throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(t))))})()
}
return caseval__5265;
})())+" to move.");
});
/**
* Renders the gui.
*/
webgo.gui.render = (function render(gui){var vec__5267 = webgo.gui.gui_xform.call(null,gui);var x = cljs.core.nth.call(null,vec__5267,0,null);var y = cljs.core.nth.call(null,vec__5267,1,null);var s = cljs.core.nth.call(null,vec__5267,2,null);var sb = new cljs.core.Keyword(null,"scorebar","scorebar",528404403).cljs$core$IFn$_invoke$arity$1(gui);var c = new cljs.core.Keyword(null,"canvas","canvas",3941165258).cljs$core$IFn$_invoke$arity$1(gui);var b = cljs.core.deref.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(gui));webgo.gui.draw.call(null,c,b,s,x,y);
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
var board__GT_screen__2 = (function (gui,pos){var vec__5269 = webgo.gui.gui_xform.call(null,gui);var x = cljs.core.nth.call(null,vec__5269,0,null);var y = cljs.core.nth.call(null,vec__5269,1,null);var s = cljs.core.nth.call(null,vec__5269,2,null);return webgo.gui.board__GT_screen_SINGLEQUOTE_.call(null,pos,s,x,y);
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
var screen__GT_board__2 = (function (gui,pos){var vec__5271 = webgo.gui.gui_xform.call(null,gui);var x = cljs.core.nth.call(null,vec__5271,0,null);var y = cljs.core.nth.call(null,vec__5271,1,null);var s = cljs.core.nth.call(null,vec__5271,2,null);return webgo.gui.screen__GT_board_SINGLEQUOTE_.call(null,pos,s,x,y);
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
webgo.gui.show_score_BANG_ = (function show_score_BANG_(gui){var scorebar = new cljs.core.Keyword(null,"scorebar","scorebar",528404403).cljs$core$IFn$_invoke$arity$1(gui);var board = cljs.core.deref.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(gui));var t = new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board);var m = new cljs.core.Keyword(null,"move","move",1017261891).cljs$core$IFn$_invoke$arity$1(board);var vec__5273 = webgo.go.score.call(null,board);var b = cljs.core.nth.call(null,vec__5273,0,null);var w = cljs.core.nth.call(null,vec__5273,1,null);var winner = (((b > w))?"Black won. ":(((b < w))?"White won. ":((new cljs.core.Keyword(null,"default","default",2558708147))?"It's a tie. ":null)));return scorebar.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(winner)+"The final score was "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)+" to "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(w)+".");
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