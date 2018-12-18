import React from 'react';
import PropTypes from 'prop-types';
import './Topic.css';
import { connect } from 'react-redux';

import { deleteTopic, updateTopic } from '../../controller/actions/dashboard';

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

  displayOptions = () => {
    this.setState(state => {
      return { showOptions: true };
    });
  };

  hideOptions = () => {
    this.setState(state => {
      return { showOptions: false };
    });
  };

  render() {
    const { title, topicId } = this.props;

    return (
      <div
        className="topic-wrap"
        onMouseEnter={this.displayOptions}
        onMouseLeave={this.hideOptions}
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
            <a className="topic-btn" href={`/dashboard/${topicId}`}>
              {title}
            </a>
            {this.state.showOptions && (
              <div className="edit-delete-topic-options">
                <button onClick={this.editTopic}>Edit</button>
                <button onClick={this.deleteTopic}>Delete</button>
              </div>
            )}
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  topics: state.dashboardReducer
});

export default connect(mapStateToProps)(Topic);
