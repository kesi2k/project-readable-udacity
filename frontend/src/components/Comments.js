import React, { Component } from 'react';
import { getCommentsByPostId } from '../actions/actionComments.js'
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
	render()
	{
		const comments = this.props.comments.comments
		const id = this.props.match.params.id

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
		                        <Link to={'/posts/'+comment.id}>
		                          <button className="btn btn-warning">
		                            Edit Comment
		                          </button>
		                        </Link>
		                        <button className="btn btn-danger" style={{"marginLeft": 10}}  >
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
	console.log("In comments", state)
	comments: return {comments: state.commentsReducer}
}

export default connect(mapStateToProps, { getCommentsByPostId })(Comments);