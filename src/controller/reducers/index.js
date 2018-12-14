import { combineReducers } from 'redux';
import auth from './auth';

import folderReducer from './folder';
import topicReducer from './topic';
import resourceReducer from './resource';
import dashboardReducer from './dashboard';
import learn from './learn';

const rootReducer = combineReducers({
	auth,
	learn,
	dashboardReducer,
	folderReducer,
	topicReducer,
	resourceReducer
});

export default rootReducer;
