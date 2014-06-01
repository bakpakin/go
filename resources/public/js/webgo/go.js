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
webgo.go.pos_valid_QMARK_ = (function pos_valid_QMARK_(pos,board){var max_pos = (new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(board) - 1);var vec__42640 = pos;var x = cljs.core.nth.call(null,vec__42640,0,null);var y = cljs.core.nth.call(null,vec__42640,1,null);return (((max_pos >= x)) && ((x >= 0))) && (((max_pos >= y)) && ((y >= 0)));
});
/**
* Returns the neighbors of a position.
*/
webgo.go.neighbors = (function neighbors(board,pos){var vec__42643 = pos;var x = cljs.core.nth.call(null,vec__42643,0,null);var y = cljs.core.nth.call(null,vec__42643,1,null);var stones = new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board);return cljs.core.filter.call(null,(function (p1__42641_SHARP_){return webgo.go.pos_valid_QMARK_.call(null,p1__42641_SHARP_,board);
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
return (function (p1__42644_SHARP_){return cljs.core._EQ_.call(null,trgt,stones.call(null,p1__42644_SHARP_));
});})(walked,to_walk,current,walked__$1,to_walk__$1))
,webgo.go.neighbors.call(null,board,current)));var to_walk__$2 = clojure.set.union.call(null,to_walk__$1,clojure.set.difference.call(null,candidates,walked__$1));{
var G__42645 = walked__$1;
var G__42646 = to_walk__$2;
walked = G__42645;
to_walk = G__42646;
continue;
}
}
break;
}
});
/**
* Checks if a chain originating at pos has been surrounded.
*/
webgo.go.surrounded_QMARK_ = (function surrounded_QMARK_(board,pos){return cljs.core.empty_QMARK_.call(null,cljs.core.mapcat.call(null,(function (p1__42647_SHARP_){return webgo.go.liberties.call(null,board,p1__42647_SHARP_);
}),webgo.go.chain.call(null,board,pos)));
});
/**
* Applies a move to the board, returning a new board.
* Does not check if the move is valid. If pos is nil or false,
* the current player passes.
*/
webgo.go.move_phase_1 = (function move_phase_1(board,pos){if(cljs.core.truth_(pos))
{return cljs.core.assoc.call(null,board,new cljs.core.Keyword(null,"stones","stones",4416800800),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(board),pos,new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board)),new cljs.core.Keyword(null,"turn","turn",1017476079),(function (){var G__42650 = new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__42650))
{return new cljs.core.Keyword(null,"black","black",1107723121);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__42650))
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
{return cljs.core.assoc.call(null,board,new cljs.core.Keyword(null,"turn","turn",1017476079),(function (){var G__42651 = new cljs.core.Keyword(null,"turn","turn",1017476079).cljs$core$IFn$_invoke$arity$1(board);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),G__42651))
{return new cljs.core.Keyword(null,"black","black",1107723121);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),G__42651))
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
return (function (p1__42652_SHARP_){return webgo.go.liberties.call(null,board,p1__42652_SHARP_);
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
return (function (p1__42653_SHARP_){return cljs.core._EQ_.call(null,t,stones.call(null,p1__42653_SHARP_));
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
{var nbs = cljs.core.map.call(null,stones,cljs.core.mapcat.call(null,(function (p1__42654_SHARP_){return webgo.go.neighbors.call(null,board,p1__42654_SHARP_);
}),webgo.go.chain.call(null,board,pos)));var bns = cljs.core.filter.call(null,((function (nbs){
return (function (p1__42655_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),p1__42655_SHARP_);
});})(nbs))
,nbs);var wns = cljs.core.filter.call(null,((function (nbs,bns){
return (function (p1__42656_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"white","white",1127006107),p1__42656_SHARP_);
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
* Checks if the board represents a finiahed game.
*/
webgo.go.game_over_QMARK_ = (function game_over_QMARK_(board){var and__3431__auto__ = new cljs.core.Keyword(null,"passed?","passed?",4516827457).cljs$core$IFn$_invoke$arity$1(board);if(cljs.core.truth_(and__3431__auto__))
{var and__3431__auto____$1 = new cljs.core.Keyword(null,"previous-board","previous-board",4191509506).cljs$core$IFn$_invoke$arity$1(board);if(cljs.core.truth_(and__3431__auto____$1))
{return new cljs.core.Keyword(null,"passed?","passed?",4516827457).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"previous-board","previous-board",4191509506).cljs$core$IFn$_invoke$arity$1(board));
} else
{return and__3431__auto____$1;
}
} else
{return and__3431__auto__;
}
});
/**
* Scores a board. The returned score is in the form [black white].
*/
webgo.go.score = (function score(board){var b = cljs.core.atom.call(null,board);var r = cljs.core.range.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(board));var seq__42669_42681 = cljs.core.seq.call(null,r);var chunk__42674_42682 = null;var count__42675_42683 = 0;var i__42676_42684 = 0;while(true){
if((i__42676_42684 < count__42675_42683))
{var x_42685 = cljs.core._nth.call(null,chunk__42674_42682,i__42676_42684);var seq__42677_42686 = cljs.core.seq.call(null,r);var chunk__42678_42687 = null;var count__42679_42688 = 0;var i__42680_42689 = 0;while(true){
if((i__42680_42689 < count__42679_42688))
{var y_42690 = cljs.core._nth.call(null,chunk__42678_42687,i__42680_42689);if(!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_42685,y_42690], null))))
{cljs.core.reset_BANG_.call(null,b,webgo.go.fill.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_42685,y_42690], null),webgo.go.get_ownership.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_42685,y_42690], null))));
} else
{}
{
var G__42691 = seq__42677_42686;
var G__42692 = chunk__42678_42687;
var G__42693 = count__42679_42688;
var G__42694 = (i__42680_42689 + 1);
seq__42677_42686 = G__42691;
chunk__42678_42687 = G__42692;
count__42679_42688 = G__42693;
i__42680_42689 = G__42694;
continue;
}
} else
{var temp__4092__auto___42695 = cljs.core.seq.call(null,seq__42677_42686);if(temp__4092__auto___42695)
{var seq__42677_42696__$1 = temp__4092__auto___42695;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42677_42696__$1))
{var c__4191__auto___42697 = cljs.core.chunk_first.call(null,seq__42677_42696__$1);{
var G__42698 = cljs.core.chunk_rest.call(null,seq__42677_42696__$1);
var G__42699 = c__4191__auto___42697;
var G__42700 = cljs.core.count.call(null,c__4191__auto___42697);
var G__42701 = 0;
seq__42677_42686 = G__42698;
chunk__42678_42687 = G__42699;
count__42679_42688 = G__42700;
i__42680_42689 = G__42701;
continue;
}
} else
{var y_42702 = cljs.core.first.call(null,seq__42677_42696__$1);if(!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_42685,y_42702], null))))
{cljs.core.reset_BANG_.call(null,b,webgo.go.fill.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_42685,y_42702], null),webgo.go.get_ownership.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_42685,y_42702], null))));
} else
{}
{
var G__42703 = cljs.core.next.call(null,seq__42677_42696__$1);
var G__42704 = null;
var G__42705 = 0;
var G__42706 = 0;
seq__42677_42686 = G__42703;
chunk__42678_42687 = G__42704;
count__42679_42688 = G__42705;
i__42680_42689 = G__42706;
continue;
}
}
} else
{}
}
break;
}
{
var G__42707 = seq__42669_42681;
var G__42708 = chunk__42674_42682;
var G__42709 = count__42675_42683;
var G__42710 = (i__42676_42684 + 1);
seq__42669_42681 = G__42707;
chunk__42674_42682 = G__42708;
count__42675_42683 = G__42709;
i__42676_42684 = G__42710;
continue;
}
} else
{var temp__4092__auto___42711 = cljs.core.seq.call(null,seq__42669_42681);if(temp__4092__auto___42711)
{var seq__42669_42712__$1 = temp__4092__auto___42711;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42669_42712__$1))
{var c__4191__auto___42713 = cljs.core.chunk_first.call(null,seq__42669_42712__$1);{
var G__42714 = cljs.core.chunk_rest.call(null,seq__42669_42712__$1);
var G__42715 = c__4191__auto___42713;
var G__42716 = cljs.core.count.call(null,c__4191__auto___42713);
var G__42717 = 0;
seq__42669_42681 = G__42714;
chunk__42674_42682 = G__42715;
count__42675_42683 = G__42716;
i__42676_42684 = G__42717;
continue;
}
} else
{var x_42718 = cljs.core.first.call(null,seq__42669_42712__$1);var seq__42670_42719 = cljs.core.seq.call(null,r);var chunk__42671_42720 = null;var count__42672_42721 = 0;var i__42673_42722 = 0;while(true){
if((i__42673_42722 < count__42672_42721))
{var y_42723 = cljs.core._nth.call(null,chunk__42671_42720,i__42673_42722);if(!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_42718,y_42723], null))))
{cljs.core.reset_BANG_.call(null,b,webgo.go.fill.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_42718,y_42723], null),webgo.go.get_ownership.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_42718,y_42723], null))));
} else
{}
{
var G__42724 = seq__42670_42719;
var G__42725 = chunk__42671_42720;
var G__42726 = count__42672_42721;
var G__42727 = (i__42673_42722 + 1);
seq__42670_42719 = G__42724;
chunk__42671_42720 = G__42725;
count__42672_42721 = G__42726;
i__42673_42722 = G__42727;
continue;
}
} else
{var temp__4092__auto___42728__$1 = cljs.core.seq.call(null,seq__42670_42719);if(temp__4092__auto___42728__$1)
{var seq__42670_42729__$1 = temp__4092__auto___42728__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42670_42729__$1))
{var c__4191__auto___42730 = cljs.core.chunk_first.call(null,seq__42670_42729__$1);{
var G__42731 = cljs.core.chunk_rest.call(null,seq__42670_42729__$1);
var G__42732 = c__4191__auto___42730;
var G__42733 = cljs.core.count.call(null,c__4191__auto___42730);
var G__42734 = 0;
seq__42670_42719 = G__42731;
chunk__42671_42720 = G__42732;
count__42672_42721 = G__42733;
i__42673_42722 = G__42734;
continue;
}
} else
{var y_42735 = cljs.core.first.call(null,seq__42670_42729__$1);if(!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"stones","stones",4416800800).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,b)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_42718,y_42735], null))))
{cljs.core.reset_BANG_.call(null,b,webgo.go.fill.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_42718,y_42735], null),webgo.go.get_ownership.call(null,cljs.core.deref.call(null,b),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_42718,y_42735], null))));
} else
{}
{
var G__42736 = cljs.core.next.call(null,seq__42670_42729__$1);
var G__42737 = null;
var G__42738 = 0;
var G__42739 = 0;
seq__42670_42719 = G__42736;
chunk__42671_42720 = G__42737;
count__42672_42721 = G__42738;
i__42673_42722 = G__42739;
continue;
}
}
} else
{}
}
break;
}
{
var G__42740 = cljs.core.next.call(null,seq__42669_42712__$1);
var G__42741 = null;
var G__42742 = 0;
var G__42743 = 0;
seq__42669_42681 = G__42740;
chunk__42674_42682 = G__42741;
count__42675_42683 = G__42742;
i__42676_42684 = G__42743;
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