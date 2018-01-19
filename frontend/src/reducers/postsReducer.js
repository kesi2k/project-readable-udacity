import  { ALL_POSTS, ADD_POST, SINGLE_POST }  from '../actions/actionPosts.js'
import _ from 'lodash';







export default function(state={}, action){

	//console.log('In reducer');
	//console.log(action)
	//console.log(state)
	//.log(action.post)

	switch(action.type){
		case ALL_POSTS: 
			return { ...state, posts: action.posts}

		// case ADD_POST:
		//  	return { ...state,
		//  		posts: action.post		 		
		//  	}
		case SINGLE_POST:
			const post = action.post;
			const newState =  { ...state };
			newState[post.id] = post;

			
			return newState

		default:
			return state
	}

}
