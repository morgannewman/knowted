import api from '../../controller/api';

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
    this.state = {
      submitting: false,
      feedback: null,
      newURI: '',
      newTitle: '',
      inputHidden: true
    };
  }

  getUriTitle = (e, uri) => {
    e.preventDefault();
    console.log(uri);
    this.setState({ submitting: true });
    api.metadata
      .get(uri)
      .then(data => {
        console.log(data);
        this.setState({
          newTitle: data.title,
          newURI: data.uri,
          inputHidden: false,
          submitting: false
        });
      })
      .catch(err => console.log(err));
  };

  handleSubmit = e => {
    e.preventDefault();
    const title = this.inputTitle.value;
    const URI = this.inputUri.value;
    const parent = this.props.parentId;
    if (title === '' || !title) {
      return this.setState({ feedback: 'Title cannot be empty' });
    }
    const Type = this.state.newURI.toLowerCase().includes('youtube')
      ? 'youtube'
      : 'other';
    this.props.dispatch(add_resources(parent, title, URI, Type));
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
          onSubmit={this.handleSubmit}
          ref={this.Form}
        >
          <div>
            <input type="checkbox" checked={false} readOnly={true} />
            <label htmlFor="add-resource-link" />
            <input
              ref={input => (this.inputUri = input)}
              type="url"
              name="add-resource"
              disabled={this.state.submitting}
              placeholder="http://"
              onKeyUp={e => {
                if (e.keyCode === 13) {
                  this.getUriTitle(e, e.target.value);
                }
              }}
            />
          </div>
          <div>
            <label htmlFor="add-resource-title" />
            <input
              hidden={this.state.inputHidden}
              ref={input => (this.inputTitle = input)}
              type="text"
              name="add-resource"
              defaultValue={this.state.newTitle}
            />
          </div>
          <button hidden={this.state.inputHidden}>Submit</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    parentId: state.resourceReducer.topicId,
    feedback: state.resourceReducer.feedback,
    submitting: state.resourceReducer.submitting,
    inputHidden: state.resourceReducer.titleInputHidden,
    newTitle: state.resourceReducer.newTitle
  };
};
export default connect(mapStateToProps)(AddResourceForm);
