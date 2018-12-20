import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../styles/common.styles';

export default class Breadcrumbs extends Component {
  static propTypes = {
    topicTitle: PropTypes.string,
    topicId: PropTypes.number,
    resourceTitle: PropTypes.string,
    resourceId: PropTypes.number
  };

  render() {
    const { topicId, topicTitle, resourceId, resourceTitle } = this.props;

    return (
      <Breadcrumb>
        <Link to="/dashboard">Dashboard</Link>
        {topicId && (
          <>
            <span>{'>'}</span>
            <Link to={`/dashboard/${topicId}`}>{topicTitle}</Link>
          </>
        )}
        {resourceId && (
          <>
            <span>{'>'}</span>
            <Link to={`/dashboard/${topicId}/${resourceId}`}>
              {resourceTitle}
            </Link>
          </>
        )}
      </Breadcrumb>
    );
  }
}
