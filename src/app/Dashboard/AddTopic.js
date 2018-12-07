import React from 'react';
import './AddTopic.css';
export default class AddTopic extends React.Component {
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
    console.log('create new topic with name:', e.target.folderName.value);
    this.toggleHidden();
  }

  render() {
    return (
      <>
        <button onClick={() => this.toggleHidden()}>+ add topic</button>
        {this.state.isHidden ? null : (
          <form className="add-topic-form" onSubmit={e => this.onSubmit(e)}>
            <label>Topic Name</label>
            <input type="text" name="folderName" />
          </form>
        )}
      </>
    );
  }
}
