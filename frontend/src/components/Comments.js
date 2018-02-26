import React, { Component } from 'react';
import { getCommentsByPostId, deleteComment } from '../actions/actionComments.js'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';




class Comments extends Component
{
	componentDidMount()
	{
		//console.log('Heres the ID', this.props.match.params.id)
		const id = this.props.match.params.id

	    this.props.getCommentsByPostId(id)

  	}

  	deleteComment(commentId)
  	{
  		//console.log(commentId)
  		const postId = this.props.match.params.id


  		this.props.deleteComment(commentId, () => {
  			this.props.history.push(`/udacity/${postId}`)
  		});


  	}



	render()
	{
		//console.log("In comments render", this.props.match.params)
		const comments = this.props.comments.comments
		const id = this.props.match.params.id
		const cat = this.props.match.params.cat

		if(!comments)
		{
			return(
				<h5> Comments Loading. </h5>
			)

		}

		return(
			<div>
				<h3> Comments Section </h3>

				<ul style={{"listStyle":"none"}}>
					{comments.map((comment) => (

						<div className="col-md-12 col-lg-12" key = {comment.id} style={{"marginBottom": 50}}>

		                      <div className="col-md-6 col-lg-6">
		                        <li style={{"marginBottom": 25}}>
		                          {comment.title}
		                        </li>
		                        <p> {comment.body} </p>
		                        <p> Author: { comment.author } </p>
		                        <p> {new Date(comment.timestamp).toUTCString() } </p>
		                        <Link to={'/' + cat + '/' + id + '/' + 'editComment' + '/' + comment.id}>
		                          <button className="btn btn-warning">
		                            Edit Comment
		                          </button>
		                        </Link>
		                        <button className="btn btn-danger" style={{"marginLeft": 10}} onClick={ () => this.deleteComment(comment.id)} >
		                          Delete Comment
		                        </button>
		                      </div>         

		                </div>
						)		
					)}
				</ul>

				<div style={{"marginBottom": 75, "marginTop": 50}}>
                  <Link to={`${id}/newcomment`}>
                    <button className="btn btn-primary">
                     Add Comment
                    </button>
                  </Link>
                </div>
			</div>
		)

	}

}

function mapStateToProps(state, ownProps)
{
	//console.log("In comments", state)
	comments: return {comments: state.commentsReducer}
}

export default connect(mapStateToProps, { deleteComment, getCommentsByPostId })(Comments);