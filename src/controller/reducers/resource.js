import {
  RESOURCE_LOADING,
  RESOURCE_SUCCESS,
  SET_TOPICID,
  SET_FEEDBACK,
  RESET_FEEDBACK,
  ADD_RESOURCE,
  UPDATE_RESOURCES,
  DELETE_RESOURCE
} from '../actions/resource';
import produce from 'immer';

export const initialState = {
  resources: [],
  recentResources: [],
  loading: false,
  error: null,
  topicId: null,
  feedback: null,
  newURI: null
};

export default produce((state, action) => {
  switch (action.type) {
    case RESOURCE_LOADING:
      state.loading = true;
      state.error = null;
      state.feedback = null;
      return;
    case RESOURCE_SUCCESS:
      state.loading = false;
      state.error = null;
      state.resources = action.payload;
      state.feedback = null;
      return;

    case ADD_RESOURCE:
      state.resources.push(action.resource);
      state.loading = false;
      return;

    case SET_TOPICID:
      state.topicId = action.id;
      return;

    case SET_FEEDBACK:
      state.feedback = action.feedback;
      return;

    case RESET_FEEDBACK:
      state.feedback = null;
      return;

    case UPDATE_RESOURCES:
      state.resources.splice(action.id, 1);
      state.resources = action.resources;
      state.loading = false;
      return;

    case DELETE_RESOURCE:
      const index = state.resources.findIndex(item => item.id === action.id);
      if (index > -1) {
        state.resources.splice(index, 1);
      }
      return;

    default:
      return;
  }
}, initialState);
