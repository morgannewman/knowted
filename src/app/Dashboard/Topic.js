import React from 'react';
import PropTypes from 'prop-types';
import './Topic.css';

import EditDeleteTopic from './EditDeleteTopic';

export default class Topic extends React.Component {
  static propTypes = {
    topicId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  };

  state = {
    isHidden: true
  };

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    const { title, topicId } = this.props;

    return (
      <div
        className="topic-wrap"
        onMouseEnter={() => this.toggleHidden()}
        onMouseLeave={() => this.toggleHidden()}
      >
        <button
          className="topic-btn"
          onClick={() => console.log('click through to topic/:id', topicId)}
        >
          {title}
        </button>
        {this.state.isHidden ? null : <EditDeleteTopic topicId={topicId} />}
      </div>
    );
  }
}
