import React from 'react';
import { connect } from 'react-redux';
import {
  add_resources,
  set_feedback,
  get_title
  // reset_feedback
} from '../../controller/actions/resource';
export class AddResourceForm extends React.Component {
  constructor(props) {
    super(props);
    this.Form = React.createRef();
  }

  getUri = (e, uri) => {
    e.preventDefault();
    this.props.dispatch(get_title('https://www.youtube.com/'));
  };
  handleSubmit = e => {
    e.preventDefault();
    const title = this.inputTitle.value;
    const URI = this.inputUri.value;
    const parent = this.props.parentId;
    if (title === '' || !title) {
      return this.props.dispatch(set_feedback('Title cannot be empty'));
    }
    this.props.dispatch(add_resources(parent, title, URI));
    this.inputUri.value = '';
    this.inputTitle.value = '';
  };
  handleScrollClick = () => {
    console.log(this.Form);
    const element = this.Form.current;
    element.scrollIntoView();
  };
  render() {
    return (
      <section className="add-resource-section">
        <button
          className="add-resource-button"
          type="button"
          onClick={this.handleScrollClick}
        >
          Add Resource
        </button>
        <form
          id="add-resource"
          className="add-resource-form"
          onSubmit={this.getUri}
          ref={this.Form}
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
          <button>Submit</button>
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
