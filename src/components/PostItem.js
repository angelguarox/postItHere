import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {showModal} from '../redux/postDuck';
import PostDetail from './PostDetail';

const styles = {
	hoverCard: {
		cursor: 'pointer',
		border: '1px solid black',
	}
};

const PostItem = ({posts, modal, showModal}) => {
	return(
		<Fragment>
		<PostDetail />
		<div className="container p-2">
			<div className="row">
				<div className="col-md-10 mx-auto">
					<div className="card" style={styles.hoverCard} onClick={() => showModal(posts)}>
						<div className="card-header">
							<div className="d-flex justify-content-between">
								<h1>{posts.title}</h1>
							</div>
						</div>
						<div className="card-body">
							<p className="lead">{posts.username}</p>
							<p>{posts.message}</p>
							<p>{posts.date.toString()}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	modal: state.postsStore.get('modal')
});

const mapDispachToProps = {
	showModal
};

export default connect(mapStateToProps, mapDispachToProps)(PostItem);
