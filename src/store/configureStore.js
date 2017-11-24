
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducer';

import prodJSON from'./prod.json';

const enhancer = window['devToolsExtension'] ? window['devToolsExtension']()(createStore) : createStore;
const store = enhancer(
	reducers,
	{
		card: [],
		prod: prodJSON,
		// fetching: false
	},
	applyMiddleware(thunk)
);
export default store;