import {
  RESOURCE_LOADING,
  RESOURCE_SUCCESS,
  SET_TOPICID,
  ADD_RESOURCE,
  UPDATE_RESOURCE,
  DELETE_RESOURCE,
  LOADING_TITLE,
  SET_TITLE
} from '../actions/resource';
import produce from 'immer';

export const initialState = {
  resources: [],
  recentResources: [],
  loading: false,
  error: null,
  topicId: null,
  feedback: null,
  newTitle: '',
  submitting: false,
  titleInputHidden: true
};

export default produce((state, action) => {
  switch (action.type) {
    case RESOURCE_LOADING:
      state.loading = true;
      state.error = null;

      return;
    case RESOURCE_SUCCESS:
      state.loading = false;
      state.error = null;
      state.resources = action.payload;

      return;

    case ADD_RESOURCE:
      state.resources.push(action.resource);
      state.loading = false;
      return;

    case SET_TOPICID:
      state.topicId = action.id;
      return;

    case LOADING_TITLE:
      state.submitting = true;
      return;

    case SET_TITLE:
      state.newTitle = action.title;
      state.submitting = false;
      state.titleInputHidden = false;
      return;

    case UPDATE_RESOURCE:
      const updateIndex = state.resources.findIndex(
        item => item.id === action.id
      );

      if (updateIndex > -1) {
        state.resources[updateIndex] = action.resource;
      }

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
