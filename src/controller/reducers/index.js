import { combineReducers } from 'redux';
import auth from './auth';

import folderReducer from './folder';
import topicReducer from './topic';
import resourceReducer from './resource';
import dashboardReducer from './dashboard';
const rootReducer = combineReducers({
  auth,
  dashboardReducer,
  folderReducer,
  topicReducer,
  resourceReducer
});

export default rootReducer;
