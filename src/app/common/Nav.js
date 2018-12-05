import './Nav.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Nav extends Component {
	render() {
		return (
			<header className="nav">
				<div className="nav-logo" />
				<nav>
					<a className="nav-link" href="#">
						Sign up
					</a>
					<a className="nav-link" href="#">
						Sign in
					</a>
				</nav>
			</header>
		);
	}
}

export default connect()(Nav);
