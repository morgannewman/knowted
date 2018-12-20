import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authLogout } from '../../controller/actions/auth';
import { NavBar } from '../styles/common.styles';

export class Nav extends Component {
  static propTypes = {
    loggedIn: PropTypes.bool.isRequired
  };

  render() {
    const { dispatch } = this.props;
    return (
      <NavBar className="nav">
        <Link to="/" className="nav-logo">
          Knowted
        </Link>
        {this.props.loggedIn ? (
          <nav className="nav-loggedIn">
            <Link
              className="nav-link"
              to="#"
              onClick={() => dispatch(authLogout())}
            >
              Logout
            </Link>
          </nav>
        ) : (
          <nav className="nav-anon">
            <Link className="nav-link" to="/register">
              Sign up
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </nav>
        )}
      </NavBar>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn
});

export default connect(mapStateToProps)(Nav);
