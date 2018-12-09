import { combineReducers } from 'redux';
import auth from './auth';
<<<<<<< HEAD

import folderReducer from './folder';
import topicReducer from './topic';

=======
import folderReducer from './folder';
import topicReducer from './topic';

>>>>>>> connecting UI to get all topics and setting up folder actions
const rootReducer = combineReducers({ auth, folderReducer, topicReducer });

export default rootReducer;
