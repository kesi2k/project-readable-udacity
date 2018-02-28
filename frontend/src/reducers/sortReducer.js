import  {SORT_POSTS }  from '../actions/actionPosts.js'
import _ from 'lodash';







export default function(state='voteScore', action){
	//console.log(action)
	//console.log(state)
	//console.log(post)

	switch(action.type){

		case SORT_POSTS:
			const newState = action.payload;

			return newState

		default:
			return state
	}

}
