import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card as CardLink } from '../styles/learn.styles';
// import { FaExternalLinkAlt as LinkIcon } from 'react-icons/fa';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired
  };

  render() {
    const { title, uri } = this.props;

    return (
      <CardLink href={uri} className="card">
        <h2>{title}</h2>
        <span>{uri}</span>
      </CardLink>
    );
  }
}

const mapStateToProps = state => ({
  title: state.learn.resource.title,
  uri: state.learn.resource.uri
});

export default connect(mapStateToProps)(Card);
