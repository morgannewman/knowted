import React from 'react';
import './AddTopicForm.css';
export default class JawBone extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    console.log('create new topic with name:', e.target.folderName.value);
  }

  render() {
    return (
      <form className="add-topic-form" onSubmit={e => this.onSubmit(e)}>
        <label>Topic Name</label>
        <input type="text" name="folderName" />
      </form>
    );
  }
}
