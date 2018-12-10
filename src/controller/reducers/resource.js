import { RESOURCE_LOADING } from '../actions/resource';
import produce from 'immer';

export const initialState = {
  resources: [],
  loading: false,
  error: null,
  folderId: null
};

export default resource((state, action) => {
  switch (action.type) {
    case RESOURCE_LOADING:
      state.loading = true;
      state.error = null;
      return;
    // case RESOURCE_SUCCESS:
    //   state.loading = false;
    //   state.error = null;
    //   state.resources = action.payload;
    //   return;

    default:
      return;
  }
}, initialState);
