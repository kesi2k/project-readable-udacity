import  { ALL_POSTS }  from '../actions/actionPosts.js'



const postsObj = {}


export default function(state=postsObj, action){

	switch(action.type){
		case ALL_POSTS: 
			return { ...state, posts: action.posts}

		//case ADD_POSTS:
		//	return { ...stae, }

		default:
			return state
	}

}


