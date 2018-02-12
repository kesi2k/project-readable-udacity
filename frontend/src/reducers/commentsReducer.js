import  { ALL_COMMENTS, ADD_COMMENT, SINGLE_COMMENT }  from '../actions/actionComments.js'
import _ from 'lodash';


export default function(state={}, action)
{
	console.log("In comments reducer", action)
	switch(action.type){
		case ALL_COMMENTS: 
			return { ...state, comments: action.comments}

		case ADD_COMMENT:
			//const newComment = 
			return state

		case SINGLE_COMMENT:
			const comment = action.comment
			const newState = { ...state }
			newState[comment.id] = comment
			return newState

		default:
			return state
	}


}