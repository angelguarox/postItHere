import React from 'react';
import {connect} from 'react-redux';
import PostItem from './PostItem';

const PostList = ({posts}) => (
	posts.map(item => (
		<PostItem key={item.id} posts={item} />
	))
);

const mapStateToProps = (state) => ({
	posts: state.postsStore.get('posts')
});

export default connect(mapStateToProps)(PostList);
