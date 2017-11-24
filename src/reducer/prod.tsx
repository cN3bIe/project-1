import {
	ADD_PROD,
	REMOVE_PROD,
	GET_PROD_REQUST,
	GET_PROD_SUCCESS
} from '../constants/ActionTypes';


export default function prod(state: Prod[] = [], action){
	switch( action.type ){
		case ADD_PROD: return [...state, action.prod];
		case REMOVE_PROD: return state.filter( (el: Prod) => el.id !== action.prod.id );
		case GET_PROD_REQUST: return state;
		default: return state;
	}
}