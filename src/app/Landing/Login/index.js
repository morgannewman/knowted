import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { submitAuthLogin } from '../../../controller/actions/auth';

export class Login extends Component {
	state = {
		email: {
			dirty: false,
			input: '',
			valid: false
		},
		password: {
			dirty: false,
			input: '',
			valid: false
		}
	};

	static propTypes = {
		submitting: PropTypes.bool.isRequired,
		loggedIn: PropTypes.bool.isRequired
	};

	handleLoginSubmit = e => {
		e.preventDefault();
		const { password, email } = this.state;
		if (password.valid && email.valid) {
			this.props.dispatch(submitAuthLogin({ email: email.input, password: password.input }));
		}
	};

	manageEmailInput = e => {
		// TODO: Add form validation
		const input = e.currentTarget.value;
		this.setState({
			email: {
				dirty: true,
				input: input,
				valid: true
			}
		});
	};

	managePasswordInput = e => {
		// TODO: Add form validation
		const input = e.currentTarget.value;
		this.setState({
			password: {
				dirty: true,
				input: input,
				valid: true
			}
		});
	};

	render() {
		const { submitting, loggedIn } = this.props;

		if (loggedIn) return <Redirect to="/dashboard" />;

		return (
			<main className="login-container">
				<h1 className="login-title">Login</h1>
				<form onSubmit={this.handleLoginSubmit} className="login">
					<label htmlFor="email">Email</label>
					<input value={this.state.email.input} onChange={this.manageEmailInput} type="text" name="email" />
					<label htmlFor="password">Password</label>
					<input
						value={this.state.password.input}
						onChange={this.managePasswordInput}
						type="password"
						name="password"
					/>
					<button className="login-button" type="submit" disabled={submitting}>
						Submit
					</button>
				</form>
			</main>
		);
	}
}

const mapStateToProps = state => ({
	submitting: state.auth.submitting,
	loggedIn: state.auth.loggedIn
});

export default connect(mapStateToProps)(Login);
