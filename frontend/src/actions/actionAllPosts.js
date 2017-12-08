import * as PostsAPI from '../utils/ServerAPI'

/*
PostsAPI.getCats().then((cats) => {
    this.setState({ categories: cats })
  })
}
*/

export const ALL_POSTS = 'ALL_POSTS'

export function getPosts(){
	 return dispatch => {
      PostsAPI.getAllPosts().then(posts => dispatch({type: ALL_POSTS, posts: posts}));
  };

}
