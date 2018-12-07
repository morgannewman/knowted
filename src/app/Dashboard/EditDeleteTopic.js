import React from 'react';
import './EditDeleteTopic.css';

export default class EditDeleteTopic extends React.Component {
  editTopic(topicId) {
    console.log('edit:', topicId);
  }

  deleteTopic(topicId) {
    console.log('delete:', topicId);
  }

  render() {
    const { topicId } = this.props;
    return (
      <div className="edit-delete-topic-options">
        <button onClick={() => this.editTopic(topicId)}>Edit</button>
        <button onClick={() => this.deleteTopic(topicId)}>Delete</button>
      </div>
    );
  }
}
