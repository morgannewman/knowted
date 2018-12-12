import {
  RESOURCE_LOADING,
  RESOURCE_SUCCESS,
  ADD_RESOURCE,
  UPDATE_RESOURCE,
  DELETE_RESOURCE,
  RESOURCE_ERROR
} from '../actions/resource';
import produce from 'immer';

export const initialState = {
  resources: [],
  recentResources: [],
  loading: false,
  error: null
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
