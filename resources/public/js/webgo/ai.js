// Compiled by ClojureScript 0.0-2227
goog.provide('webgo.ai');
goog.require('cljs.core');
goog.require('webgo.go');
goog.require('webgo.go');
/**
* Gets all the possible moves for a board.
*/
webgo.ai.possible_moves = (function possible_moves(board){return cljs.core.cons.call(null,null,cljs.core.filter.call(null,cljs.core.partial.call(null,webgo.go.move,board),(function (){var iter__4266__auto__ = (function iter__4990(s__4991){return (new cljs.core.LazySeq(null,(function (){var s__4991__$1 = s__4991;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__4991__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var x = cljs.core.first.call(null,xs__4624__auto__);var iterys__4262__auto__ = ((function (s__4991__$1,x,xs__4624__auto__,temp__4126__auto__){
return (function iter__4992(s__4993){return (new cljs.core.LazySeq(null,((function (s__4991__$1,x,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__4993__$1 = s__4993;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__4993__$1);if(temp__4126__auto____$1)
{var s__4993__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__4993__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__4993__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__4995 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__4994 = 0;while(true){
if((i__4994 < size__4265__auto__))
{var y = cljs.core._nth.call(null,c__4264__auto__,i__4994);cljs.core.chunk_append.call(null,b__4995,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
{
var G__4996 = (i__4994 + 1);
i__4994 = G__4996;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4995),iter__4992.call(null,cljs.core.chunk_rest.call(null,s__4993__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4995),null);
}
} else
{var y = cljs.core.first.call(null,s__4993__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),iter__4992.call(null,cljs.core.rest.call(null,s__4993__$2)));
}
} else
{return null;
}
break;
}
});})(s__4991__$1,x,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__4991__$1,x,xs__4624__auto__,temp__4126__auto__))
;var fs__4263__auto__ = cljs.core.seq.call(null,iterys__4262__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(board))));if(fs__4263__auto__)
{return cljs.core.concat.call(null,fs__4263__auto__,iter__4990.call(null,cljs.core.rest.call(null,s__4991__$1)));
} else
{{
var G__4997 = cljs.core.rest.call(null,s__4991__$1);
s__4991__$1 = G__4997;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(board)));
})()));
});
/**
* Gets the best move.
*/
webgo.ai.next_board = (function next_board(board){return cljs.core.rand_nth.call(null,webgo.ai.possible_moves.call(null,board));
});

//# sourceMappingURL=ai.js.map