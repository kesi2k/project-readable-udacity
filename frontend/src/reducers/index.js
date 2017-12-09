import { combineReducers } from 'redux'
//import  { CATEGORIES }  from '../actions/actionCategories.js'
import catsReducer from './catsReducer'
import postsReducer from './postsReducer'



/*

var catObj = {
	cats: []
}


export default function(state=catObj, action){
	switch(action.type){
		case CATEGORIES: 
			return { ...state, cats: action.categories}

		default:
			return state
	}

}
*/


export default combineReducers({
	postsReducer,
	catsReducer
})


