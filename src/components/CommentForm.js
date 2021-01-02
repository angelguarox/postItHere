import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createComment} from '../redux/commentDuck';

const CommentForm = ({createComment, idPost}) => {
	const initialState = {
		id: idPost,
		text: '',
		username: ''
	};

	const [comment, setComment] = useState(initialState);

	const handleSubmit = e => {
		e.preventDefault();
		createComment(comment);
		setComment(initialState);
	};

	const handleInputChange = e => {
		setComment({...comment, [e.target.name]: e.target.value});
	};

	return(
		<div className="row">
			<div className="col-md-8 mx-auto">
				<div className="card">
					<div className="card-header">
						<h3 className="text-title text-center">New comment</h3>
					</div>
					<div className="card-body">
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<textarea type="text" name="text" rows="2" className="form-control" placeholder="Post message" onChange={handleInputChange} value={comment.text}></textarea>
							</div>
							<div className="form-group">
								<input type="text" name="username" className="form-control" placeholder="Username" onChange={handleInputChange} value={comment.username} />
							</div>
							<div className="form-group">
								<button className="btn btn-success btn-block">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapDispatchToProps = {
	createComment
};

export default connect(null, mapDispatchToProps)(CommentForm);