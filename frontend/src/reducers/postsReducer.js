import  { ALL_POSTS, ADD_POST, SINGLE_POST, EDIT_POST, DELETE_POST, VOTE_POST }  from '../actions/actionPosts.js'
import _ from 'lodash';







export default function(state={}, action){

	//console.log('In posts reducer');
	//console.log(action)
	//console.log(state)
	//console.log(post)

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
			newEditedState[editedPost.id] = editedPost;

			return newEditedState

		case DELETE_POST:
			return _.omit(state, action.post);

		case VOTE_POST:
			const votedPost = action.post;
			const newVotedState = { ...state };
			newVotedState[votedPost.id] = votedPost;
			//console.log("In VOTE_POST", votedPost);

			return newVotedState;


		default:
			return state
	}

}
