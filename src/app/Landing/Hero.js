import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Loading from '../common/Loading';
import PropTypes from 'prop-types';

import { LandingContainer } from '../styles/landing.style';
export default class Hero extends Component {
  static propTypes = {
    submitting: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired
  };

  render() {
    const { submitting, loggedIn } = this.props;

    if (submitting) return <Loading />;

    if (loggedIn) return <Redirect to="/dashboard" />;

    return (
      <LandingContainer>
        <main className="hero">
          <h1 className="hero-title">Some awesome tagline</h1>
          <p className="hero-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link to="/register">Sign Up, it's free!</Link>
        </main>
        <section>
          <h2>Tagline #2 that really sells it all and what not</h2>
          <div>
            <h3>A good point</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div>
            <h3>Another good point</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div>
            <h3>The last good point</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>
        <section>
          <h2>A Final solid tagline</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link to="/register">Sign Up</Link>
        </section>
      </LandingContainer>
    );
  }
}
