import React, {Fragment} from 'react';
import Modal from 'react-bootstrap/Modal';
import {connect} from 'react-redux';
import {showModal} from '../redux/postDuck';
import CommentModal from './CommentModal';

const PostDetail = ({modal, showModal}) => {
	return(
		<Fragment>
			<Modal show={modal.get('isShow')} onHide={() => showModal({})} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
				<Modal.Header closeButton>
					<Modal.Title id="example-custom-modal-styling-title">
						{modal.getIn(['post','title'])}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>{modal.getIn(['post','message'])}</p>
					<p>{modal.getIn(['post','username'])}</p>
				</Modal.Body>
				<CommentModal idPost={modal.getIn(['post','id'])} />
	  		</Modal>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	modal: state.postsStore.get('modal')
});

const mapDispachToProps = {
	showModal
};

export default connect(mapStateToProps, mapDispachToProps)(PostDetail);
