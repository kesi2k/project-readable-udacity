import axios from 'axios';
import uuid from 'uuid';


export const ALL_COMMENTS = 'ALL_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const SINGLE_COMMENT = 'SINGLE_COMMENT';


const api = process.env.REACT_APP_READABLE || 'http://localhost:3001'


let token = localStorage.token


if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': token
}


axios.defaults.headers = headers;


// | `GET /posts/:id/comments` | Get all the comments for a single post. | |
// Get comments associated with a specific post
export function getCommentsByPostId(postId)
{
	return dispatch => {
		axios.get(`${api}/posts/${postId}/comments`)
			.then(res => {
				dispatch({ type:ALL_COMMENTS, comments: res.data })
			})
	}
}

// `POST /comments` | Add a comment to a post. | **id** - Any unique ID. As with posts, UUID is probably the best here.
// <br> **timestamp** - [Timestamp] Get this however you want. 
//<br> **body** - [String] <br> **author** - [String] <br> **parentId** - Should match a post id in the database. |
// | `GET /comments/:id` | Get the details for a single comment. | |
// | `POST /comments/:id` | Used for voting on a comment. | **option** - [String]: Either `"upVote"` or `"downVote"`.  |
// | `PUT /comments/:id` | Edit the details of an existing comment. | **timestamp** - timestamp. Get this however you want. <br> **body** - [String] |
// | `DELETE /comments/:id` | Sets a comment's deleted flag to `true`. | &nbsp; |
export function addCommentToServer(data, commentParentId)
{

	const commentData = {
	    ...data,
	    timestamp: Date.now(),
	    id: uuid(),
	    parentId: commentParentId
	  }; 

	return dispatch => {
		axios.post(`${api}/comments`, commentData)
			.then(res => {
				dispatch({ type: ADD_COMMENT, comments: res.data})
			})
	}

}

export function getCommentById(commentId, callback)
{
	return dispatch => {
		axios.get(`${api}/comments/${commentId}`)
			.then(res => {		
		        if(typeof callback !== 'undefined')
		        {
		          callback(res.data)
		        }
				dispatch({ type: SINGLE_COMMENT, comment: res.data })
			})
	}
}













