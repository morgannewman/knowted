export const FOLDER_SUBMIT = 'FOLDER_SUBMIT';
export const FOLDER_SUCCESS = 'FOLDER_SUCCESS';
export const FOLDER_ERROR = 'FOLDER_ERROR';

export const FOLDER_DELETE = 'FOLDER_DELETE';

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
