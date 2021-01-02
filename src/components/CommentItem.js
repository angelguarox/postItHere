import React, {Fragment} from 'react';

const CommentItem = ({comments}) => {
	return(
		<Fragment>
		<div className="container p-2">
			<div className="row">
				<div className="col-md-10 mx-auto">
					<div className="card">
						<div className="card-header">
							<div className="d-flex justify-content-between">
								<h4>{comments.username}</h4>
							</div>
						</div>
						<div className="card-body">
							<p className="lead">{comments.text}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		</Fragment>
	);
};

export default CommentItem;
