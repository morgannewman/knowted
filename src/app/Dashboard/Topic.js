import React from 'react';
import PropTypes from 'prop-types';
import './Topic.css';

export default class Topic extends React.Component {
  static propTypes = {
    topicId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  };

  state = {
    isHidden: true
  };

  editTopic(topicId) {
    console.log('edit:', topicId);
  }

  deleteTopic(topicId) {
    console.log('delete:', topicId);
  }

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
        {this.state.isHidden ? null : (
          <div className="edit-delete-topic-options">
            <button onClick={() => this.editTopic(topicId)}>Edit</button>
            <button onClick={() => this.deleteTopic(topicId)}>Delete</button>
          </div>
        )}
      </div>
    );
  }
}
