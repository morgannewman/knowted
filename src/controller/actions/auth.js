import api from '../../controller/api';

export const AUTH_SUBMIT = 'AUTH_SUBMIT';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';

/**
 * Components can consume this function to dispatch authentication via email/password.
 * On submit: state.auth.submitting === true
 * On success: state.auth.loggedIn === true
 * On fail: state.auth.error === some error object
 * @param {{email: string, password: string}} credentials
 */
export const submitAuthLogin = credentials => dispatch => {
	dispatch(authSubmit());
	api.auth
		.login(credentials)
		.then(user => authSuccess(user))
		.catch(err => authError(err));
};

/**
 * Components can consume this function to register AND login via name/email/password.
 * On submit: state.auth.submitting === true
 * On success: state.auth.loggedIn === true
 * On fail: state.auth.error === some error object
 * @param {{email: string, password: string}} credentials
 */
export const submitAuthRegistration = credentials => dispatch => {
	dispatch(authSubmit());
	api.auth
		.register(credentials)
		.then(api.auth.login(credentials))
		.then(user => authSuccess(user))
		.catch(err => authError(err));
};

export const authSubmit = () => ({
	type: AUTH_SUBMIT
});

export const authSuccess = user => ({
	type: AUTH_SUCCESS,
	payload: user
});

export const authError = err => ({
	type: AUTH_ERROR,
	payload: err
});
