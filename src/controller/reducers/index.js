import { combineReducers } from 'redux';
import auth from './auth';
import folderReducer from './folder';
import topicReducer from './topic';
import resourceReducer from './resource';
const rootReducer = combineReducers({
  auth,
  folderReducer,
  topicReducer,
  resourceReducer
});

export default rootReducer;
