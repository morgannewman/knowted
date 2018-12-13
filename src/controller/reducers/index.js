import { combineReducers } from 'redux';
import auth from './auth';

import folderReducer from './folder';
import topicReducer from './topic';
import topicDashReducer from './topicDashboard';
const rootReducer = combineReducers({
  auth,
  folderReducer,
  topicReducer,
  topicDashReducer
});

export default rootReducer;
