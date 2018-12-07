import { combineReducers } from 'redux';
import auth from './auth';
import folder from './folder';

const rootReducer = combineReducers({ auth, folder });

export default rootReducer;
