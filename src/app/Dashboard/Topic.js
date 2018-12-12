import React from 'react';
import PropTypes from 'prop-types';
import './Topic.css';
import { connect } from 'react-redux';

import { deleteTopic, updateTopic } from '../../controller/actions/topic';

export class Topic extends React.Component {
  static propTypes = {
    topicId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  };

  state = {
    showOptions: false,
    editing: false
  };

  editTopic = () => {
    this.setState(state => {
      return {
        editing: !state.editing
      };
    });
  };

  submitEdit = e => {
    e.preventDefault();
    let title = this.titleInput.value;
    this.props.dispatch(updateTopic(title, this.props.topicId));
    this.editTopic();
  };

  deleteTopic = () => {
    this.props.dispatch(deleteTopic(this.props.topicId));
  };

  toggleHidden = () => {
    this.setState(state => {
      return { showOptions: !state.showOptions };
    });
  };

  render() {
    const { title, topicId } = this.props;

    return (
      <>
        <div
          className="topic-wrap"
          onMouseEnter={this.toggleHidden}
          onMouseLeave={this.toggleHidden}
        >
          {this.state.editing ? (
            <>
              <form className="edit-topic-form" onSubmit={this.submitEdit}>
                <label>Topic Name</label>
                <input
                  ref={input => (this.titleInput = input)}
                  type="text"
                  name="topicTitle"
                  defaultValue={this.props.title}
                />
              </form>
              {this.state.showOptions && (
                <div className="edit-delete-topic-options">
                  <button onClick={this.editTopic}>Cancel</button>
                  <button onClick={this.deleteTopic}>Delete</button>
                </div>
              )}
            </>
          ) : (
            <>
              <button
                className="topic-btn"
                onClick={() =>
                  console.log('click through to topic/:id', topicId)
                }
              >
                {title}
              </button>
              {this.state.showOptions && (
                <div className="edit-delete-topic-options">
                  <button onClick={this.editTopic}>Edit</button>
                  <button onClick={this.deleteTopic}>Delete</button>
                </div>
              )}
            </>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  topics: state.topicReducer
});

export default connect(mapStateToProps)(Topic);
