import { combineReducers } from 'redux'
//import  { CATEGORIES }  from '../actions/actionCategories.js'
import catsReducer from './catsReducer'
import postsReducer from './postsReducer'
import { reducer as formReducer } from 'redux-form';




export default combineReducers({
	postsReducer,
	catsReducer,
	form: formReducer
})


