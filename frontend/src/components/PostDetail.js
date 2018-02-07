import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostById } from '../utils/ServerAPI'
import { Link } from 'react-router-dom';



class PostDetail extends Component
{

	componentDidMount()
	{
		//console.log('In component did mount',this.props)
		const id = this.props.match.params.id
		this.props.getPostById(id)
	}


	render()
	{
		const post = this.props.post

		if(!post)
		{
		return (
			<div>
				<h1> Post Loading. </h1>
				 <Link to="/">
				 	<button className="btn btn-primary"> Front Page </button>
				 </Link>
			</div>
			)
		}

		return(
			<div>

				<div>
                    <h3 style={{"marginTop": 40}} >Category: {post.category}</h3>
                    <h4> {post.title} </h4>
                    <p> {post.body} </p>
                    <p> Author: { post.author } </p>
                    <p> {new Date(post.timestamp).toUTCString() } </p>
	            </div>

				<Link to="/">
			 		<button className="btn btn-primary"> Front Page </button>
			 	</Link>

			 	<div style={{"marginTop": 70}}>
			 	</div>


			</div>
			)



	}
}

function mapStateToProps(state, ownProps)
{
  //console.log('In mapStToP', state)
  return {
    post: state.postsReducer[ownProps.match.params.id]
  }
}


export default connect(mapStateToProps, { getPostById })(PostDetail);