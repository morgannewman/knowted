import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Landing extends Component {
	render() {
		return <div className="Landing">Hello, world!</div>;
	}
}

Landing.propTypes = {
	placeholder: PropTypes.any
};
