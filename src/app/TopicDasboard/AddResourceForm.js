import React from 'react';

export class AddResourceForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log('form submits');
  };
  render() {
    return (
      <section className="add-resource-section">
        <form className="add-resource-form" onSubmit={this.handleSubmit}>
          <label htmlFor="add-resource-link">Add New Reource</label>
          <input type="text" name="add-resource" placeholer="htttp:// " />
          <label htmlFor="add-resource-title">Add New Reource</label>
          <input type="text" name="add-resource" placeholer="title " />
          <button>Add New Resource</button>
        </form>
      </section>
    );
  }
}

export default AddResourceForm;
