import React from 'react';
import PropTypes from 'prop-types';
import './Topic.css';
import { connect } from 'react-redux';

<<<<<<< HEAD
import { deleteTopic } from '../../controller/actions/topic';

export class Topic extends React.Component {
=======
export default class Topic extends React.Component {
>>>>>>> combined some components to simplify and set up initial action and reducers for Folders
  static propTypes = {
    topicId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  };

  state = {
    isHidden: true
  };

<<<<<<< HEAD
  editTopic = () => {
    console.log('edit:', this.props.topicId);
  };

  deleteTopic = () => {
    this.props.dispatch(deleteTopic(this.props.topicId));
  };

  toggleHidden = () => {
=======
  editTopic(topicId) {
    console.log('edit:', topicId);
  }

  deleteTopic(topicId) {
    console.log('delete:', topicId);
  }

  toggleHidden() {
>>>>>>> combined some components to simplify and set up initial action and reducers for Folders
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
<<<<<<< HEAD
        {!this.state.isHidden && (
          <div className="edit-delete-topic-options">
            <button onClick={this.editTopic}>Edit</button>
            <button onClick={this.deleteTopic}>Delete</button>
=======
        {this.state.isHidden ? null : (
          <div className="edit-delete-topic-options">
            <button onClick={() => this.editTopic(topicId)}>Edit</button>
            <button onClick={() => this.deleteTopic(topicId)}>Delete</button>
>>>>>>> combined some components to simplify and set up initial action and reducers for Folders
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
