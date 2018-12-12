import {
  FOLDER_SUBMIT,
  FOLDER_SUCCESS,
  UPDATE_FOLDER_SUCCESS,
  FOLDER_ERROR,
  FOLDER_DELETE
} from '../actions/folder';
import produce from 'immer';

export const initialState = {
  folders: [],
  loading: false,
  error: null,
  folderId: null
};

export default produce((state, action) => {
  switch (action.type) {
    case FOLDER_SUBMIT:
      state.loading = true;
      state.error = null;
      return;

    case FOLDER_SUCCESS:
      state.loading = false;
      state.error = null;
      state.folders = action.payload;
      return;

    case UPDATE_FOLDER_SUCCESS:
      state.loading = false;
      state.error = null;
      const index = state.folders.findIndex(
        item => item.id === action.payload.id
      );
      if (index > -1) {
        state.folders[index].title = action.payload.title;
      }
      return;

    case FOLDER_ERROR:
      return { ...initialState, error: action.payload };

    case FOLDER_DELETE:
      return { ...initialState };

    default:
      return;
  }
}, initialState);
