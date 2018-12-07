import React from 'react';
import './EditDeleteTopic.css';

export default class EditDeleteTopic extends React.Component {
  editTopic() {
    console.log(this.props);
  }

  deleteTopic() {
    console.log('delete it');
  }

  render() {
    return (
      <div className="edit-delete-topic-options">
        <button onClick={() => this.editTopic()}>Edit</button>
        <button onClick={() => this.deleteTopic()}>Delete</button>
      </div>
    );
  }
}
