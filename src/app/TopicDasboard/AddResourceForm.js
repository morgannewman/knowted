import React from 'react';
import { connect } from 'react-redux';
import {
  add_resources,
  set_feedback,
  reset_feedback
} from '../../controller/actions/resource';
export class AddResourceForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const title = this.inputTitle.value;
    const URI = this.inputUri.value;
    const parent = this.props.parentId;
    if (title === '' || !title) {
      return this.props.dispatch(set_feedback('Title cannot be empty'));
    }
    this.props.dispatch(add_resources(parent, title, URI));
  };
  render() {
    return (
      <section className="add-resource-section">
        <form
          id="add-resource"
          className="add-resource-form"
          onSubmit={this.handleSubmit}
        >
          <div>
            <input type="checkbox" checked={false} readOnly={true} />
            <label htmlFor="add-resource-link" />
            <input
              ref={input => (this.inputUri = input)}
              type="url"
              name="add-resource"
              placeholder="http://"
            />
          </div>
          <div>
            <label htmlFor="add-resource-title" />
            <input
              ref={input => (this.inputTitle = input)}
              type="text"
              name="add-resource"
              placeholder="title "
            />
          </div>
          <button>Add New Resource</button>
        </form>
        {this.props.feedback ? <div>{this.props.feedback}</div> : null}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    parentId: state.resourceReducer.topicId,
    feedback: state.resourceReducer.feedback
  };
};
export default connect(mapStateToProps)(AddResourceForm);
