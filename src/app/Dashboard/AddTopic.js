import React from 'react';

import AddTopicForm from './AddTopicForm';

class AddTopic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    };
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.toggleHidden()}>+ add topic</button>
        {this.state.isHidden ? null : <AddTopicForm />}
      </React.Fragment>
    );
  }
}

export default AddTopic;
