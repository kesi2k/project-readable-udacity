import  { ALL_POSTS }  from '../actions/actionAllPosts.js'



const postsObj = {}


export default function(state=postsObj, action){

	switch(action.type){
		case ALL_POSTS: 
			return { ...state, posts: action.posts}

		default:
			return state
	}

}


