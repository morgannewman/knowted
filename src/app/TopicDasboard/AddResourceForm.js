import React from 'react';

export class AddResourceForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log('Title', this.inputTitle.value);
    console.log('URI', this.inputUri.value);
  };
  render() {
    return (
      <section className="add-resource-section">
        <form className="add-resource-form" onSubmit={this.handleSubmit}>
          <label htmlFor="add-resource-link">Add New Reource</label>
          <input
            ref={input => (this.inputUri = input)}
            type="text"
            name="add-resource"
            placeholder="http://"
          />
          <label htmlFor="add-resource-title">Add New Reource</label>
          <input
            ref={input => (this.inputTitle = input)}
            type="text"
            name="add-resource"
            placeholder="title "
          />
          <button>Add New Resource</button>
        </form>
      </section>
    );
  }
}

export default AddResourceForm;
