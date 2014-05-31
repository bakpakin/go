// Compiled by ClojureScript 0.0-2173
goog.provide('webgo.go');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');
/**
* Creates a new empty board.
*/
webgo.go.empty_board = (function empty_board(size){return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"size","size",1017434995),size,new cljs.core.Keyword(null,"turn","turn",1017476079),new cljs.core.Keyword(null,"black","black",1107723121),new cljs.core.Keyword(null,"move","move",1017261891),1,new cljs.core.Keyword(null,"last-move","last-move",2980834330),null,new cljs.core.Keyword(null,"passed?","passed?",4516827457),false,new cljs.core.Keyword(null,"previous-board","previous-board",4191509506),null,new cljs.core.Keyword(null,"stones","stones",4416800800),cljs.core.PersistentArrayMap.EMPTY], null);
});
/**
* Checks if a position is on the board.
*/
webgo.go.pos_valid_QMARK_ = (function pos_valid_QMARK_(pos,board){var max_pos = (new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(board) - 1);var vec__42255 = pos;var x = cljs.core.nth.call(null,vec__42255,0,null);var y = cljs.core.nth.call(null,vec__42255,1,null);return (((max_pos >= x)) && ((x >= 0))) && (((max_pos >= y)) && ((y >= 0)));
});
/**
* Returns the neighbors of a position.
*/
webgo.go.neighbors = (function neighbors(board,pos){var vec__42258 = pos;var x = cljs.core.nth.call(null,vec__42258,0,null);var y = cljs.core.nth.call(null,vec__42258,1,null);var stones = new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board);return cljs.core.filter.call(null,(function (p1__42256_SHARP_){return webgo.go.pos_valid_QMARK_.call(null,p1__42256_SHARP_,board);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + 1),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - 1),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + 1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - 1)], null)], null));
});
/**
* Returns the liberties of a position.
*/
webgo.go.liberties = (function liberties(board,pos){return cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board)),webgo.go.neighbors.call(null,board,pos));
});
/**
* Returns the set of positions in the chain
* that is connected to pos (including pos).
*/
webgo.go.chain = (function chain(board,pos){var stones = new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board);var trgt = stones.call(null,pos);var walked = cljs.core.PersistentHashSet.EMPTY;var to_walk = cljs.core.PersistentHashSet.fromArray([pos], true);while(true){
if(cljs.core.empty_QMARK_.call(null,to_walk))
{return walked;
} else
{var current = cljs.core.first.call(null,to_walk);var walked__$1 = cljs.core.conj.call(null,walked,current);var to_walk__$1 = cljs.core.disj.call(null,to_walk,current);var candidates = cljs.core.set.call(null,cljs.core.filter.call(null,((function (walked,to_walk,current,walked__$1,to_walk__$1){
return (function (p1__42259_SHARP_){return cljs.core._EQ_.call(null,trgt,stones.call(null,p1__42259_SHARP_));
});})(walked,to_walk,current,walked__$1,to_walk__$1))
,webgo.go.neighbors.call(null,board,current)));var to_walk__$2 = clojure.set.union.call(null,to_walk__$1,clojure.set.difference.call(null,candidates,walked__$1));{
var G__42260 = walked__$1;
var G__42261 = to_walk__$2;
walked = G__42260;
to_walk = G__42261;
continue;
}
}
break;
}
});
/**
* Checks if a chain originating at pos has been surrounded.
*/
webgo.go.surrounded_QMARK_ = (function surrounded_QMARK_(board,pos){return cljs.core.empty_QMARK_.call(null,cljs.core.mapcat.call(null,(function (p1__42262_SHARP_){return webgo.go.liberties.call(null,board,p1__42262_SHARP_);
}),webgo.go.chain.call(null,board,pos)));
});
/**
* Applies a move to the board, returning a new board.
* Does not check if the move is valid. If pos is nil or false,
* the current player passes.
*/
webgo.go.move_phase_1 = (function move_phase_1(board,pos){if(cljs.core.truth_(pos))
{return cljs.core.assoc.call(null,board,new cljs.core.Keyword(null,"stones","stones",4416800800),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board),pos,new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board)),new cljs.core.Keyword(null,"turn","turn",1017476079),(function (){var G__42265 = new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__42265))
{return new cljs.core.Keyword(null,"black","black",1107723121);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__42265))
{return new cljs.core.Keyword(null,"white","white",1127006107);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board))].join('')));
} else
{return null;
}
}
}
})(),new cljs.core.Keyword(null,"last-move","last-move",2980834330),pos,new cljs.core.Keyword(null,"move","move",1017261891),(new cljs.core.Keyword(null,"move","move",1017261891).cljs$core$IFn$_invoke$arity$1(board) + 1),new cljs.core.Keyword(null,"passed?","passed?",4516827457),false,new cljs.core.Keyword(null,"previous-board","previous-board",4191509506),board);
} else
{return cljs.core.assoc.call(null,board,new cljs.core.Keyword(null,"turn","turn",1017476079),(function (){var G__42266 = new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__42266))
{return new cljs.core.Keyword(null,"black","black",1107723121);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__42266))
{return new cljs.core.Keyword(null,"white","white",1127006107);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board))].join('')));
} else
{return null;
}
}
}
})(),new cljs.core.Keyword(null,"last-move","last-move",2980834330),null,new cljs.core.Keyword(null,"move","move",1017261891),(new cljs.core.Keyword(null,"move","move",1017261891).cljs$core$IFn$_invoke$arity$1(board) + 1),new cljs.core.Keyword(null,"passed?","passed?",4516827457),true,new cljs.core.Keyword(null,"previous-board","previous-board",4191509506),board);
}
});
/**
* Removes a chain at the given position if it is surrounded. Return new board.
*/
webgo.go.remove_if_surrounded = (function remove_if_surrounded(board,pos){if(cljs.core.truth_(new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board).call(null,pos)))
{var chn = webgo.go.chain.call(null,board,pos);var chain_libs = cljs.core.mapcat.call(null,((function (chn){
return (function (p1__42267_SHARP_){return webgo.go.liberties.call(null,board,p1__42267_SHARP_);
});})(chn))
,chn);if(cljs.core.empty_QMARK_.call(null,chain_libs))
{return cljs.core.assoc.call(null,board,new cljs.core.Keyword(null,"stones","stones",4416800800),cljs.core.apply.call(null,cljs.core.dissoc,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board),chn));
} else
{return board;
}
} else
{return board;
}
});
/**
* Checks a board for dead chains (chains with no liberties) around the last stone played,
* and also checks if the last stone played is itself part of a dead chain. Removes
* any dead chains. Capture of the opponent takes precedence over self-capture.
*/
webgo.go.move_phase_2 = (function move_phase_2(board){var stones = new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board);var t = new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board);var l = new cljs.core.Keyword(null,"last-move","last-move",2980834330).cljs$core$IFn$_invoke$arity$1(board);var nbs = cljs.core.vec.call(null,cljs.core.filter.call(null,((function (stones,t,l){
return (function (p1__42268_SHARP_){return cljs.core._EQ_.call(null,t,stones.call(null,p1__42268_SHARP_));
});})(stones,t,l))
,webgo.go.neighbors.call(null,board,l)));return webgo.go.remove_if_surrounded.call(null,cljs.core.reduce.call(null,webgo.go.remove_if_surrounded,board,nbs),l);
});
/**
* Places a stone at the specified position for the current player.
* If pos is nil, the current player passes. If the move is invalid,
* returns nil, else returns the new board.
*/
webgo.go.move = (function() {
var move = null;
var move__2 = (function (board,pos){return move.call(null,board,pos,cljs.core.PersistentHashSet.EMPTY);
});
var move__3 = (function (board,pos,old_stones){if(cljs.core.truth_(pos))
{if((webgo.go.pos_valid_QMARK_.call(null,pos,board)) && (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board),pos))))
{var t = new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board);var n = webgo.go.move_phase_2.call(null,webgo.go.move_phase_1.call(null,board,pos));var f1 = cljs.core.frequencies.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board)));var f2 = cljs.core.frequencies.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(n)));if(((f2.call(null,t) > f1.call(null,t))) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board),new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(n))) && (cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"previous-board","previous-board",4191509506).cljs$core$IFn$_invoke$arity$1(board)),new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(n))) && (!(cljs.core.contains_QMARK_.call(null,old_stones,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(n)))))
{return n;
} else
{return null;
}
} else
{return null;
}
} else
{return webgo.go.move_phase_1.call(null,board,null);
}
});
move = function(board,pos,old_stones){
switch(arguments.length){
case 2:
return move__2.call(this,board,pos);
case 3:
return move__3.call(this,board,pos,old_stones);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
move.cljs$core$IFn$_invoke$arity$2 = move__2;
move.cljs$core$IFn$_invoke$arity$3 = move__3;
return move;
})()
;
/**
* Returns the player who owns the position, or nil if neutral territory.
*/
webgo.go.get_ownership = (function get_ownership(board,pos){var stones = new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board);var temp__4090__auto__ = stones.call(null,pos);if(cljs.core.truth_(temp__4090__auto__))
{var c = temp__4090__auto__;return c;
} else
{var nbs = cljs.core.map.call(null,stones,cljs.core.mapcat.call(null,(function (p1__42269_SHARP_){return webgo.go.neighbors.call(null,board,p1__42269_SHARP_);
}),webgo.go.chain.call(null,board,pos)));var bns = cljs.core.filter.call(null,((function (nbs){
return (function (p1__42270_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),p1__42270_SHARP_);
});})(nbs))
,nbs);var wns = cljs.core.filter.call(null,((function (nbs,bns){
return (function (p1__42271_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),p1__42271_SHARP_);
});})(nbs,bns))
,nbs);if((cljs.core.empty_QMARK_.call(null,bns)) && (cljs.core.empty_QMARK_.call(null,wns)))
{return null;
} else
{if(cljs.core.empty_QMARK_.call(null,bns))
{return new cljs.core.Keyword(null,"white","white",1127006107);
} else
{if(cljs.core.empty_QMARK_.call(null,wns))
{return new cljs.core.Keyword(null,"black","black",1107723121);
} else
{return null;
}
}
}
}
});
/**
* Fills part of the board. Useful for scoring.
*/
webgo.go.fill = (function fill(board,pos,color){return cljs.core.assoc.call(null,board,new cljs.core.Keyword(null,"stones","stones",4416800800),cljs.core.apply.call(null,cljs.core.assoc,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board),cljs.core.interleave.call(null,webgo.go.chain.call(null,board,pos),cljs.core.repeat.call(null,color))));
});
/**
* Scores a board. The returned score is in the form [black white].
*/
webgo.go.score = (function score(board){var b = cljs.core.atom.call(null,board);var r = cljs.core.range.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(board));var seq__42284_42296 = cljs.core.seq.call(null,r);var chunk__42289_42297 = null;var count__42290_42298 = 0;var i__42291_42299 = 0;while(true){
if((i__42291_42299 < count__42290_42298))
{var x_42300 = cljs.core._nth.call(null,chunk__42289_42297,i__42291_42299);var seq__42292_42301 = cljs.core.seq.call(null,r);var chunk__42293_42302 = null;var count__42294_42303 = 0;var i__42295_42304 = 0;while(true){
if((i__42295_42304 < count__42294_42303))
{var y_42305 = cljs.core._nth.call(null,chunk__42293_42302,i__42295_42304);if(!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_42300,y_42305], null))))
{cljs.core.reset_BANG_.call(null,b,webgo.go.fill.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_42300,y_42305], null),webgo.go.get_ownership.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_42300,y_42305], null))));
} else
{}
{
var G__42306 = seq__42292_42301;
var G__42307 = chunk__42293_42302;
var G__42308 = count__42294_42303;
var G__42309 = (i__42295_42304 + 1);
seq__42292_42301 = G__42306;
chunk__42293_42302 = G__42307;
count__42294_42303 = G__42308;
i__42295_42304 = G__42309;
continue;
}
} else
{var temp__4092__auto___42310 = cljs.core.seq.call(null,seq__42292_42301);if(temp__4092__auto___42310)
{var seq__42292_42311__$1 = temp__4092__auto___42310;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42292_42311__$1))
{var c__4191__auto___42312 = cljs.core.chunk_first.call(null,seq__42292_42311__$1);{
var G__42313 = cljs.core.chunk_rest.call(null,seq__42292_42311__$1);
var G__42314 = c__4191__auto___42312;
var G__42315 = cljs.core.count.call(null,c__4191__auto___42312);
var G__42316 = 0;
seq__42292_42301 = G__42313;
chunk__42293_42302 = G__42314;
count__42294_42303 = G__42315;
i__42295_42304 = G__42316;
continue;
}
} else
{var y_42317 = cljs.core.first.call(null,seq__42292_42311__$1);if(!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_42300,y_42317], null))))
{cljs.core.reset_BANG_.call(null,b,webgo.go.fill.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_42300,y_42317], null),webgo.go.get_ownership.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_42300,y_42317], null))));
} else
{}
{
var G__42318 = cljs.core.next.call(null,seq__42292_42311__$1);
var G__42319 = null;
var G__42320 = 0;
var G__42321 = 0;
seq__42292_42301 = G__42318;
chunk__42293_42302 = G__42319;
count__42294_42303 = G__42320;
i__42295_42304 = G__42321;
continue;
}
}
} else
{}
}
break;
}
{
var G__42322 = seq__42284_42296;
var G__42323 = chunk__42289_42297;
var G__42324 = count__42290_42298;
var G__42325 = (i__42291_42299 + 1);
seq__42284_42296 = G__42322;
chunk__42289_42297 = G__42323;
count__42290_42298 = G__42324;
i__42291_42299 = G__42325;
continue;
}
} else
{var temp__4092__auto___42326 = cljs.core.seq.call(null,seq__42284_42296);if(temp__4092__auto___42326)
{var seq__42284_42327__$1 = temp__4092__auto___42326;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42284_42327__$1))
{var c__4191__auto___42328 = cljs.core.chunk_first.call(null,seq__42284_42327__$1);{
var G__42329 = cljs.core.chunk_rest.call(null,seq__42284_42327__$1);
var G__42330 = c__4191__auto___42328;
var G__42331 = cljs.core.count.call(null,c__4191__auto___42328);
var G__42332 = 0;
seq__42284_42296 = G__42329;
chunk__42289_42297 = G__42330;
count__42290_42298 = G__42331;
i__42291_42299 = G__42332;
continue;
}
} else
{var x_42333 = cljs.core.first.call(null,seq__42284_42327__$1);var seq__42285_42334 = cljs.core.seq.call(null,r);var chunk__42286_42335 = null;var count__42287_42336 = 0;var i__42288_42337 = 0;while(true){
if((i__42288_42337 < count__42287_42336))
{var y_42338 = cljs.core._nth.call(null,chunk__42286_42335,i__42288_42337);if(!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_42333,y_42338], null))))
{cljs.core.reset_BANG_.call(null,b,webgo.go.fill.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_42333,y_42338], null),webgo.go.get_ownership.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_42333,y_42338], null))));
} else
{}
{
var G__42339 = seq__42285_42334;
var G__42340 = chunk__42286_42335;
var G__42341 = count__42287_42336;
var G__42342 = (i__42288_42337 + 1);
seq__42285_42334 = G__42339;
chunk__42286_42335 = G__42340;
count__42287_42336 = G__42341;
i__42288_42337 = G__42342;
continue;
}
} else
{var temp__4092__auto___42343__$1 = cljs.core.seq.call(null,seq__42285_42334);if(temp__4092__auto___42343__$1)
{var seq__42285_42344__$1 = temp__4092__auto___42343__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42285_42344__$1))
{var c__4191__auto___42345 = cljs.core.chunk_first.call(null,seq__42285_42344__$1);{
var G__42346 = cljs.core.chunk_rest.call(null,seq__42285_42344__$1);
var G__42347 = c__4191__auto___42345;
var G__42348 = cljs.core.count.call(null,c__4191__auto___42345);
var G__42349 = 0;
seq__42285_42334 = G__42346;
chunk__42286_42335 = G__42347;
count__42287_42336 = G__42348;
i__42288_42337 = G__42349;
continue;
}
} else
{var y_42350 = cljs.core.first.call(null,seq__42285_42344__$1);if(!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_42333,y_42350], null))))
{cljs.core.reset_BANG_.call(null,b,webgo.go.fill.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_42333,y_42350], null),webgo.go.get_ownership.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_42333,y_42350], null))));
} else
{}
{
var G__42351 = cljs.core.next.call(null,seq__42285_42344__$1);
var G__42352 = null;
var G__42353 = 0;
var G__42354 = 0;
seq__42285_42334 = G__42351;
chunk__42286_42335 = G__42352;
count__42287_42336 = G__42353;
i__42288_42337 = G__42354;
continue;
}
}
} else
{}
}
break;
}
{
var G__42355 = cljs.core.next.call(null,seq__42284_42327__$1);
var G__42356 = null;
var G__42357 = 0;
var G__42358 = 0;
seq__42284_42296 = G__42355;
chunk__42289_42297 = G__42356;
count__42290_42298 = G__42357;
i__42291_42299 = G__42358;
continue;
}
}
} else
{}
}
break;
}
var f = cljs.core.frequencies.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b))));var w = (cljs.core.truth_(new cljs.core.Keyword(null,"white","white",1127006107).cljs$core$IFn$_invoke$arity$1(f))?new cljs.core.Keyword(null,"white","white",1127006107).cljs$core$IFn$_invoke$arity$1(f):0);var b__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"black","black",1107723121).cljs$core$IFn$_invoke$arity$1(f))?new cljs.core.Keyword(null,"black","black",1107723121).cljs$core$IFn$_invoke$arity$1(f):0);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,w], null);
});

//# sourceMappingURL=go.js.map