import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { submitAuthRegistration } from '../../../controller/actions/auth';

export class Register extends Component {
	state = {
		firstName: {
			dirty: false,
			input: '',
			valid: false
		},
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

	handleRegisterSubmit = e => {
		e.preventDefault();
		const { password, email, firstName } = this.state;
		if (password.valid && email.valid && firstName.valid) {
			this.props.dispatch(
				submitAuthRegistration({ name: firstName.input, email: email.input, password: password.input })
			);
		}
	};

	manageNameInput = e => {
		// TODO: Add form validation
		// 2-16 characters
		// letters, numbers, -, and _ are valid
		const input = e.currentTarget.value;
		this.setState({
			firstName: {
				dirty: true,
				input: input,
				valid: true
			}
		});
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
			<main className="register-container">
				<h1>Sign Up</h1>
				<form onSubmit={this.handleRegisterSubmit} className="register">
					<label forHtml="first-name">First Name</label>
					<input
						value={this.state.firstName.input}
						onChange={this.manageNameInput}
						type="text"
						name="first-name"
					/>
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
						Register
					</button>
				</form>
			</main>
		);
	}
}

const mapStateToProps = state => ({
	submitting: state.auth.submitting
});

export default connect(mapStateToProps)(Register);
