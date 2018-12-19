import './AddTopic.css';

import React from 'react';
import { connect } from 'react-redux';
import { actions as notifActions } from 'redux-notifications';

import { addTopic } from '../../controller/actions/dashboard';
const { notifSend } = notifActions;

export class AddTopic extends React.Component {
  state = {
    isHidden: true
  };

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  onSubmit(e) {
    e.preventDefault();
    const { topics } = this.props;
    let title = this.titleInput.value;

    for (const topicId in topics) {
      if (topics[topicId].title === title) {
        this.props.dispatch(
          notifSend({
            message: 'A topic with that title already exists.',
            kind: 'danger',
            dismissAfter: 4000
          })
        );
        return;
      }
    }

    this.props.dispatch(addTopic(title));
    this.toggleHidden();
  }

  render() {
    return (
      <>
        <button onClick={this.toggleHidden}>+ add topic</button>
        {!this.state.isHidden && (
          <form className="add-topic-form" onSubmit={e => this.onSubmit(e)}>
            <label>Topic Name</label>
            <input
              ref={input => (this.titleInput = input)}
              type="text"
              name="folderTitle"
            />
          </form>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  topics: state.dashboardReducer.topics
});

export default connect(mapStateToProps)(AddTopic);
