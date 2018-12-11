import React from 'react';
import './AddTopic.css';
import { addTopic } from '../../controller/actions/topic';
import { connect } from 'react-redux';

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
    let title = e.target.folderTitle.value;
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
            <input type="text" name="folderTitle" />
          </form>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  topics: state.topicReducer.topics
});

export default connect(mapStateToProps)(AddTopic);
