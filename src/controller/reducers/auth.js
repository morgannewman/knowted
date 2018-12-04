import { AUTH_SUBMIT, AUTH_SUCCESS, AUTH_ERROR } from '../actions/auth';
import produce from 'immer';

export const initialState = {
	authToken: null,
	loggedIn: false,
	user: null,
	submitting: false,
	error: null
};

export default produce((state, action) => {
	switch (action.type) {
		case AUTH_SUBMIT:
			state.submitting = true;
			state.error = null;
			return;

		case AUTH_SUCCESS:
			// const { authToken } = action.payload;
			// delete action.payload.authToken;
			state.submitting = false;
			state.error = null;
			state.user = action.payload;
			state.loggedIn = true;
			// authToken
			return;

		case AUTH_ERROR:
			return { ...initialState, error: action.payload };

		default:
			return;
	}
}, initialState);
