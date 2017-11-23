import {
	ADD_PROD,
	REMOVE_PROD,
	ADD_PROD_IN_CARD,
	REMOVE_PROD_IN_CARD,
} from '../constants/ActionTypes';

export const actionsAddProd					 = (id: ProdId) => ({ type: ADD_PROD, id});
export const actionsRemoveProd			 = (id: ProdId) => ({ type: REMOVE_PROD, id});

export const actionsAddProdInCard		 = (id: ProdId) => ({ type: ADD_PROD_IN_CARD, id});
export const actionsRemoveProdInCard = (id: ProdId) => ({ type: REMOVE_PROD_IN_CARD, id});