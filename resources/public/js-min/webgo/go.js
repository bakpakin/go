// Compiled by ClojureScript 0.0-2227
goog.provide('webgo.go');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');
/**
* Creates a new empty board.
*/
webgo.go.empty_board = (function empty_board(size){return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$16,size,cljs.core.constant$keyword$17,cljs.core.constant$keyword$23,cljs.core.constant$keyword$18,1,cljs.core.constant$keyword$19,null,cljs.core.constant$keyword$20,false,cljs.core.constant$keyword$21,null,cljs.core.constant$keyword$22,cljs.core.PersistentArrayMap.EMPTY], null);
});
/**
* Checks if a position is on the board.
*/
webgo.go.pos_valid_QMARK_ = (function pos_valid_QMARK_(pos,board){var max_pos = (cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(board) - 1);var vec__7017 = pos;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7017,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7017,1,null);return (((max_pos >= x)) && ((x >= 0))) && (((max_pos >= y)) && ((y >= 0)));
});
/**
* Returns the neighbors of a position.
*/
webgo.go.neighbors = (function neighbors(board,pos){var vec__7020 = pos;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7020,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7020,1,null);var stones = cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(board);return cljs.core.filter(((function (vec__7020,x,y,stones){
return (function (p1__7018_SHARP_){return webgo.go.pos_valid_QMARK_(p1__7018_SHARP_,board);
});})(vec__7020,x,y,stones))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + 1),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - 1),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + 1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - 1)], null)], null));
});
/**
* Returns the liberties of a position.
*/
webgo.go.liberties = (function liberties(board,pos){return cljs.core.filter(cljs.core.complement(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(board)),webgo.go.neighbors(board,pos));
});
/**
* Returns the set of positions in the chain
* that is connected to pos (including pos).
*/
webgo.go.chain = (function chain(board,pos){var stones = cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(board);var trgt = (stones.cljs$core$IFn$_invoke$arity$1 ? stones.cljs$core$IFn$_invoke$arity$1(pos) : stones.call(null,pos));var walked = cljs.core.PersistentHashSet.EMPTY;var to_walk = cljs.core.PersistentHashSet.fromArray([pos], true);while(true){
if(cljs.core.empty_QMARK_(to_walk))
{return walked;
} else
{var current = cljs.core.first(to_walk);var walked__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(walked,current);var to_walk__$1 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(to_walk,current);var candidates = cljs.core.set(cljs.core.filter(((function (walked,to_walk,current,walked__$1,to_walk__$1,stones,trgt){
return (function (p1__7021_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(trgt,(stones.cljs$core$IFn$_invoke$arity$1 ? stones.cljs$core$IFn$_invoke$arity$1(p1__7021_SHARP_) : stones.call(null,p1__7021_SHARP_)));
});})(walked,to_walk,current,walked__$1,to_walk__$1,stones,trgt))
,webgo.go.neighbors(board,current)));var to_walk__$2 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(to_walk__$1,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(candidates,walked__$1));{
var G__7022 = walked__$1;
var G__7023 = to_walk__$2;
walked = G__7022;
to_walk = G__7023;
continue;
}
}
break;
}
});
/**
* Checks if a chain originating at pos has been surrounded.
*/
webgo.go.surrounded_QMARK_ = (function surrounded_QMARK_(board,pos){return cljs.core.empty_QMARK_(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__7024_SHARP_){return webgo.go.liberties(board,p1__7024_SHARP_);
}),webgo.go.chain(board,pos)));
});
/**
* Applies a move to the board, returning a new board.
* Does not check if the move is valid. If pos is nil or false,
* the current player passes.
*/
webgo.go.move_phase_1 = (function move_phase_1(board,pos){if(cljs.core.truth_(pos))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(board,cljs.core.constant$keyword$22,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(board),pos,cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(board)),cljs.core.array_seq([cljs.core.constant$keyword$17,(function (){var G__7027 = (((cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(board) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(board).fqn:null);var caseval__7029;
switch (G__7027){
case "white":
caseval__7029=cljs.core.constant$keyword$23
break;
case "black":
caseval__7029=cljs.core.constant$keyword$24
break;
default:
caseval__7029=(function(){throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(board)))))})()
}
return caseval__7029;
})(),cljs.core.constant$keyword$19,pos,cljs.core.constant$keyword$18,(cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(board) + 1),cljs.core.constant$keyword$20,false,cljs.core.constant$keyword$21,board], 0));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(board,cljs.core.constant$keyword$17,(function (){var G__7028 = (((cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(board) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(board).fqn:null);var caseval__7030;
switch (G__7028){
case "white":
caseval__7030=cljs.core.constant$keyword$23
break;
case "black":
caseval__7030=cljs.core.constant$keyword$24
break;
default:
caseval__7030=(function(){throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(board)))))})()
}
return caseval__7030;
})(),cljs.core.array_seq([cljs.core.constant$keyword$19,null,cljs.core.constant$keyword$18,(cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(board) + 1),cljs.core.constant$keyword$20,true,cljs.core.constant$keyword$21,board], 0));
}
});
/**
* Removes a chain at the given position if it is surrounded. Return new board.
*/
webgo.go.remove_if_surrounded = (function remove_if_surrounded(board,pos){if(cljs.core.truth_(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(board).call(null,pos)))
{var chn = webgo.go.chain(board,pos);var chain_libs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(((function (chn){
return (function (p1__7031_SHARP_){return webgo.go.liberties(board,p1__7031_SHARP_);
});})(chn))
,chn);if(cljs.core.empty_QMARK_(chain_libs))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,cljs.core.constant$keyword$22,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(board),chn));
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
webgo.go.move_phase_2 = (function move_phase_2(board){var stones = cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(board);var t = cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(board);var l = cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(board);var nbs = cljs.core.vec(cljs.core.filter(((function (stones,t,l){
return (function (p1__7032_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,(stones.cljs$core$IFn$_invoke$arity$1 ? stones.cljs$core$IFn$_invoke$arity$1(p1__7032_SHARP_) : stones.call(null,p1__7032_SHARP_)));
});})(stones,t,l))
,webgo.go.neighbors(board,l)));return webgo.go.remove_if_surrounded(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(webgo.go.remove_if_surrounded,board,nbs),l);
});
/**
* Places a stone at the specified position for the current player.
* If pos is nil, the current player passes. If the move is invalid,
* returns nil, else returns the new board.
*/
webgo.go.move = (function() {
var move = null;
var move__2 = (function (board,pos){return move.cljs$core$IFn$_invoke$arity$3(board,pos,cljs.core.PersistentHashSet.EMPTY);
});
var move__3 = (function (board,pos,old_stones){if(cljs.core.truth_(pos))
{if((webgo.go.pos_valid_QMARK_(pos,board)) && (!(cljs.core.contains_QMARK_(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(board),pos))))
{var t = cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(board);var n = webgo.go.move_phase_2(webgo.go.move_phase_1(board,pos));var f1 = cljs.core.frequencies(cljs.core.vals(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(board)));var f2 = cljs.core.frequencies(cljs.core.vals(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(n)));if((((f2.cljs$core$IFn$_invoke$arity$1 ? f2.cljs$core$IFn$_invoke$arity$1(t) : f2.call(null,t)) > (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(t) : f1.call(null,t)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(board),cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(n))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(board)),cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(n))) && (!(cljs.core.contains_QMARK_(old_stones,cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(n)))))
{return n;
} else
{return null;
}
} else
{return null;
}
} else
{return webgo.go.move_phase_1(board,null);
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
webgo.go.get_ownership = (function get_ownership(board,pos){var stones = cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(board);var temp__4124__auto__ = (stones.cljs$core$IFn$_invoke$arity$1 ? stones.cljs$core$IFn$_invoke$arity$1(pos) : stones.call(null,pos));if(cljs.core.truth_(temp__4124__auto__))
{var c = temp__4124__auto__;return c;
} else
{var nbs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(stones,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(((function (temp__4124__auto__,stones){
return (function (p1__7033_SHARP_){return webgo.go.neighbors(board,p1__7033_SHARP_);
});})(temp__4124__auto__,stones))
,webgo.go.chain(board,pos)));var bns = cljs.core.filter(((function (nbs,temp__4124__auto__,stones){
return (function (p1__7034_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$23,p1__7034_SHARP_);
});})(nbs,temp__4124__auto__,stones))
,nbs);var wns = cljs.core.filter(((function (nbs,bns,temp__4124__auto__,stones){
return (function (p1__7035_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$24,p1__7035_SHARP_);
});})(nbs,bns,temp__4124__auto__,stones))
,nbs);if((cljs.core.empty_QMARK_(bns)) && (cljs.core.empty_QMARK_(wns)))
{return null;
} else
{if(cljs.core.empty_QMARK_(bns))
{return cljs.core.constant$keyword$24;
} else
{if(cljs.core.empty_QMARK_(wns))
{return cljs.core.constant$keyword$23;
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
webgo.go.fill = (function fill(board,pos,color){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,cljs.core.constant$keyword$22,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(board),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(webgo.go.chain(board,pos),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(color))));
});
/**
* Checks if the board represents a finiahed game.
*/
webgo.go.game_over_QMARK_ = (function game_over_QMARK_(board){var and__3529__auto__ = cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(board);if(cljs.core.truth_(and__3529__auto__))
{var and__3529__auto____$1 = cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(board);if(cljs.core.truth_(and__3529__auto____$1))
{return cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(board));
} else
{return and__3529__auto____$1;
}
} else
{return and__3529__auto__;
}
});
/**
* Scores a board. The returned score is in the form [black white].
*/
webgo.go.score = (function score(board){var b = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(board);var r = cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(board));var seq__7048_7060 = cljs.core.seq(r);var chunk__7053_7061 = null;var count__7054_7062 = 0;var i__7055_7063 = 0;while(true){
if((i__7055_7063 < count__7054_7062))
{var x_7064 = chunk__7053_7061.cljs$core$IIndexed$_nth$arity$2(null,i__7055_7063);var seq__7056_7065 = cljs.core.seq(r);var chunk__7057_7066 = null;var count__7058_7067 = 0;var i__7059_7068 = 0;while(true){
if((i__7059_7068 < count__7058_7067))
{var y_7069 = chunk__7057_7066.cljs$core$IIndexed$_nth$arity$2(null,i__7059_7068);if(!(cljs.core.contains_QMARK_(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_7064,y_7069], null))))
{cljs.core.reset_BANG_(b,webgo.go.fill(cljs.core.deref(b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_7064,y_7069], null),webgo.go.get_ownership(cljs.core.deref(b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_7064,y_7069], null))));
} else
{}
{
var G__7070 = seq__7056_7065;
var G__7071 = chunk__7057_7066;
var G__7072 = count__7058_7067;
var G__7073 = (i__7059_7068 + 1);
seq__7056_7065 = G__7070;
chunk__7057_7066 = G__7071;
count__7058_7067 = G__7072;
i__7059_7068 = G__7073;
continue;
}
} else
{var temp__4126__auto___7074 = cljs.core.seq(seq__7056_7065);if(temp__4126__auto___7074)
{var seq__7056_7075__$1 = temp__4126__auto___7074;if(cljs.core.chunked_seq_QMARK_(seq__7056_7075__$1))
{var c__4297__auto___7076 = cljs.core.chunk_first(seq__7056_7075__$1);{
var G__7077 = cljs.core.chunk_rest(seq__7056_7075__$1);
var G__7078 = c__4297__auto___7076;
var G__7079 = cljs.core.count(c__4297__auto___7076);
var G__7080 = 0;
seq__7056_7065 = G__7077;
chunk__7057_7066 = G__7078;
count__7058_7067 = G__7079;
i__7059_7068 = G__7080;
continue;
}
} else
{var y_7081 = cljs.core.first(seq__7056_7075__$1);if(!(cljs.core.contains_QMARK_(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_7064,y_7081], null))))
{cljs.core.reset_BANG_(b,webgo.go.fill(cljs.core.deref(b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_7064,y_7081], null),webgo.go.get_ownership(cljs.core.deref(b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_7064,y_7081], null))));
} else
{}
{
var G__7082 = cljs.core.next(seq__7056_7075__$1);
var G__7083 = null;
var G__7084 = 0;
var G__7085 = 0;
seq__7056_7065 = G__7082;
chunk__7057_7066 = G__7083;
count__7058_7067 = G__7084;
i__7059_7068 = G__7085;
continue;
}
}
} else
{}
}
break;
}
{
var G__7086 = seq__7048_7060;
var G__7087 = chunk__7053_7061;
var G__7088 = count__7054_7062;
var G__7089 = (i__7055_7063 + 1);
seq__7048_7060 = G__7086;
chunk__7053_7061 = G__7087;
count__7054_7062 = G__7088;
i__7055_7063 = G__7089;
continue;
}
} else
{var temp__4126__auto___7090 = cljs.core.seq(seq__7048_7060);if(temp__4126__auto___7090)
{var seq__7048_7091__$1 = temp__4126__auto___7090;if(cljs.core.chunked_seq_QMARK_(seq__7048_7091__$1))
{var c__4297__auto___7092 = cljs.core.chunk_first(seq__7048_7091__$1);{
var G__7093 = cljs.core.chunk_rest(seq__7048_7091__$1);
var G__7094 = c__4297__auto___7092;
var G__7095 = cljs.core.count(c__4297__auto___7092);
var G__7096 = 0;
seq__7048_7060 = G__7093;
chunk__7053_7061 = G__7094;
count__7054_7062 = G__7095;
i__7055_7063 = G__7096;
continue;
}
} else
{var x_7097 = cljs.core.first(seq__7048_7091__$1);var seq__7049_7098 = cljs.core.seq(r);var chunk__7050_7099 = null;var count__7051_7100 = 0;var i__7052_7101 = 0;while(true){
if((i__7052_7101 < count__7051_7100))
{var y_7102 = chunk__7050_7099.cljs$core$IIndexed$_nth$arity$2(null,i__7052_7101);if(!(cljs.core.contains_QMARK_(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_7097,y_7102], null))))
{cljs.core.reset_BANG_(b,webgo.go.fill(cljs.core.deref(b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_7097,y_7102], null),webgo.go.get_ownership(cljs.core.deref(b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_7097,y_7102], null))));
} else
{}
{
var G__7103 = seq__7049_7098;
var G__7104 = chunk__7050_7099;
var G__7105 = count__7051_7100;
var G__7106 = (i__7052_7101 + 1);
seq__7049_7098 = G__7103;
chunk__7050_7099 = G__7104;
count__7051_7100 = G__7105;
i__7052_7101 = G__7106;
continue;
}
} else
{var temp__4126__auto___7107__$1 = cljs.core.seq(seq__7049_7098);if(temp__4126__auto___7107__$1)
{var seq__7049_7108__$1 = temp__4126__auto___7107__$1;if(cljs.core.chunked_seq_QMARK_(seq__7049_7108__$1))
{var c__4297__auto___7109 = cljs.core.chunk_first(seq__7049_7108__$1);{
var G__7110 = cljs.core.chunk_rest(seq__7049_7108__$1);
var G__7111 = c__4297__auto___7109;
var G__7112 = cljs.core.count(c__4297__auto___7109);
var G__7113 = 0;
seq__7049_7098 = G__7110;
chunk__7050_7099 = G__7111;
count__7051_7100 = G__7112;
i__7052_7101 = G__7113;
continue;
}
} else
{var y_7114 = cljs.core.first(seq__7049_7108__$1);if(!(cljs.core.contains_QMARK_(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_7097,y_7114], null))))
{cljs.core.reset_BANG_(b,webgo.go.fill(cljs.core.deref(b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_7097,y_7114], null),webgo.go.get_ownership(cljs.core.deref(b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_7097,y_7114], null))));
} else
{}
{
var G__7115 = cljs.core.next(seq__7049_7108__$1);
var G__7116 = null;
var G__7117 = 0;
var G__7118 = 0;
seq__7049_7098 = G__7115;
chunk__7050_7099 = G__7116;
count__7051_7100 = G__7117;
i__7052_7101 = G__7118;
continue;
}
}
} else
{}
}
break;
}
{
var G__7119 = cljs.core.next(seq__7048_7091__$1);
var G__7120 = null;
var G__7121 = 0;
var G__7122 = 0;
seq__7048_7060 = G__7119;
chunk__7053_7061 = G__7120;
count__7054_7062 = G__7121;
i__7055_7063 = G__7122;
continue;
}
}
} else
{}
}
break;
}
var f = cljs.core.frequencies(cljs.core.vals(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(b))));var w = (cljs.core.truth_(cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(f))?cljs.core.constant$keyword$24.cljs$core$IFn$_invoke$arity$1(f):0);var b__$1 = (cljs.core.truth_(cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(f))?cljs.core.constant$keyword$23.cljs$core$IFn$_invoke$arity$1(f):0);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,w], null);
});
