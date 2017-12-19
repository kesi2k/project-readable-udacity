import * as PostsAPI from '../utils/ServerAPI'

/*
PostsAPI.getCats().then((cats) => {
    this.setState({ categories: cats })
  })
}
*/

export const ALL_POSTS = 'ALL_POSTS'
export const ADD_POSTS = 'ADD_POSTS'

export function getPosts(){
	 return dispatch => {
      PostsAPI.getAllPosts().then(posts => dispatch({type: ALL_POSTS, posts: posts}));
  };

}

export function addPost($data){
	console.log("IN here do somehting")
	console.log($data)
	//posts => dispatch({type: ADD_POSTS, posts: posts})
}
