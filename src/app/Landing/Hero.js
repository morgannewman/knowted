import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Loading from '../common/Loading';
import PropTypes from 'prop-types';

import { LandingContainer } from '../styles/landing.style';
import {Button} from '../styles/common.styles';

import foldersImg from '../images/landing-folders.png';
import jawboneImg from '../images/landing-jawbone.png';
import resourcesImg from '../images/landing-resources.png';
import videoImg from '../images/landing-video.png';
import topicsImg from '../images/landing-topics.png';
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
          <div className="hero-graphics">
            <h1 className="hero-title">Some awesome tagline about learning</h1>
            <p className="hero-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco 
            </p>
            <Button><Link to="/register">Start Learning!</Link></Button>
          </div>
        </main>
        <h2>Knowted makes it easy to be organized and focused on what you want to learn next</h2>
        <section>
          
          <div>
         
            <h3>Start by adding any topics you'd like to learn</h3>
            <img src={topicsImg} alt="example of creating your first topics" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div>
         
         <h3>Combine similar topics into folders</h3>
         <img src={jawboneImg} alt="topics in a folder" />
         <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
           enim ad minim veniam, quis nostrud exercitation ullamco laboris
           nisi ut aliquip ex ea commodo consequat.
         </p>
       </div>
          <div>
          <h3>Make as many folders as you'd like</h3>
          <img src={foldersImg} alt="folders" />
  
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
          </div>
          <div>
            <h3>Inside of your Topics you can add the resources you want to get back to</h3>
            <img src={resourcesImg} alt="resources" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div>
            <h3>Each resource you add in a topic has a shared notebook</h3>
            <img src={videoImg} alt="embedded video and note taking" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>
        <div className="last-pitch">
          <h2>So what are you waiting for sillllyyyy</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Button><Link to="/register">Sign Up, it's free!</Link></Button>
        </div>
        <footer>
          made w/ ❤ by <a href="https://github.com/jileon">Janet</a>,{' '}
          <a href="https://github.com/clkent">Chelsea</a>,{' '}
          <a href="https://github.com/morgannewman">Morgan</a>, &amp;{' '}
          <a href="https://github.com/continuouslylearning">Tim</a>
        </footer>
      </LandingContainer>
    );
  }
}
