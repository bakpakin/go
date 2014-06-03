// Compiled by ClojureScript 0.0-2227
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
webgo.go.pos_valid_QMARK_ = (function pos_valid_QMARK_(pos,board){var max_pos = (new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(board) - 1);var vec__6679 = pos;var x = cljs.core.nth.call(null,vec__6679,0,null);var y = cljs.core.nth.call(null,vec__6679,1,null);return (((max_pos >= x)) && ((x >= 0))) && (((max_pos >= y)) && ((y >= 0)));
});
/**
* Returns the neighbors of a position.
*/
webgo.go.neighbors = (function neighbors(board,pos){var vec__6682 = pos;var x = cljs.core.nth.call(null,vec__6682,0,null);var y = cljs.core.nth.call(null,vec__6682,1,null);var stones = new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board);return cljs.core.filter.call(null,((function (vec__6682,x,y,stones){
return (function (p1__6680_SHARP_){return webgo.go.pos_valid_QMARK_.call(null,p1__6680_SHARP_,board);
});})(vec__6682,x,y,stones))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + 1),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - 1),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + 1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - 1)], null)], null));
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
{var current = cljs.core.first.call(null,to_walk);var walked__$1 = cljs.core.conj.call(null,walked,current);var to_walk__$1 = cljs.core.disj.call(null,to_walk,current);var candidates = cljs.core.set.call(null,cljs.core.filter.call(null,((function (walked,to_walk,current,walked__$1,to_walk__$1,stones,trgt){
return (function (p1__6683_SHARP_){return cljs.core._EQ_.call(null,trgt,stones.call(null,p1__6683_SHARP_));
});})(walked,to_walk,current,walked__$1,to_walk__$1,stones,trgt))
,webgo.go.neighbors.call(null,board,current)));var to_walk__$2 = clojure.set.union.call(null,to_walk__$1,clojure.set.difference.call(null,candidates,walked__$1));{
var G__6684 = walked__$1;
var G__6685 = to_walk__$2;
walked = G__6684;
to_walk = G__6685;
continue;
}
}
break;
}
});
/**
* Checks if a chain originating at pos has been surrounded.
*/
webgo.go.surrounded_QMARK_ = (function surrounded_QMARK_(board,pos){return cljs.core.empty_QMARK_.call(null,cljs.core.mapcat.call(null,(function (p1__6686_SHARP_){return webgo.go.liberties.call(null,board,p1__6686_SHARP_);
}),webgo.go.chain.call(null,board,pos)));
});
/**
* Applies a move to the board, returning a new board.
* Does not check if the move is valid. If pos is nil or false,
* the current player passes.
*/
webgo.go.move_phase_1 = (function move_phase_1(board,pos){if(cljs.core.truth_(pos))
{return cljs.core.assoc.call(null,board,new cljs.core.Keyword(null,"stones","stones",4416800800),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board),pos,new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board)),new cljs.core.Keyword(null,"turn","turn",1017476079),(function (){var G__6689 = (((new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board).fqn:null);var caseval__6691;
switch (G__6689){
case "white":
caseval__6691=new cljs.core.Keyword(null,"black","black",1107723121)
break;
case "black":
caseval__6691=new cljs.core.Keyword(null,"white","white",1127006107)
break;
default:
caseval__6691=(function(){throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board)))))})()
}
return caseval__6691;
})(),new cljs.core.Keyword(null,"last-move","last-move",2980834330),pos,new cljs.core.Keyword(null,"move","move",1017261891),(new cljs.core.Keyword(null,"move","move",1017261891).cljs$core$IFn$_invoke$arity$1(board) + 1),new cljs.core.Keyword(null,"passed?","passed?",4516827457),false,new cljs.core.Keyword(null,"previous-board","previous-board",4191509506),board);
} else
{return cljs.core.assoc.call(null,board,new cljs.core.Keyword(null,"turn","turn",1017476079),(function (){var G__6690 = (((new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board).fqn:null);var caseval__6692;
switch (G__6690){
case "white":
caseval__6692=new cljs.core.Keyword(null,"black","black",1107723121)
break;
case "black":
caseval__6692=new cljs.core.Keyword(null,"white","white",1127006107)
break;
default:
caseval__6692=(function(){throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board)))))})()
}
return caseval__6692;
})(),new cljs.core.Keyword(null,"last-move","last-move",2980834330),null,new cljs.core.Keyword(null,"move","move",1017261891),(new cljs.core.Keyword(null,"move","move",1017261891).cljs$core$IFn$_invoke$arity$1(board) + 1),new cljs.core.Keyword(null,"passed?","passed?",4516827457),true,new cljs.core.Keyword(null,"previous-board","previous-board",4191509506),board);
}
});
/**
* Removes a chain at the given position if it is surrounded. Return new board.
*/
webgo.go.remove_if_surrounded = (function remove_if_surrounded(board,pos){if(cljs.core.truth_(new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board).call(null,pos)))
{var chn = webgo.go.chain.call(null,board,pos);var chain_libs = cljs.core.mapcat.call(null,((function (chn){
return (function (p1__6693_SHARP_){return webgo.go.liberties.call(null,board,p1__6693_SHARP_);
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
return (function (p1__6694_SHARP_){return cljs.core._EQ_.call(null,t,stones.call(null,p1__6694_SHARP_));
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
var move__2 = (function (board,pos){return move.call(null,board,pos,null);
});
var move__3 = (function (board,pos,old_stones){if(cljs.core.truth_(pos))
{if((webgo.go.pos_valid_QMARK_.call(null,pos,board)) && (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board),pos))))
{var t = new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board);var n = webgo.go.move_phase_2.call(null,webgo.go.move_phase_1.call(null,board,pos));var f1 = cljs.core.frequencies.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board)));var f2 = cljs.core.frequencies.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(n)));if((function (){var and__3529__auto__ = (f2.call(null,t) > f1.call(null,t));if(and__3529__auto__)
{var and__3529__auto____$1 = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board),new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(n));if(and__3529__auto____$1)
{var and__3529__auto____$2 = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"previous-board","previous-board",4191509506).cljs$core$IFn$_invoke$arity$1(board)),new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(n));if(and__3529__auto____$2)
{if(cljs.core.truth_(old_stones))
{return !(cljs.core.contains_QMARK_.call(null,old_stones,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(n)));
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
webgo.go.get_ownership = (function get_ownership(board,pos){var stones = new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board);var temp__4124__auto__ = stones.call(null,pos);if(cljs.core.truth_(temp__4124__auto__))
{var c = temp__4124__auto__;return c;
} else
{var nbs = cljs.core.map.call(null,stones,cljs.core.mapcat.call(null,((function (temp__4124__auto__,stones){
return (function (p1__6695_SHARP_){return webgo.go.neighbors.call(null,board,p1__6695_SHARP_);
});})(temp__4124__auto__,stones))
,webgo.go.chain.call(null,board,pos)));var bns = cljs.core.filter.call(null,((function (nbs,temp__4124__auto__,stones){
return (function (p1__6696_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),p1__6696_SHARP_);
});})(nbs,temp__4124__auto__,stones))
,nbs);var wns = cljs.core.filter.call(null,((function (nbs,bns,temp__4124__auto__,stones){
return (function (p1__6697_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),p1__6697_SHARP_);
});})(nbs,bns,temp__4124__auto__,stones))
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
* Checks if the board represents a finiahed game.
*/
webgo.go.game_over_QMARK_ = (function game_over_QMARK_(board){var and__3529__auto__ = new cljs.core.Keyword(null,"passed?","passed?",4516827457).cljs$core$IFn$_invoke$arity$1(board);if(cljs.core.truth_(and__3529__auto__))
{var and__3529__auto____$1 = new cljs.core.Keyword(null,"previous-board","previous-board",4191509506).cljs$core$IFn$_invoke$arity$1(board);if(cljs.core.truth_(and__3529__auto____$1))
{return new cljs.core.Keyword(null,"passed?","passed?",4516827457).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"previous-board","previous-board",4191509506).cljs$core$IFn$_invoke$arity$1(board));
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
webgo.go.score = (function score(board){var b = cljs.core.atom.call(null,board);var r = cljs.core.range.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(board));var seq__6710_6722 = cljs.core.seq.call(null,r);var chunk__6715_6723 = null;var count__6716_6724 = 0;var i__6717_6725 = 0;while(true){
if((i__6717_6725 < count__6716_6724))
{var x_6726 = cljs.core._nth.call(null,chunk__6715_6723,i__6717_6725);var seq__6718_6727 = cljs.core.seq.call(null,r);var chunk__6719_6728 = null;var count__6720_6729 = 0;var i__6721_6730 = 0;while(true){
if((i__6721_6730 < count__6720_6729))
{var y_6731 = cljs.core._nth.call(null,chunk__6719_6728,i__6721_6730);if(!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_6726,y_6731], null))))
{cljs.core.reset_BANG_.call(null,b,webgo.go.fill.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_6726,y_6731], null),webgo.go.get_ownership.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_6726,y_6731], null))));
} else
{}
{
var G__6732 = seq__6718_6727;
var G__6733 = chunk__6719_6728;
var G__6734 = count__6720_6729;
var G__6735 = (i__6721_6730 + 1);
seq__6718_6727 = G__6732;
chunk__6719_6728 = G__6733;
count__6720_6729 = G__6734;
i__6721_6730 = G__6735;
continue;
}
} else
{var temp__4126__auto___6736 = cljs.core.seq.call(null,seq__6718_6727);if(temp__4126__auto___6736)
{var seq__6718_6737__$1 = temp__4126__auto___6736;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6718_6737__$1))
{var c__4297__auto___6738 = cljs.core.chunk_first.call(null,seq__6718_6737__$1);{
var G__6739 = cljs.core.chunk_rest.call(null,seq__6718_6737__$1);
var G__6740 = c__4297__auto___6738;
var G__6741 = cljs.core.count.call(null,c__4297__auto___6738);
var G__6742 = 0;
seq__6718_6727 = G__6739;
chunk__6719_6728 = G__6740;
count__6720_6729 = G__6741;
i__6721_6730 = G__6742;
continue;
}
} else
{var y_6743 = cljs.core.first.call(null,seq__6718_6737__$1);if(!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_6726,y_6743], null))))
{cljs.core.reset_BANG_.call(null,b,webgo.go.fill.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_6726,y_6743], null),webgo.go.get_ownership.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_6726,y_6743], null))));
} else
{}
{
var G__6744 = cljs.core.next.call(null,seq__6718_6737__$1);
var G__6745 = null;
var G__6746 = 0;
var G__6747 = 0;
seq__6718_6727 = G__6744;
chunk__6719_6728 = G__6745;
count__6720_6729 = G__6746;
i__6721_6730 = G__6747;
continue;
}
}
} else
{}
}
break;
}
{
var G__6748 = seq__6710_6722;
var G__6749 = chunk__6715_6723;
var G__6750 = count__6716_6724;
var G__6751 = (i__6717_6725 + 1);
seq__6710_6722 = G__6748;
chunk__6715_6723 = G__6749;
count__6716_6724 = G__6750;
i__6717_6725 = G__6751;
continue;
}
} else
{var temp__4126__auto___6752 = cljs.core.seq.call(null,seq__6710_6722);if(temp__4126__auto___6752)
{var seq__6710_6753__$1 = temp__4126__auto___6752;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6710_6753__$1))
{var c__4297__auto___6754 = cljs.core.chunk_first.call(null,seq__6710_6753__$1);{
var G__6755 = cljs.core.chunk_rest.call(null,seq__6710_6753__$1);
var G__6756 = c__4297__auto___6754;
var G__6757 = cljs.core.count.call(null,c__4297__auto___6754);
var G__6758 = 0;
seq__6710_6722 = G__6755;
chunk__6715_6723 = G__6756;
count__6716_6724 = G__6757;
i__6717_6725 = G__6758;
continue;
}
} else
{var x_6759 = cljs.core.first.call(null,seq__6710_6753__$1);var seq__6711_6760 = cljs.core.seq.call(null,r);var chunk__6712_6761 = null;var count__6713_6762 = 0;var i__6714_6763 = 0;while(true){
if((i__6714_6763 < count__6713_6762))
{var y_6764 = cljs.core._nth.call(null,chunk__6712_6761,i__6714_6763);if(!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_6759,y_6764], null))))
{cljs.core.reset_BANG_.call(null,b,webgo.go.fill.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_6759,y_6764], null),webgo.go.get_ownership.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_6759,y_6764], null))));
} else
{}
{
var G__6765 = seq__6711_6760;
var G__6766 = chunk__6712_6761;
var G__6767 = count__6713_6762;
var G__6768 = (i__6714_6763 + 1);
seq__6711_6760 = G__6765;
chunk__6712_6761 = G__6766;
count__6713_6762 = G__6767;
i__6714_6763 = G__6768;
continue;
}
} else
{var temp__4126__auto___6769__$1 = cljs.core.seq.call(null,seq__6711_6760);if(temp__4126__auto___6769__$1)
{var seq__6711_6770__$1 = temp__4126__auto___6769__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6711_6770__$1))
{var c__4297__auto___6771 = cljs.core.chunk_first.call(null,seq__6711_6770__$1);{
var G__6772 = cljs.core.chunk_rest.call(null,seq__6711_6770__$1);
var G__6773 = c__4297__auto___6771;
var G__6774 = cljs.core.count.call(null,c__4297__auto___6771);
var G__6775 = 0;
seq__6711_6760 = G__6772;
chunk__6712_6761 = G__6773;
count__6713_6762 = G__6774;
i__6714_6763 = G__6775;
continue;
}
} else
{var y_6776 = cljs.core.first.call(null,seq__6711_6770__$1);if(!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_6759,y_6776], null))))
{cljs.core.reset_BANG_.call(null,b,webgo.go.fill.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_6759,y_6776], null),webgo.go.get_ownership.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_6759,y_6776], null))));
} else
{}
{
var G__6777 = cljs.core.next.call(null,seq__6711_6770__$1);
var G__6778 = null;
var G__6779 = 0;
var G__6780 = 0;
seq__6711_6760 = G__6777;
chunk__6712_6761 = G__6778;
count__6713_6762 = G__6779;
i__6714_6763 = G__6780;
continue;
}
}
} else
{}
}
break;
}
{
var G__6781 = cljs.core.next.call(null,seq__6710_6753__$1);
var G__6782 = null;
var G__6783 = 0;
var G__6784 = 0;
seq__6710_6722 = G__6781;
chunk__6715_6723 = G__6782;
count__6716_6724 = G__6783;
i__6717_6725 = G__6784;
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