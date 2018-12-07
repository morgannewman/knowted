import React from 'react';

import AddTopicForm from './AddTopicForm';

class AddTopic extends React.Component {
  state = {
    isHidden: true
  };

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    return (
      <>
        <button onClick={() => this.toggleHidden()}>+ add topic</button>
        {this.state.isHidden ? null : (
          <AddTopicForm toggleHidden={this.toggleHidden} />
        )}
      </>
    );
  }
}

export default AddTopic;
