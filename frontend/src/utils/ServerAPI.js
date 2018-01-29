import axios from 'axios';
import  { EDIT_POST, SINGLE_POST, DELETE_POST }  from '../actions/actionPosts.js'

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




export const getCats = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

// GET /:category/posts
export const getPostsByCategory = (cat) => 
  fetch(`${api}/${cat}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

// Get a specific post
// GET /posts/:id` | Get the details of a single post

export const getPostById = (postId, callback) => {
    return dispatch => {
    axios.get(`${api}/posts/${postId}`)
      .then(res => {
        callback(res.data)
        dispatch({ type:SINGLE_POST, post: res.data})
      })

  }
}


//`PUT /posts/:id` | Edit the details of an existing post. | **title** - [String] <br> **body** - [String] |
export const editSpecificPost = (id, data, callback) => {


  return dispatch => {
    axios.put(`${api}/posts/${id}`, data)
      .then(res => {
        callback()
        dispatch({ type:EDIT_POST, post: res.data})
      })

  }
}


export const addPostToSer = (data) => {

   fetch(`${api}/posts`, { method: "POST", 
                          body: JSON.stringify(data),
                          headers })
    .then(res => res.json())
    .then(data => data)
}

// `DELETE /posts/:id` | Sets the deleted flag for a post to 'true'. <br> Sets the parentDeleted flag for all child comments to 'true'. | |

export const deletePost = (id, callback) => {
  return dispatch => {
    axios.delete(`${api}/posts/${id}`)
      .then(res => {
          callback()
          dispatch({ type:DELETE_POST, post: id})
        })
  }
}

