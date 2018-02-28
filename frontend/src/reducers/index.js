import { combineReducers } from 'redux'
//import  { CATEGORIES }  from '../actions/actionCategories.js'
import catsReducer from './catsReducer';
import postsReducer from './postsReducer';
import commentsReducer from './commentsReducer';
import sortReducer from './sortReducer';
import { reducer as formReducer } from 'redux-form';




export default combineReducers({
	postsReducer,
	catsReducer,
	commentsReducer,
	sortReducer,
	form: formReducer
})


