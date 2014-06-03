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
webgo.go.pos_valid_QMARK_ = (function pos_valid_QMARK_(pos,board){var max_pos = (cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(board) - 1);var vec__6893 = pos;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6893,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6893,1,null);return (((max_pos >= x)) && ((x >= 0))) && (((max_pos >= y)) && ((y >= 0)));
});
/**
* Returns the neighbors of a position.
*/
webgo.go.neighbors = (function neighbors(board,pos){var vec__6896 = pos;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6896,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6896,1,null);var stones = cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(board);return cljs.core.filter(((function (vec__6896,x,y,stones){
return (function (p1__6894_SHARP_){return webgo.go.pos_valid_QMARK_(p1__6894_SHARP_,board);
});})(vec__6896,x,y,stones))
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
return (function (p1__6897_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(trgt,(stones.cljs$core$IFn$_invoke$arity$1 ? stones.cljs$core$IFn$_invoke$arity$1(p1__6897_SHARP_) : stones.call(null,p1__6897_SHARP_)));
});})(walked,to_walk,current,walked__$1,to_walk__$1,stones,trgt))
,webgo.go.neighbors(board,current)));var to_walk__$2 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(to_walk__$1,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(candidates,walked__$1));{
var G__6898 = walked__$1;
var G__6899 = to_walk__$2;
walked = G__6898;
to_walk = G__6899;
continue;
}
}
break;
}
});
/**
* Checks if a chain originating at pos has been surrounded.
*/
webgo.go.surrounded_QMARK_ = (function surrounded_QMARK_(board,pos){return cljs.core.empty_QMARK_(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__6900_SHARP_){return webgo.go.liberties(board,p1__6900_SHARP_);
}),webgo.go.chain(board,pos)));
});
/**
* Applies a move to the board, returning a new board.
* Does not check if the move is valid. If pos is nil or false,
* the current player passes.
*/
webgo.go.move_phase_1 = (function move_phase_1(board,pos){if(cljs.core.truth_(pos))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(board,cljs.core.constant$keyword$22,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(board),pos,cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(board)),cljs.core.array_seq([cljs.core.constant$keyword$17,(function (){var G__6903 = (((cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(board) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(board).fqn:null);var caseval__6905;
switch (G__6903){
case "white":
caseval__6905=cljs.core.constant$keyword$23
break;
case "black":
caseval__6905=cljs.core.constant$keyword$24
break;
default:
caseval__6905=(function(){throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(board)))))})()
}
return caseval__6905;
})(),cljs.core.constant$keyword$19,pos,cljs.core.constant$keyword$18,(cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(board) + 1),cljs.core.constant$keyword$20,false,cljs.core.constant$keyword$21,board], 0));
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(board,cljs.core.constant$keyword$17,(function (){var G__6904 = (((cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(board) instanceof cljs.core.Keyword))?cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(board).fqn:null);var caseval__6906;
switch (G__6904){
case "white":
caseval__6906=cljs.core.constant$keyword$23
break;
case "black":
caseval__6906=cljs.core.constant$keyword$24
break;
default:
caseval__6906=(function(){throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(board)))))})()
}
return caseval__6906;
})(),cljs.core.array_seq([cljs.core.constant$keyword$19,null,cljs.core.constant$keyword$18,(cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(board) + 1),cljs.core.constant$keyword$20,true,cljs.core.constant$keyword$21,board], 0));
}
});
/**
* Removes a chain at the given position if it is surrounded. Return new board.
*/
webgo.go.remove_if_surrounded = (function remove_if_surrounded(board,pos){if(cljs.core.truth_(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(board).call(null,pos)))
{var chn = webgo.go.chain(board,pos);var chain_libs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(((function (chn){
return (function (p1__6907_SHARP_){return webgo.go.liberties(board,p1__6907_SHARP_);
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
return (function (p1__6908_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,(stones.cljs$core$IFn$_invoke$arity$1 ? stones.cljs$core$IFn$_invoke$arity$1(p1__6908_SHARP_) : stones.call(null,p1__6908_SHARP_)));
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
var move__2 = (function (board,pos){return move.cljs$core$IFn$_invoke$arity$3(board,pos,null);
});
var move__3 = (function (board,pos,old_stones){if(cljs.core.truth_(pos))
{if((webgo.go.pos_valid_QMARK_(pos,board)) && (!(cljs.core.contains_QMARK_(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(board),pos))))
{var t = cljs.core.constant$keyword$17.cljs$core$IFn$_invoke$arity$1(board);var n = webgo.go.move_phase_2(webgo.go.move_phase_1(board,pos));var f1 = cljs.core.frequencies(cljs.core.vals(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(board)));var f2 = cljs.core.frequencies(cljs.core.vals(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(n)));if((function (){var and__3529__auto__ = ((f2.cljs$core$IFn$_invoke$arity$1 ? f2.cljs$core$IFn$_invoke$arity$1(t) : f2.call(null,t)) > (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(t) : f1.call(null,t)));if(and__3529__auto__)
{var and__3529__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(board),cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(n));if(and__3529__auto____$1)
{var and__3529__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(board)),cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(n));if(and__3529__auto____$2)
{if(cljs.core.truth_(old_stones))
{return !(cljs.core.contains_QMARK_(old_stones,cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(n)));
} else
{return true;
}
} else
{return and__3529__auto____$2;
}
} else
{return and__3529__auto____$1;
}
} else
{return and__3529__auto__;
}
})())
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
return (function (p1__6909_SHARP_){return webgo.go.neighbors(board,p1__6909_SHARP_);
});})(temp__4124__auto__,stones))
,webgo.go.chain(board,pos)));var bns = cljs.core.filter(((function (nbs,temp__4124__auto__,stones){
return (function (p1__6910_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$23,p1__6910_SHARP_);
});})(nbs,temp__4124__auto__,stones))
,nbs);var wns = cljs.core.filter(((function (nbs,bns,temp__4124__auto__,stones){
return (function (p1__6911_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$24,p1__6911_SHARP_);
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
webgo.go.score = (function score(board){var b = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(board);var r = cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(board));var seq__6924_6936 = cljs.core.seq(r);var chunk__6929_6937 = null;var count__6930_6938 = 0;var i__6931_6939 = 0;while(true){
if((i__6931_6939 < count__6930_6938))
{var x_6940 = chunk__6929_6937.cljs$core$IIndexed$_nth$arity$2(null,i__6931_6939);var seq__6932_6941 = cljs.core.seq(r);var chunk__6933_6942 = null;var count__6934_6943 = 0;var i__6935_6944 = 0;while(true){
if((i__6935_6944 < count__6934_6943))
{var y_6945 = chunk__6933_6942.cljs$core$IIndexed$_nth$arity$2(null,i__6935_6944);if(!(cljs.core.contains_QMARK_(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_6940,y_6945], null))))
{cljs.core.reset_BANG_(b,webgo.go.fill(cljs.core.deref(b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_6940,y_6945], null),webgo.go.get_ownership(cljs.core.deref(b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_6940,y_6945], null))));
} else
{}
{
var G__6946 = seq__6932_6941;
var G__6947 = chunk__6933_6942;
var G__6948 = count__6934_6943;
var G__6949 = (i__6935_6944 + 1);
seq__6932_6941 = G__6946;
chunk__6933_6942 = G__6947;
count__6934_6943 = G__6948;
i__6935_6944 = G__6949;
continue;
}
} else
{var temp__4126__auto___6950 = cljs.core.seq(seq__6932_6941);if(temp__4126__auto___6950)
{var seq__6932_6951__$1 = temp__4126__auto___6950;if(cljs.core.chunked_seq_QMARK_(seq__6932_6951__$1))
{var c__4297__auto___6952 = cljs.core.chunk_first(seq__6932_6951__$1);{
var G__6953 = cljs.core.chunk_rest(seq__6932_6951__$1);
var G__6954 = c__4297__auto___6952;
var G__6955 = cljs.core.count(c__4297__auto___6952);
var G__6956 = 0;
seq__6932_6941 = G__6953;
chunk__6933_6942 = G__6954;
count__6934_6943 = G__6955;
i__6935_6944 = G__6956;
continue;
}
} else
{var y_6957 = cljs.core.first(seq__6932_6951__$1);if(!(cljs.core.contains_QMARK_(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_6940,y_6957], null))))
{cljs.core.reset_BANG_(b,webgo.go.fill(cljs.core.deref(b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_6940,y_6957], null),webgo.go.get_ownership(cljs.core.deref(b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_6940,y_6957], null))));
} else
{}
{
var G__6958 = cljs.core.next(seq__6932_6951__$1);
var G__6959 = null;
var G__6960 = 0;
var G__6961 = 0;
seq__6932_6941 = G__6958;
chunk__6933_6942 = G__6959;
count__6934_6943 = G__6960;
i__6935_6944 = G__6961;
continue;
}
}
} else
{}
}
break;
}
{
var G__6962 = seq__6924_6936;
var G__6963 = chunk__6929_6937;
var G__6964 = count__6930_6938;
var G__6965 = (i__6931_6939 + 1);
seq__6924_6936 = G__6962;
chunk__6929_6937 = G__6963;
count__6930_6938 = G__6964;
i__6931_6939 = G__6965;
continue;
}
} else
{var temp__4126__auto___6966 = cljs.core.seq(seq__6924_6936);if(temp__4126__auto___6966)
{var seq__6924_6967__$1 = temp__4126__auto___6966;if(cljs.core.chunked_seq_QMARK_(seq__6924_6967__$1))
{var c__4297__auto___6968 = cljs.core.chunk_first(seq__6924_6967__$1);{
var G__6969 = cljs.core.chunk_rest(seq__6924_6967__$1);
var G__6970 = c__4297__auto___6968;
var G__6971 = cljs.core.count(c__4297__auto___6968);
var G__6972 = 0;
seq__6924_6936 = G__6969;
chunk__6929_6937 = G__6970;
count__6930_6938 = G__6971;
i__6931_6939 = G__6972;
continue;
}
} else
{var x_6973 = cljs.core.first(seq__6924_6967__$1);var seq__6925_6974 = cljs.core.seq(r);var chunk__6926_6975 = null;var count__6927_6976 = 0;var i__6928_6977 = 0;while(true){
if((i__6928_6977 < count__6927_6976))
{var y_6978 = chunk__6926_6975.cljs$core$IIndexed$_nth$arity$2(null,i__6928_6977);if(!(cljs.core.contains_QMARK_(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_6973,y_6978], null))))
{cljs.core.reset_BANG_(b,webgo.go.fill(cljs.core.deref(b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_6973,y_6978], null),webgo.go.get_ownership(cljs.core.deref(b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_6973,y_6978], null))));
} else
{}
{
var G__6979 = seq__6925_6974;
var G__6980 = chunk__6926_6975;
var G__6981 = count__6927_6976;
var G__6982 = (i__6928_6977 + 1);
seq__6925_6974 = G__6979;
chunk__6926_6975 = G__6980;
count__6927_6976 = G__6981;
i__6928_6977 = G__6982;
continue;
}
} else
{var temp__4126__auto___6983__$1 = cljs.core.seq(seq__6925_6974);if(temp__4126__auto___6983__$1)
{var seq__6925_6984__$1 = temp__4126__auto___6983__$1;if(cljs.core.chunked_seq_QMARK_(seq__6925_6984__$1))
{var c__4297__auto___6985 = cljs.core.chunk_first(seq__6925_6984__$1);{
var G__6986 = cljs.core.chunk_rest(seq__6925_6984__$1);
var G__6987 = c__4297__auto___6985;
var G__6988 = cljs.core.count(c__4297__auto___6985);
var G__6989 = 0;
seq__6925_6974 = G__6986;
chunk__6926_6975 = G__6987;
count__6927_6976 = G__6988;
i__6928_6977 = G__6989;
continue;
}
} else
{var y_6990 = cljs.core.first(seq__6925_6984__$1);if(!(cljs.core.contains_QMARK_(cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_6973,y_6990], null))))
{cljs.core.reset_BANG_(b,webgo.go.fill(cljs.core.deref(b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_6973,y_6990], null),webgo.go.get_ownership(cljs.core.deref(b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_6973,y_6990], null))));
} else
{}
{
var G__6991 = cljs.core.next(seq__6925_6984__$1);
var G__6992 = null;
var G__6993 = 0;
var G__6994 = 0;
seq__6925_6974 = G__6991;
chunk__6926_6975 = G__6992;
count__6927_6976 = G__6993;
i__6928_6977 = G__6994;
continue;
}
}
} else
{}
}
break;
}
{
var G__6995 = cljs.core.next(seq__6924_6967__$1);
var G__6996 = null;
var G__6997 = 0;
var G__6998 = 0;
seq__6924_6936 = G__6995;
chunk__6929_6937 = G__6996;
count__6930_6938 = G__6997;
i__6931_6939 = G__6998;
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
