import {
	ADD_PROD,
	REMOVE_PROD,
	ADD_USER,
	REMOVE_USER,
	ADD_PROD_IN_ORDER,
	REMOVE_PROD_IN_ORDER,
} from '../constants/ActionTypes';

export const addProd = (id) => ({type: ADD_PROD, id});
export const removeProd = (id) => ({ type: REMOVE_PROD, id});

export const addUser = (id) => ({ type: ADD_USER, id});
export const removeUser = (id) => ({ type: REMOVE_USER, id});

export const addProdInOrder = (id) => ({ type: ADD_PROD_IN_ORDER, id});
export const removeProdInOrder = (id) => ({ type: REMOVE_PROD_IN_ORDER, id});