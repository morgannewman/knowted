<<<<<<< HEAD
import api from '../../controller/api';

=======
>>>>>>> combined some components to simplify and set up initial action and reducers for Folders
export const FOLDER_SUBMIT = 'FOLDER_SUBMIT';
export const FOLDER_SUCCESS = 'FOLDER_SUCCESS';
export const FOLDER_ERROR = 'FOLDER_ERROR';

export const FOLDER_DELETE = 'FOLDER_DELETE';

<<<<<<< HEAD
/**
 * Components can consume this function to get all Folders
 * On submit: state.folder.loading === true
 * On success: state.folder.folders === [of folders]
 * On fail: state.folder.error === some error object
 */
export const getFolders = () => dispatch => {
  dispatch(folderSubmit());
  api.folders
    .get()
    .then(folders => dispatch(folderSuccess(folders)))
    .catch(err => dispatch(folderError(err)));
};

=======
>>>>>>> combined some components to simplify and set up initial action and reducers for Folders
export const folderSubmit = () => ({
  type: FOLDER_SUBMIT
});

export const folderSuccess = folders => ({
  type: FOLDER_SUCCESS,
  payload: folders
});

export const folderError = err => ({
  type: FOLDER_ERROR,
  payload: err
});

export const folderDelete = folderId => {
  return {
    type: FOLDER_DELETE,
    payload: folderId
  };
};
