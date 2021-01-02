import React from 'react';
import {connect} from 'react-redux';
import CommentItem from './CommentItem';

const CommentList = ({comments, idPost}) => (
	comments.map(item => (item.id === idPost 
		? <CommentItem key={item.id} comments={item} /> : null
	))
);

const mapStateToProps = (state) => ({
	comments: state.commentsStore
});

export default connect(mapStateToProps)(CommentList);