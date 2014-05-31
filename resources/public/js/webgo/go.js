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
webgo.go.pos_valid_QMARK_ = (function pos_valid_QMARK_(pos,board){var max_pos = (new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(board) - 1);var vec__40689 = pos;var x = cljs.core.nth.call(null,vec__40689,0,null);var y = cljs.core.nth.call(null,vec__40689,1,null);return (((max_pos >= x)) && ((x >= 0))) && (((max_pos >= y)) && ((y >= 0)));
});
/**
* Returns the neighbors of a position.
*/
webgo.go.neighbors = (function neighbors(board,pos){var vec__40692 = pos;var x = cljs.core.nth.call(null,vec__40692,0,null);var y = cljs.core.nth.call(null,vec__40692,1,null);var stones = new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board);return cljs.core.filter.call(null,(function (p1__40690_SHARP_){return webgo.go.pos_valid_QMARK_.call(null,p1__40690_SHARP_,board);
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
return (function (p1__40693_SHARP_){return cljs.core._EQ_.call(null,trgt,stones.call(null,p1__40693_SHARP_));
});})(walked,to_walk,current,walked__$1,to_walk__$1))
,webgo.go.neighbors.call(null,board,current)));var to_walk__$2 = clojure.set.union.call(null,to_walk__$1,clojure.set.difference.call(null,candidates,walked__$1));{
var G__40694 = walked__$1;
var G__40695 = to_walk__$2;
walked = G__40694;
to_walk = G__40695;
continue;
}
}
break;
}
});
/**
* Checks if a chain originating at pos has been surrounded.
*/
webgo.go.surrounded_QMARK_ = (function surrounded_QMARK_(board,pos){return cljs.core.empty_QMARK_.call(null,cljs.core.mapcat.call(null,(function (p1__40696_SHARP_){return webgo.go.liberties.call(null,board,p1__40696_SHARP_);
}),webgo.go.chain.call(null,board,pos)));
});
/**
* Applies a move to the board, returning a new board.
* Does not check if the move is valid. If pos is nil or false,
* the current player passes.
*/
webgo.go.move_phase_1 = (function move_phase_1(board,pos){if(cljs.core.truth_(pos))
{return cljs.core.assoc.call(null,board,new cljs.core.Keyword(null,"stones","stones",4416800800),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board),pos,new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board)),new cljs.core.Keyword(null,"turn","turn",1017476079),(function (){var G__40699 = new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__40699))
{return new cljs.core.Keyword(null,"black","black",1107723121);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__40699))
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
{return cljs.core.assoc.call(null,board,new cljs.core.Keyword(null,"turn","turn",1017476079),(function (){var G__40700 = new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__40700))
{return new cljs.core.Keyword(null,"black","black",1107723121);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__40700))
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
return (function (p1__40701_SHARP_){return webgo.go.liberties.call(null,board,p1__40701_SHARP_);
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
webgo.go.move_phase_2 = (function move_phase_2(board){var stones = new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board);var l = new cljs.core.Keyword(null,"last-move","last-move",2980834330).cljs$core$IFn$_invoke$arity$1(board);var nbs = cljs.core.vec.call(null,webgo.go.neighbors.call(null,board,l));return cljs.core.reduce.call(null,webgo.go.remove_if_surrounded,board,cljs.core.conj.call(null,nbs,l));
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
{var nbs = cljs.core.map.call(null,stones,cljs.core.mapcat.call(null,(function (p1__40702_SHARP_){return webgo.go.neighbors.call(null,board,p1__40702_SHARP_);
}),webgo.go.chain.call(null,board,pos)));var bns = cljs.core.filter.call(null,((function (nbs){
return (function (p1__40703_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),p1__40703_SHARP_);
});})(nbs))
,nbs);var wns = cljs.core.filter.call(null,((function (nbs,bns){
return (function (p1__40704_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),p1__40704_SHARP_);
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
webgo.go.score = (function score(board){var b = cljs.core.atom.call(null,board);var r = cljs.core.range.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(board));var seq__40717_40729 = cljs.core.seq.call(null,r);var chunk__40722_40730 = null;var count__40723_40731 = 0;var i__40724_40732 = 0;while(true){
if((i__40724_40732 < count__40723_40731))
{var x_40733 = cljs.core._nth.call(null,chunk__40722_40730,i__40724_40732);var seq__40725_40734 = cljs.core.seq.call(null,r);var chunk__40726_40735 = null;var count__40727_40736 = 0;var i__40728_40737 = 0;while(true){
if((i__40728_40737 < count__40727_40736))
{var y_40738 = cljs.core._nth.call(null,chunk__40726_40735,i__40728_40737);if(!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_40733,y_40738], null))))
{cljs.core.reset_BANG_.call(null,b,webgo.go.fill.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_40733,y_40738], null),webgo.go.get_ownership.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_40733,y_40738], null))));
} else
{}
{
var G__40739 = seq__40725_40734;
var G__40740 = chunk__40726_40735;
var G__40741 = count__40727_40736;
var G__40742 = (i__40728_40737 + 1);
seq__40725_40734 = G__40739;
chunk__40726_40735 = G__40740;
count__40727_40736 = G__40741;
i__40728_40737 = G__40742;
continue;
}
} else
{var temp__4092__auto___40743 = cljs.core.seq.call(null,seq__40725_40734);if(temp__4092__auto___40743)
{var seq__40725_40744__$1 = temp__4092__auto___40743;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40725_40744__$1))
{var c__4191__auto___40745 = cljs.core.chunk_first.call(null,seq__40725_40744__$1);{
var G__40746 = cljs.core.chunk_rest.call(null,seq__40725_40744__$1);
var G__40747 = c__4191__auto___40745;
var G__40748 = cljs.core.count.call(null,c__4191__auto___40745);
var G__40749 = 0;
seq__40725_40734 = G__40746;
chunk__40726_40735 = G__40747;
count__40727_40736 = G__40748;
i__40728_40737 = G__40749;
continue;
}
} else
{var y_40750 = cljs.core.first.call(null,seq__40725_40744__$1);if(!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_40733,y_40750], null))))
{cljs.core.reset_BANG_.call(null,b,webgo.go.fill.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_40733,y_40750], null),webgo.go.get_ownership.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_40733,y_40750], null))));
} else
{}
{
var G__40751 = cljs.core.next.call(null,seq__40725_40744__$1);
var G__40752 = null;
var G__40753 = 0;
var G__40754 = 0;
seq__40725_40734 = G__40751;
chunk__40726_40735 = G__40752;
count__40727_40736 = G__40753;
i__40728_40737 = G__40754;
continue;
}
}
} else
{}
}
break;
}
{
var G__40755 = seq__40717_40729;
var G__40756 = chunk__40722_40730;
var G__40757 = count__40723_40731;
var G__40758 = (i__40724_40732 + 1);
seq__40717_40729 = G__40755;
chunk__40722_40730 = G__40756;
count__40723_40731 = G__40757;
i__40724_40732 = G__40758;
continue;
}
} else
{var temp__4092__auto___40759 = cljs.core.seq.call(null,seq__40717_40729);if(temp__4092__auto___40759)
{var seq__40717_40760__$1 = temp__4092__auto___40759;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40717_40760__$1))
{var c__4191__auto___40761 = cljs.core.chunk_first.call(null,seq__40717_40760__$1);{
var G__40762 = cljs.core.chunk_rest.call(null,seq__40717_40760__$1);
var G__40763 = c__4191__auto___40761;
var G__40764 = cljs.core.count.call(null,c__4191__auto___40761);
var G__40765 = 0;
seq__40717_40729 = G__40762;
chunk__40722_40730 = G__40763;
count__40723_40731 = G__40764;
i__40724_40732 = G__40765;
continue;
}
} else
{var x_40766 = cljs.core.first.call(null,seq__40717_40760__$1);var seq__40718_40767 = cljs.core.seq.call(null,r);var chunk__40719_40768 = null;var count__40720_40769 = 0;var i__40721_40770 = 0;while(true){
if((i__40721_40770 < count__40720_40769))
{var y_40771 = cljs.core._nth.call(null,chunk__40719_40768,i__40721_40770);if(!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_40766,y_40771], null))))
{cljs.core.reset_BANG_.call(null,b,webgo.go.fill.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_40766,y_40771], null),webgo.go.get_ownership.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_40766,y_40771], null))));
} else
{}
{
var G__40772 = seq__40718_40767;
var G__40773 = chunk__40719_40768;
var G__40774 = count__40720_40769;
var G__40775 = (i__40721_40770 + 1);
seq__40718_40767 = G__40772;
chunk__40719_40768 = G__40773;
count__40720_40769 = G__40774;
i__40721_40770 = G__40775;
continue;
}
} else
{var temp__4092__auto___40776__$1 = cljs.core.seq.call(null,seq__40718_40767);if(temp__4092__auto___40776__$1)
{var seq__40718_40777__$1 = temp__4092__auto___40776__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40718_40777__$1))
{var c__4191__auto___40778 = cljs.core.chunk_first.call(null,seq__40718_40777__$1);{
var G__40779 = cljs.core.chunk_rest.call(null,seq__40718_40777__$1);
var G__40780 = c__4191__auto___40778;
var G__40781 = cljs.core.count.call(null,c__4191__auto___40778);
var G__40782 = 0;
seq__40718_40767 = G__40779;
chunk__40719_40768 = G__40780;
count__40720_40769 = G__40781;
i__40721_40770 = G__40782;
continue;
}
} else
{var y_40783 = cljs.core.first.call(null,seq__40718_40777__$1);if(!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_40766,y_40783], null))))
{cljs.core.reset_BANG_.call(null,b,webgo.go.fill.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_40766,y_40783], null),webgo.go.get_ownership.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_40766,y_40783], null))));
} else
{}
{
var G__40784 = cljs.core.next.call(null,seq__40718_40777__$1);
var G__40785 = null;
var G__40786 = 0;
var G__40787 = 0;
seq__40718_40767 = G__40784;
chunk__40719_40768 = G__40785;
count__40720_40769 = G__40786;
i__40721_40770 = G__40787;
continue;
}
}
} else
{}
}
break;
}
{
var G__40788 = cljs.core.next.call(null,seq__40717_40760__$1);
var G__40789 = null;
var G__40790 = 0;
var G__40791 = 0;
seq__40717_40729 = G__40788;
chunk__40722_40730 = G__40789;
count__40723_40731 = G__40790;
i__40724_40732 = G__40791;
continue;
}
}
} else
{}
}
break;
}
var f = cljs.core.frequencies.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b))));var w = (cljs.core.truth_(f.call(null,new cljs.core.Keyword(null,"white","white",1127006107)))?f.call(null,new cljs.core.Keyword(null,"white","white",1127006107)):0);var b__$1 = (cljs.core.truth_(f.call(null,new cljs.core.Keyword(null,"black","black",1107723121)))?f.call(null,new cljs.core.Keyword(null,"black","black",1107723121)):0);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b__$1,w], null);
});

//# sourceMappingURL=go.js.map