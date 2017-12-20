import  { ALL_POSTS }  from '../actions/actionPosts.js'



const postsObj = {}


export default function(state=postsObj, action){

	console.log('In reducer');
	console.log(action)

	switch(action.type){
		case ALL_POSTS: 
			return { ...state, posts: action.posts}

		// case ADD_POST:
		// 	return { ...state, 

		// 	}

		default:
			return state
	}

}


