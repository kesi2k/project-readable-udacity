import  { ALL_POSTS, ADD_POST, SINGLE_POST, EDIT_POST, DELETE_POST }  from '../actions/actionPosts.js'
import _ from 'lodash';







export default function(state={}, action){

	//console.log('In reducer');
	//console.log(action)
	//console.log(state)
	//.log(action.post)

	switch(action.type){
		case ALL_POSTS: 
			return { ...state, posts: action.posts}

		case SINGLE_POST:
			const post = action.post;
			const newState =  { ...state };
			newState[post.id] = post;

			return newState

		case EDIT_POST:
			const editedPost = action.post;
			const newEditedState = { ...state };
			newEditedState[editedPost.id] = post;

			return newEditedState

		case DELETE_POST:
			return _.omit(state, action.post);


		default:
			return state
	}

}
