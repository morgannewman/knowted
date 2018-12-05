import './Nav.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class Nav extends Component {
	render() {
		return (
			<header className="nav">
				<Link to="/" className="nav-logo">
					Logo
				</Link>
				<nav>
					<Link className="nav-link" to="/potato">
						Sign up
					</Link>
					<Link className="nav-link" to="/">
						Login
					</Link>
				</nav>
			</header>
		);
	}
}

export default connect()(Nav);
