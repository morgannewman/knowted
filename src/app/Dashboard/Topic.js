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
    isHidden: true,
    editing: false
  };

  editTopic = () => {
    this.setState({
      editing: !this.state.editing
    });
  };

  submitEdit(e) {
    e.preventDefault();
    let title = e.target.topicTitle.value;
    this.props.dispatch(updateTopic(title, this.props.topicId));
    this.toggleHidden();
  }

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
      <>
        <div
          className="topic-wrap"
          onMouseEnter={this.toggleHidden}
          onMouseLeave={this.toggleHidden}
        >
          {this.state.editing ? (
            <>
              <form
                className="edit-topic-form"
                onSubmit={e => this.submitEdit(e)}
              >
                <label>Topic Name</label>
                <input
                  type="text"
                  name="topicTitle"
                  defaultValue={this.props.title}
                />
              </form>
              {!this.state.isHidden && (
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
              {!this.state.isHidden && (
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
