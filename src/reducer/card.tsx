import { ADD_PROD_IN_CARD, REMOVE_PROD_IN_CARD } from '../constants/ActionTypes';

const defaultState = [];

export default function card(state: ProdId[] = defaultState, action){
	console.log(action);
	switch( action.type ){
		case ADD_PROD_IN_CARD: return [...state,action.id];
		case REMOVE_PROD_IN_CARD: return state.filter( (id: ProdId) => id !== action.id );
		default: return state;
	}
}