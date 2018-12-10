import React from 'react';

export class AddResourceForm extends React.Component {
  constructor(props) {
    super(props);
    this.Form = React.createRef();
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log('Title', this.inputTitle.value);
    console.log('URI', this.inputUri.value);
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
              type="text"
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
      </section>
    );
  }
}

export default AddResourceForm;
