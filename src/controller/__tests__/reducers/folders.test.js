import {
  FOLDER_SUBMIT,
  FOLDER_SUCCESS,
  FOLDER_ERROR
} from '../../actions/folder';
import reducer, { initialState } from '../../reducers/folder';

describe('Auth Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  // `submitting` state
  it('updates folder.state.loading on FOLDER_SUBMIT', () => {
    expect(reducer(initialState, { type: FOLDER_SUBMIT })).toEqual({
      ...initialState,
      loading: true
    });
  });
  it('updates folder.state.loading on FOLDER_SUCCESS and FOLDER_ERROR', () => {
    expect(
      reducer(initialState, { type: FOLDER_SUCCESS, payload: 'something' })
        .loading
    ).toEqual(false);
    expect(
      reducer(initialState, { type: FOLDER_ERROR, payload: 'something' })
        .loading
    ).toEqual(false);
  });

  //TODO: test FOLDER_DELETE once hooked up
});
