import {
  RESOURCE_LOADING,
  RESOURCE_SUCCESS,
  SET_TOPIC,
  ADD_RESOURCE,
  UPDATE_RESOURCE,
  DELETE_RESOURCE,
  RESOURCE_ERROR
} from '../actions/topicDashboard';

import produce from 'immer';

export const initialState = {
  resources: [],
  loading: false,
  error: null,
  topic: {}
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

    case RESOURCE_ERROR:
      state.loading = false;
      state.error = action.payload;

      return;
    case ADD_RESOURCE:
      state.resources.push(action.resource);
      state.loading = false;
      return;

    case SET_TOPIC:
      state.topic = action.payload;
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
