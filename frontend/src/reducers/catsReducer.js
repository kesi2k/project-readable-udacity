import  { CATEGORIES }  from '../actions/actionCategories.js'



const catObj = {
	cats: [],
}


export default function(state=catObj, action){
	switch(action.type){
		case CATEGORIES: 
			return { ...state, cats: action.categories}

		default:
			return state
	}

}


