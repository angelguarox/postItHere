import React, {Fragment} from 'react';
import PostForm from '../components/PostForm';
import PostList from '../components/PostsList';

const Home = () => {
	return(
		<Fragment>
			<PostForm />
			<PostList />
		</Fragment>
	);
};

export default Home;