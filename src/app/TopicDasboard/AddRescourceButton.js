import React from 'react';

export class AddResourceButton extends React.Component {
  handleClick = () => {
    console.log('add button works');
    const element = document.getElementById('add-resource');
    element.scrollIntoView();
  };

  render() {
    return (
      <section>
        <button type="button" onClick={this.handleClick}>
          Add Resource
        </button>
      </section>
    );
  }
}

export default AddResourceButton;
