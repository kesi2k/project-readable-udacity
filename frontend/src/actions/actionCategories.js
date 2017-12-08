import * as PostsAPI from '../utils/ServerAPI'

/*
PostsAPI.getCats().then((cats) => {
    this.setState({ categories: cats })
  })
}
*/

export const CATEGORIES = 'CATEGORIES'

export function getCategories(){
	 return dispatch => {
      PostsAPI.getCats().then(cats => dispatch({type: CATEGORIES, categories: cats}));
  };

}
