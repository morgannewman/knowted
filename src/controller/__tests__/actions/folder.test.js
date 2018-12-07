// Constants
import {
  FOLDER_SUBMIT,
  FOLDER_SUCCESS,
  FOLDER_ERROR
} from '../../actions/folder';
// Creators
import { folderSubmit, folderSuccess, folderError } from '../../actions/folder';

const VALID_RESPONSE = {
  placeholder: []
};

const VALID_ERROR = {
  message: 'error message',
  status: 400
};

describe('Folder Actions', () => {
  // Constants
  describe('Constants', () => {
    it('FOLDER_SUBMIT', () => expect(FOLDER_SUBMIT).toEqual('FOLDER_SUBMIT'));
    it('FOLDER_SUCCESS', () =>
      expect(FOLDER_SUCCESS).toEqual('FOLDER_SUCCESS'));
    it('FOLDER_ERROR', () => expect(FOLDER_ERROR).toEqual('FOLDER_ERROR'));
  });

  // Creators
  describe('Action Creators', () => {
    it('Should dispatch FOLDER_SUBMIT', () => {
      const expectedAction = {
        type: FOLDER_SUBMIT
      };
      expect(folderSubmit()).toEqual(expectedAction);
    });
    it('Should dispatch FOLDER_SUCCESS with `user` payload', () => {
      const expectedAction = {
        type: FOLDER_SUCCESS,
        payload: { ...VALID_RESPONSE }
      };
      expect(folderSuccess(VALID_RESPONSE)).toEqual(expectedAction);
    });
    it('Should dispatch AUTH_ERROR with `err` payload', () => {
      const expectedAction = {
        type: FOLDER_ERROR,
        payload: { ...VALID_ERROR }
      };
      expect(folderError(VALID_ERROR)).toEqual(expectedAction);
    });
  });

  //TODO: Test DELETE_FOLDER action
});
