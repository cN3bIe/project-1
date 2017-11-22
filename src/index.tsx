import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducer';
import App from './App';


const enhancer = window['devToolsExtension'] ? window['devToolsExtension']()(createStore) : createStore;
const store = enhancer( reducers );

ReactDOM.render(
	<Provider store={store}>
		<App title="Heyy" />
	</Provider>,
	document.getElementById('app') as HTMLElement
);