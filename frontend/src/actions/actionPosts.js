import * as PostsAPI from '../utils/ServerAPI'
import uuid from 'uuid';


/*
PostsAPI.getCats().then((cats) => {
    this.setState({ categories: cats })
  })
}
*/

export const ALL_POSTS = 'ALL_POSTS';
export const ADD_POST = 'ADD_POST';
export const SINGLE_POST = 'SINGLE_POST';
export const EDIT_POST = 'EDIT_POST';

export function getPosts(){
	 return dispatch => {
      PostsAPI.getAllPosts().then(posts => dispatch({type: ALL_POSTS, posts: posts}));
  };

}

export function getPostsByCats(cat){
   return dispatch => {
      PostsAPI.getPostsByCategory(cat).then(posts => dispatch({type: ALL_POSTS, posts: posts}));
  };

}

export function addPost(data){

	const postData = {
    ...data,
    timestamp: Date.now(),
    id: uuid()
  }; 
	 return dispatch => {
   PostsAPI.addPostToSer(postData);
     }

}


/*export function editPost(id, post, callback){
  return dispatch => {
    PostsAPI.editSpecificPost(id, post).then(res => {
                                            callback();
                                            dispatch({ type:EDIT_POST, post: post})
                                          })

  }

}*/


// export function getSpecificPost(postId){
//     return dispatch => {
//       PostsAPI.getPostById(postId).then(post => dispatch ({type: SINGLE_POST, post: post}))
//     }

//   }

