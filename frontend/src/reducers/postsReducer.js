import  { ALL_POSTS, ADD_POST }  from '../actions/actionPosts.js'



const postsObj = {}


export default function(state=postsObj, action){

	console.log('In reducer');
	console.log(action)
	console.log(state)
	console.log(action.post)

	switch(action.type){
		case ALL_POSTS: 
			return { ...state, posts: action.posts}

		// case ADD_POST:
		//  	return { ...state,
		//  		posts: action.post		 		
		//  	}

		default:
			return state
	}

}


// return{
//                 ...state,
//                 [day]: {
//                     ...state[day],
//                     [meal]: null,
//                 }