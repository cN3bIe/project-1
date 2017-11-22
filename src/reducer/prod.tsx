import { ADD_PROD, REMOVE_PROD } from '../constants/ActionTypes';

const prodJSON: Prod[] = require('../data/prod.json');

export default function prod(state: Prod[] = prodJSON, action){
	switch( action.type ){
		case ADD_PROD: return [...state, action.prod];
		case REMOVE_PROD: return state.filter( (el: Prod) => el.id !== action.prod.id );
		default: return state;
	}
}