import { ADD_PROD_IN_CARD, REMOVE_PROD_IN_CARD } from '../constants/ActionTypes';

const defaultState = [];

export default function card(state: ProdId[] = defaultState, action){
	switch( action.type ){
		case ADD_PROD_IN_CARD: return state.every( (id: ProdId) => id !== action.id )?[...state,action.id]:[...state];
		case REMOVE_PROD_IN_CARD: return state.filter( (id: ProdId) => id !== action.id );
		default: return state;
	}
}