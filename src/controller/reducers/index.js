import { combineReducers } from 'redux';
import auth from './auth';
<<<<<<< HEAD
import folderReducer from './folder';
import topicReducer from './topic';

const rootReducer = combineReducers({ auth, folderReducer, topicReducer });
=======
import folder from './folder';

const rootReducer = combineReducers({ auth, folder });
>>>>>>> combined some components to simplify and set up initial action and reducers for Folders

export default rootReducer;
