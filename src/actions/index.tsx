import {
	ADD_PROD,
	REMOVE_PROD,
	ADD_PROD_IN_CARD,
	REMOVE_PROD_IN_CARD,
} from '../constants/ActionTypes';

export const addProd					 = (id: ProdId) => ({ type: ADD_PROD, id});
export const removeProd				 = (id: ProdId) => ({ type: REMOVE_PROD, id});

export const addProdInOrder		 = (id: ProdId) => ({ type: ADD_PROD_IN_CARD, id});
export const removeProdInOrder = (id: ProdId) => ({ type: REMOVE_PROD_IN_CARD, id});