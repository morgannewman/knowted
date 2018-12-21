import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { submitAuthLogin } from '../../../controller/actions/auth';
import {
  Container,
  Form,
  Input,
  Label,
  Button
} from '../../styles/form.styles';

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
      this.props.dispatch(
        submitAuthLogin({ email: email.input, password: password.input })
      );
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
      <Container>
        <h1 className="form-title">login & learn</h1>
        <Form onSubmit={this.handleLoginSubmit} className="login">
          <Label htmlFor="email">Email</Label>
          <Input
            value={this.state.email.input}
            onChange={this.manageEmailInput}
            type="text"
            name="email"
          />
          <Label htmlFor="password">Password</Label>
          <Input
            value={this.state.password.input}
            onChange={this.managePasswordInput}
            type="password"
            name="password"
          />
          <Button className="login-button" type="submit" disabled={submitting}>
            LET'S GO
          </Button>
        </Form>
      </Container>
    );
  }
}

export default connect()(Login);
