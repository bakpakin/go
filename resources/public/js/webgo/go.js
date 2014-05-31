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
webgo.go.pos_valid_QMARK_ = (function pos_valid_QMARK_(pos,board){var max_pos = (new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(board) - 1);var vec__41629 = pos;var x = cljs.core.nth.call(null,vec__41629,0,null);var y = cljs.core.nth.call(null,vec__41629,1,null);return (((max_pos >= x)) && ((x >= 0))) && (((max_pos >= y)) && ((y >= 0)));
});
/**
* Returns the neighbors of a position.
*/
webgo.go.neighbors = (function neighbors(board,pos){var vec__41632 = pos;var x = cljs.core.nth.call(null,vec__41632,0,null);var y = cljs.core.nth.call(null,vec__41632,1,null);var stones = new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board);return cljs.core.filter.call(null,(function (p1__41630_SHARP_){return webgo.go.pos_valid_QMARK_.call(null,p1__41630_SHARP_,board);
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
return (function (p1__41633_SHARP_){return cljs.core._EQ_.call(null,trgt,stones.call(null,p1__41633_SHARP_));
});})(walked,to_walk,current,walked__$1,to_walk__$1))
,webgo.go.neighbors.call(null,board,current)));var to_walk__$2 = clojure.set.union.call(null,to_walk__$1,clojure.set.difference.call(null,candidates,walked__$1));{
var G__41634 = walked__$1;
var G__41635 = to_walk__$2;
walked = G__41634;
to_walk = G__41635;
continue;
}
}
break;
}
});
/**
* Checks if a chain originating at pos has been surrounded.
*/
webgo.go.surrounded_QMARK_ = (function surrounded_QMARK_(board,pos){return cljs.core.empty_QMARK_.call(null,cljs.core.mapcat.call(null,(function (p1__41636_SHARP_){return webgo.go.liberties.call(null,board,p1__41636_SHARP_);
}),webgo.go.chain.call(null,board,pos)));
});
/**
* Applies a move to the board, returning a new board.
* Does not check if the move is valid. If pos is nil or false,
* the current player passes.
*/
webgo.go.move_phase_1 = (function move_phase_1(board,pos){if(cljs.core.truth_(pos))
{return cljs.core.assoc.call(null,board,new cljs.core.Keyword(null,"stones","stones",4416800800),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board),pos,new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board)),new cljs.core.Keyword(null,"turn","turn",1017476079),(function (){var G__41639 = new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__41639))
{return new cljs.core.Keyword(null,"black","black",1107723121);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__41639))
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
{return cljs.core.assoc.call(null,board,new cljs.core.Keyword(null,"turn","turn",1017476079),(function (){var G__41640 = new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__41640))
{return new cljs.core.Keyword(null,"black","black",1107723121);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__41640))
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
return (function (p1__41641_SHARP_){return webgo.go.liberties.call(null,board,p1__41641_SHARP_);
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
return (function (p1__41642_SHARP_){return cljs.core._EQ_.call(null,t,stones.call(null,p1__41642_SHARP_));
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
{var nbs = cljs.core.map.call(null,stones,cljs.core.mapcat.call(null,(function (p1__41643_SHARP_){return webgo.go.neighbors.call(null,board,p1__41643_SHARP_);
}),webgo.go.chain.call(null,board,pos)));var bns = cljs.core.filter.call(null,((function (nbs){
return (function (p1__41644_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),p1__41644_SHARP_);
});})(nbs))
,nbs);var wns = cljs.core.filter.call(null,((function (nbs,bns){
return (function (p1__41645_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),p1__41645_SHARP_);
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
webgo.go.score = (function score(board){var b = cljs.core.atom.call(null,board);var r = cljs.core.range.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(board));var seq__41658_41670 = cljs.core.seq.call(null,r);var chunk__41663_41671 = null;var count__41664_41672 = 0;var i__41665_41673 = 0;while(true){
if((i__41665_41673 < count__41664_41672))
{var x_41674 = cljs.core._nth.call(null,chunk__41663_41671,i__41665_41673);var seq__41666_41675 = cljs.core.seq.call(null,r);var chunk__41667_41676 = null;var count__41668_41677 = 0;var i__41669_41678 = 0;while(true){
if((i__41669_41678 < count__41668_41677))
{var y_41679 = cljs.core._nth.call(null,chunk__41667_41676,i__41669_41678);if(!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_41674,y_41679], null))))
{cljs.core.reset_BANG_.call(null,b,webgo.go.fill.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_41674,y_41679], null),webgo.go.get_ownership.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_41674,y_41679], null))));
} else
{}
{
var G__41680 = seq__41666_41675;
var G__41681 = chunk__41667_41676;
var G__41682 = count__41668_41677;
var G__41683 = (i__41669_41678 + 1);
seq__41666_41675 = G__41680;
chunk__41667_41676 = G__41681;
count__41668_41677 = G__41682;
i__41669_41678 = G__41683;
continue;
}
} else
{var temp__4092__auto___41684 = cljs.core.seq.call(null,seq__41666_41675);if(temp__4092__auto___41684)
{var seq__41666_41685__$1 = temp__4092__auto___41684;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41666_41685__$1))
{var c__4191__auto___41686 = cljs.core.chunk_first.call(null,seq__41666_41685__$1);{
var G__41687 = cljs.core.chunk_rest.call(null,seq__41666_41685__$1);
var G__41688 = c__4191__auto___41686;
var G__41689 = cljs.core.count.call(null,c__4191__auto___41686);
var G__41690 = 0;
seq__41666_41675 = G__41687;
chunk__41667_41676 = G__41688;
count__41668_41677 = G__41689;
i__41669_41678 = G__41690;
continue;
}
} else
{var y_41691 = cljs.core.first.call(null,seq__41666_41685__$1);if(!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_41674,y_41691], null))))
{cljs.core.reset_BANG_.call(null,b,webgo.go.fill.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_41674,y_41691], null),webgo.go.get_ownership.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_41674,y_41691], null))));
} else
{}
{
var G__41692 = cljs.core.next.call(null,seq__41666_41685__$1);
var G__41693 = null;
var G__41694 = 0;
var G__41695 = 0;
seq__41666_41675 = G__41692;
chunk__41667_41676 = G__41693;
count__41668_41677 = G__41694;
i__41669_41678 = G__41695;
continue;
}
}
} else
{}
}
break;
}
{
var G__41696 = seq__41658_41670;
var G__41697 = chunk__41663_41671;
var G__41698 = count__41664_41672;
var G__41699 = (i__41665_41673 + 1);
seq__41658_41670 = G__41696;
chunk__41663_41671 = G__41697;
count__41664_41672 = G__41698;
i__41665_41673 = G__41699;
continue;
}
} else
{var temp__4092__auto___41700 = cljs.core.seq.call(null,seq__41658_41670);if(temp__4092__auto___41700)
{var seq__41658_41701__$1 = temp__4092__auto___41700;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41658_41701__$1))
{var c__4191__auto___41702 = cljs.core.chunk_first.call(null,seq__41658_41701__$1);{
var G__41703 = cljs.core.chunk_rest.call(null,seq__41658_41701__$1);
var G__41704 = c__4191__auto___41702;
var G__41705 = cljs.core.count.call(null,c__4191__auto___41702);
var G__41706 = 0;
seq__41658_41670 = G__41703;
chunk__41663_41671 = G__41704;
count__41664_41672 = G__41705;
i__41665_41673 = G__41706;
continue;
}
} else
{var x_41707 = cljs.core.first.call(null,seq__41658_41701__$1);var seq__41659_41708 = cljs.core.seq.call(null,r);var chunk__41660_41709 = null;var count__41661_41710 = 0;var i__41662_41711 = 0;while(true){
if((i__41662_41711 < count__41661_41710))
{var y_41712 = cljs.core._nth.call(null,chunk__41660_41709,i__41662_41711);if(!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_41707,y_41712], null))))
{cljs.core.reset_BANG_.call(null,b,webgo.go.fill.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_41707,y_41712], null),webgo.go.get_ownership.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_41707,y_41712], null))));
} else
{}
{
var G__41713 = seq__41659_41708;
var G__41714 = chunk__41660_41709;
var G__41715 = count__41661_41710;
var G__41716 = (i__41662_41711 + 1);
seq__41659_41708 = G__41713;
chunk__41660_41709 = G__41714;
count__41661_41710 = G__41715;
i__41662_41711 = G__41716;
continue;
}
} else
{var temp__4092__auto___41717__$1 = cljs.core.seq.call(null,seq__41659_41708);if(temp__4092__auto___41717__$1)
{var seq__41659_41718__$1 = temp__4092__auto___41717__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41659_41718__$1))
{var c__4191__auto___41719 = cljs.core.chunk_first.call(null,seq__41659_41718__$1);{
var G__41720 = cljs.core.chunk_rest.call(null,seq__41659_41718__$1);
var G__41721 = c__4191__auto___41719;
var G__41722 = cljs.core.count.call(null,c__4191__auto___41719);
var G__41723 = 0;
seq__41659_41708 = G__41720;
chunk__41660_41709 = G__41721;
count__41661_41710 = G__41722;
i__41662_41711 = G__41723;
continue;
}
} else
{var y_41724 = cljs.core.first.call(null,seq__41659_41718__$1);if(!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_41707,y_41724], null))))
{cljs.core.reset_BANG_.call(null,b,webgo.go.fill.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_41707,y_41724], null),webgo.go.get_ownership.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_41707,y_41724], null))));
} else
{}
{
var G__41725 = cljs.core.next.call(null,seq__41659_41718__$1);
var G__41726 = null;
var G__41727 = 0;
var G__41728 = 0;
seq__41659_41708 = G__41725;
chunk__41660_41709 = G__41726;
count__41661_41710 = G__41727;
i__41662_41711 = G__41728;
continue;
}
}
} else
{}
}
break;
}
{
var G__41729 = cljs.core.next.call(null,seq__41658_41701__$1);
var G__41730 = null;
var G__41731 = 0;
var G__41732 = 0;
seq__41658_41670 = G__41729;
chunk__41663_41671 = G__41730;
count__41664_41672 = G__41731;
i__41665_41673 = G__41732;
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