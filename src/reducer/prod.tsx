const { Set } = require('immutable');

import { ADD_PROD, REMOVE_PROD } from '../constants/ActionTypes';
const prodJSON = require('../data/prod.json');

const defaultState = new Set(prodJSON);

export default function prod(state = defaultState, action){
	switch( action.type ){
		case ADD_PROD: return [...state,action.id];
		case REMOVE_PROD: return state;
		default: return state;
	}
}