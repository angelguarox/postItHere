import React, {Fragment} from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const CommentModal = ({idPost}) => {
	return(
		<Fragment>
			<CommentForm idPost={idPost} />
			<CommentList idPost={idPost} />
		</Fragment>
	);
};

export default CommentModal;