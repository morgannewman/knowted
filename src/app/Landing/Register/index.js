import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { submitAuthRegistration } from '../../../controller/actions/auth';
import {
  Container,
  Form,
  Input,
  Label,
  Button
} from '../../styles/form.styles';

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
    submitting: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired
  };

  handleRegisterSubmit = e => {
    e.preventDefault();
    const { password, email, firstName } = this.state;
    if (password.valid && email.valid && firstName.valid) {
      this.props.dispatch(
        submitAuthRegistration({
          name: firstName.input,
          email: email.input,
          password: password.input
        })
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
    const { submitting, loggedIn } = this.props;
    const { firstName, email, password } = this.state;

    if (loggedIn) return <Redirect to="/dashboard" />;

    return (
      <Container>
        <h1 className="form-title">Sign up for a free account</h1>
        <Form onSubmit={this.handleRegisterSubmit} className="register">
          <Label htmlFor="first-name">What's your first name?</Label>
          <Input
            value={firstName.input}
            onChange={this.manageNameInput}
            type="text"
            name="first-name"
          />
          <Label htmlFor="email">How about your email?</Label>
          <Input
            value={email.input}
            onChange={this.manageEmailInput}
            type="text"
            name="email"
          />
          <Label htmlFor="password">
            Make up a password at least 8 characters long
          </Label>
          <Input
            value={password.input}
            onChange={this.managePasswordInput}
            type="password"
            name="password"
          />
          <Button type="submit" disabled={submitting}>
            LET'S GO
          </Button>
        </Form>
      </Container>
    );
  }
}

export default connect()(Register);
