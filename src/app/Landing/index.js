import './LandingForms.scss';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Hero from './Hero';
import Login from './Login';
import Register from './Register';

export default class Landing extends Component {
	static propTypes = {
		placeholder: PropTypes.any
	};

	render() {
		return (
			<>
				<Route exact path="/" component={Hero} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
			</>
		);
	}
}
