import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { submitAuthRegistration } from '../../../controller/actions/auth';

class Demo extends React.Component {
  render() {
    const { loggedIn, dispatch } = this.props;
    if (loggedIn) return <Redirect to="/dashboard" />;
    dispatch(
      submitAuthRegistration(
        {
          name: 'Demo User',
          email: `${Date.now()}@email.com`,
          password: 'password'
        },
        { demo: true }
      )
    );
    return <Redirect to="/dashboard" />;
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn
});

export default connect(mapStateToProps)(Demo);
