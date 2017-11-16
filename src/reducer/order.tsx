const { Set } = require('immutable');

import { ADD_PROD_IN_ORDER, REMOVE_PROD_IN_ORDER } from '../constants/ActionTypes';

const defaultState = new Set([]);

export default function order(state = defaultState, action){
	switch( action.type ){
		case ADD_PROD_IN_ORDER: return state.add(action.id);
		case REMOVE_PROD_IN_ORDER: return state.delete(action.id);
		default: return state;
	}
}