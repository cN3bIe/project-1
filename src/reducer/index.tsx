import { combineReducers } from 'redux';

import prod from './prod';
import user from './user';
import order from './order';

export default combineReducers({prod, user, order});