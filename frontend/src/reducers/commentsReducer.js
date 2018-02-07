import  { ALL_COMMENTS }  from '../actions/actionComments.js'
import _ from 'lodash';


export default function(state={}, action)
{
	//console.log("In comments reducer", action)
	switch(action.type){
		case ALL_COMMENTS: 
			return { ...state, comments: action.comments}

		default:
			return state
	}


}