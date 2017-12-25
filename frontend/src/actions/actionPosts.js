import * as PostsAPI from '../utils/ServerAPI'
import uuid from 'uuid';


/*
PostsAPI.getCats().then((cats) => {
    this.setState({ categories: cats })
  })
}
*/

export const ALL_POSTS = 'ALL_POSTS'
export const ADD_POST = 'ADD_POST'

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
