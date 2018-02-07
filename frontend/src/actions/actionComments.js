import axios from 'axios';

export const ALL_COMMENTS = 'ALL_COMMENTS';


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
