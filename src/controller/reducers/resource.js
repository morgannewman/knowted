import {
  RESOURCE_LOADING,
  RESOURCE_SUCCESS,
  SET_TOPICID
} from '../actions/resource';
import produce from 'immer';

export const initialState = {
  resources: [],
  loading: false,
  error: null,
  topicId: null
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

    case SET_TOPICID:
      state.topicId = action.id;
      return;

    default:
      return;
  }
}, initialState);
