// Compiled by ClojureScript 0.0-2173
goog.provide('webgo.ai');
goog.require('cljs.core');
goog.require('webgo.go');
goog.require('webgo.go');
/**
* Gets all the possible moves for a board.
*/
webgo.ai.possible_moves = (function possible_moves(board){return cljs.core.cons.call(null,null,cljs.core.filter.call(null,cljs.core.partial.call(null,webgo.go.move,board),(function (){var iter__4160__auto__ = (function iter__42883(s__42884){return (new cljs.core.LazySeq(null,(function (){var s__42884__$1 = s__42884;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__42884__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__4156__auto__ = ((function (s__42884__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__42885(s__42886){return (new cljs.core.LazySeq(null,((function (s__42884__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__42886__$1 = s__42886;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__42886__$1);if(temp__4092__auto____$1)
{var s__42886__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__42886__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__42886__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__42888 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__42887 = 0;while(true){
if((i__42887 < size__4159__auto__))
{var y = cljs.core._nth.call(null,c__4158__auto__,i__42887);cljs.core.chunk_append.call(null,b__42888,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
{
var G__42889 = (i__42887 + 1);
i__42887 = G__42889;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42888),iter__42885.call(null,cljs.core.chunk_rest.call(null,s__42886__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42888),null);
}
} else
{var y = cljs.core.first.call(null,s__42886__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),iter__42885.call(null,cljs.core.rest.call(null,s__42886__$2)));
}
} else
{return null;
}
break;
}
});})(s__42884__$1,x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__42884__$1,x,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(board))));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__42883.call(null,cljs.core.rest.call(null,s__42884__$1)));
} else
{{
var G__42890 = cljs.core.rest.call(null,s__42884__$1);
s__42884__$1 = G__42890;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(board)));
})()));
});
/**
* Gets the best move.
*/
webgo.ai.next_board = (function next_board(board){return cljs.core.rand_nth.call(null,webgo.ai.possible_moves.call(null,board));
});

//# sourceMappingURL=ai.js.map