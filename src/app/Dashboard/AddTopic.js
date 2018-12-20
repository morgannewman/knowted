import React from 'react';
import './AddTopic.css';
import { addTopic } from '../../controller/actions/dashboard';
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
    let title = this.titleInput.value;
    this.props.dispatch(addTopic(title));
    this.toggleHidden();
  }

  render() {
    return (
      <>
        {this.state.isHidden ? (
          <button className="add-topic-btn" onClick={this.toggleHidden}>
            <span>+</span> add a topic
          </button>
        ) : (
          <button className="add-topic-btn" onClick={this.toggleHidden}>
            <span> x </span> close
          </button>
        )}

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
