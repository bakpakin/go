// Compiled by ClojureScript 0.0-2227
goog.provide('webgo.ai');
goog.require('cljs.core');
goog.require('webgo.go');
goog.require('webgo.go');
/**
* Gets all the possible moves for a board.
*/
webgo.ai.possible_moves = (function possible_moves(board){return cljs.core.cons(null,cljs.core.filter(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(webgo.go.move,board),(function (){var iter__4266__auto__ = (function iter__4989(s__4990){return (new cljs.core.LazySeq(null,(function (){var s__4990__$1 = s__4990;while(true){
var temp__4126__auto__ = cljs.core.seq(s__4990__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var x = cljs.core.first(xs__4624__auto__);var iterys__4262__auto__ = ((function (s__4990__$1,x,xs__4624__auto__,temp__4126__auto__){
return (function iter__4991(s__4992){return (new cljs.core.LazySeq(null,((function (s__4990__$1,x,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__4992__$1 = s__4992;while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__4992__$1);if(temp__4126__auto____$1)
{var s__4992__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__4992__$2))
{var c__4264__auto__ = cljs.core.chunk_first(s__4992__$2);var size__4265__auto__ = cljs.core.count(c__4264__auto__);var b__4994 = cljs.core.chunk_buffer(size__4265__auto__);if((function (){var i__4993 = 0;while(true){
if((i__4993 < size__4265__auto__))
{var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4264__auto__,i__4993);cljs.core.chunk_append(b__4994,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
{
var G__4995 = (i__4993 + 1);
i__4993 = G__4995;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__4994),iter__4991(cljs.core.chunk_rest(s__4992__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__4994),null);
}
} else
{var y = cljs.core.first(s__4992__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),iter__4991(cljs.core.rest(s__4992__$2)));
}
} else
{return null;
}
break;
}
});})(s__4990__$1,x,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__4990__$1,x,xs__4624__auto__,temp__4126__auto__))
;var fs__4263__auto__ = cljs.core.seq(iterys__4262__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(board))));if(fs__4263__auto__)
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4263__auto__,iter__4989(cljs.core.rest(s__4990__$1)));
} else
{{
var G__4996 = cljs.core.rest(s__4990__$1);
s__4990__$1 = G__4996;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$16.cljs$core$IFn$_invoke$arity$1(board)));
})()));
});
/**
* Gets the best move.
*/
webgo.ai.next_board = (function next_board(board){return cljs.core.rand_nth(webgo.ai.possible_moves(board));
});
