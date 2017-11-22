import { combineReducers } from 'redux';

import prod from './prod';
import card from './card';

export default combineReducers({
	prod,
	card
});