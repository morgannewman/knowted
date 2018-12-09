import React from 'react';
import PropTypes from 'prop-types';
import './Topic.css';
import { connect } from 'react-redux';

import { deleteTopic } from '../../controller/actions/topic';

class Topic extends React.Component {
  static propTypes = {
    topicId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  };

  state = {
    isHidden: true
  };

  editTopic = () => {
    console.log('edit:', this.props.topicId);
  };

  deleteTopic = () => {
    this.props.dispatch(deleteTopic(this.props.topicId));
  };

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  render() {
    const { title, topicId } = this.props;

    return (
      <div
        className="topic-wrap"
        onMouseEnter={this.toggleHidden}
        onMouseLeave={this.toggleHidden}
      >
        <button
          className="topic-btn"
          onClick={() => console.log('click through to topic/:id', topicId)}
        >
          {title}
        </button>
        {!this.state.isHidden && (
          <div className="edit-delete-topic-options">
            <button onClick={this.editTopic}>Edit</button>
            <button onClick={this.deleteTopic}>Delete</button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  topics: state.topicReducer
});

export default connect(mapStateToProps)(Topic);
