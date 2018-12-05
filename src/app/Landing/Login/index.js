import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { submitAuthLogin } from '../../../controller/actions/auth';

class Login extends Component {
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
		submitting: PropTypes.bool.isRequired
	};

	handleLoginSubmit = e => {
		e.preventDefault();
		const { password, email } = this.state;
		if (password.valid && email.valid) {
			// this.props
			// 	.dispatch(
			// 	submitAuthLogin({ email: email.input, password: password.input }));
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
		return (
			<main className="login-container">
				<h1>Sign Up</h1>
				<form onSubmit={this.handleLoginSubmit} className="login">
					<label forHtml="email">Email</label>
					<input value={this.state.email.input} onChange={this.manageEmailInput} type="text" name="email" />
					<label forHtml="password">Password</label>
					<input
						value={this.state.password.input}
						onChange={this.managePasswordInput}
						type="password"
						name="password"
					/>
					<button type="submit" disabled={this.props.submitting}>
						Submit
					</button>
				</form>
			</main>
		);
	}
}

const mapStateToProps = state => ({
	submitting: state.auth.submitting
});

export default connect(mapStateToProps)(Login);
