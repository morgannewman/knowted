import {
  RESOURCE_LOADING,
  RESOURCE_SUCCESS,
  SET_TOPICID,
  SET_FEEDBACK,
  RESET_FEEDBACK,
  ADD_RESOURCE,
  UPDATE_RESOURCES
} from '../actions/resource';
import produce from 'immer';

export const initialState = {
  resources: [],
  loading: false,
  error: null,
  topicId: null,
  feedback: null,
  testing: null
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
      state.loading = false;
      state.resources = action.resources;
      return;

    default:
      return;
  }
}, initialState);
