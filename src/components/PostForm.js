import React, {useState} from 'react';
import {connect} from 'react-redux';
import {v4 as uuid} from 'uuid';
import {createPost} from '../redux/postDuck';

const PostForm = ({createPost}) => {
	const initialState = {
		id: uuid(),
		title: '',
		message: '',
		username: '',
		date: ''
	};

	const [post, setPost] = useState(initialState);

	const handleSubmit = e => {
		e.preventDefault();
		createPost(post);
		setPost(initialState);
	};

	const handleInputChange = e => {
		setPost({...post, [e.target.name]: e.target.value, date: new Date()});
	};

	return(
		<div className="row">
			<div className="col-md-8 mx-auto">
				<div className="card">
					<div className="card-header">
						<h3 className="text-title text-center">New post</h3>
					</div>
					<div className="card-body">
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<input type="text" name="title" className="form-control" placeholder="Post title" onChange={handleInputChange} value={post.title} />
							</div>
							<div className="form-group">
								<textarea type="text" name="message" rows="3" className="form-control" placeholder="Post message" onChange={handleInputChange} value={post.message}></textarea>
							</div>
							<div className="form-group">
								<input type="text" name="username" className="form-control" placeholder="Username" onChange={handleInputChange} value={post.username} />
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
	createPost
};

export default connect(null, mapDispatchToProps)(PostForm);
