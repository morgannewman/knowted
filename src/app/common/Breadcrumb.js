import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class BreadCrumb extends Component {
	static propTypes = {
    topicTitle: PropTypes.string,
    topicId: PropTypes.number,
    resourceTitle: PropTypes.string,
    resourceId: PropTypes.number
	};

	render() {    
    const { topicId, topicTitle, resourceId, resourceTitle } = this.props;

    return (
      <nav>
        <Link to='/dashboard'>Dashboard</Link>
        <span> > <Link to={`/dashboard/${topicId}`}>{topicTitle}</Link></span>
        {resourceId && <span> > <Link to={`/dashboard/${topicId}/${resourceId}`}>{resourceTitle}</Link></span>}
      </nav>    
      );
  }
}
