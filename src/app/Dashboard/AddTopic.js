import React from 'react';
import './AddTopic.css';
import { addTopic } from '../../controller/actions/topic';
<<<<<<< HEAD
=======
import { connect } from 'react-redux';
>>>>>>> connecting UI to get all topics and setting up folder actions
class AddTopic extends React.Component {
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
    let title = e.target.folderName.value;
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
            <input type="text" name="folderName" />
          </form>
        )}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(AddTopic);
