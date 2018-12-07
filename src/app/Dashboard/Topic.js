import React from 'react';
import PropTypes from 'prop-types';
import './Topic.css';

<<<<<<< HEAD
=======
import EditDeleteTopic from './EditDeleteTopic';

>>>>>>> added in component logic for Add Topic form as well as some temporary styling:
export default class Topic extends React.Component {
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
    console.log('delete:', this.props.topicId);
  };

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };
=======

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }
>>>>>>> added in component logic for Add Topic form as well as some temporary styling:

  render() {
    const { title, topicId } = this.props;

    return (
      <div
        className="topic-wrap"
<<<<<<< HEAD
        onMouseEnter={this.toggleHidden}
        onMouseLeave={this.toggleHidden}
=======
        onMouseEnter={() => this.toggleHidden()}
        onMouseLeave={() => this.toggleHidden()}
>>>>>>> added in component logic for Add Topic form as well as some temporary styling:
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
          </div>
        )}
=======
        {this.state.isHidden ? null : <EditDeleteTopic />}
>>>>>>> added in component logic for Add Topic form as well as some temporary styling:
      </div>
    );
  }
}
