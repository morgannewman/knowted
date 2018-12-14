import { combineReducers } from 'redux';
import auth from './auth';
import learn from './learn';
import dashboardReducer from './dashboard';
import topicDashReducer from './topicDashboard';

const rootReducer = combineReducers({
  auth,
  learn,
  dashboardReducer,
  topicDashReducer
});

export default rootReducer;
