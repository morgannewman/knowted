import { combineReducers } from 'redux';
import auth from './auth';

import folderReducer from './folder';
import topicReducer from './topic';

const rootReducer = combineReducers({ auth, folderReducer, topicReducer });

export default rootReducer;
