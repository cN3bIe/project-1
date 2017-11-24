import {
	ADD_PROD,
	REMOVE_PROD,
	ADD_PROD_IN_CARD,
	REMOVE_PROD_IN_CARD,
	GET_PROD_REQUST,
	GET_PROD_SUCCESS
} from '../constants/ActionTypes';

export const actionsAddProd						= (prod: Prod) => ({ type: ADD_PROD, prod});
export const actionsRemoveProd				= (id: ProdId) => ({ type: REMOVE_PROD, id});

export const actionsAddProdInCard			= (id: ProdId) => ({ type: ADD_PROD_IN_CARD, id});
export const actionsRemoveProdInCard	= (id: ProdId) => ({ type: REMOVE_PROD_IN_CARD, id});


export const actionsRequstProd				= () => ({ type: GET_PROD_REQUST/*, fetching: true*/}) ;
export const actionsSuccessProd				= (prod: Prod) => actionsAddProd(prod) ;

export const actionsGetRequstProd			= () =>{
	return (dispatch) => {
		dispatch({
			type: 'fdfdf'
		});
	};
};
	// dispatch(actionsRequstProd());
	// setTimeout(()=>{
	// 	dispatch(actionsSuccessProd({
	// 		id: Math.random(),
	// 		name: 'prod'+Math.random(),
	// 		price: Math.random()*1000
	// 	}));
	// },1000);

