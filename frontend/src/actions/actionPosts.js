import * as PostsAPI from '../utils/ServerAPI'

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

export function addPost(data){

	const postData = {
    ...data,
    timestamp: new Date().getTime()
  }; 
	 return dispatch => {
   PostsAPI.addPostToSer(postData).then(post => dispatch({type: ADD_POST, posts: postData}));
     }
}
