import './Hero.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Hero extends Component {
	static propTypes = {
		submitting: PropTypes.bool.isRequired
	};

	render() {
		// const { submitting } = this.props;

		// if (submitting) return <div></div>;

		return (
			<main className="hero">
				<h1 className="hero-title">Headline marketing copy</h1>
				<p className="hero-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<Link to="/register">Sign Up</Link>
			</main>
		);
	}
}
