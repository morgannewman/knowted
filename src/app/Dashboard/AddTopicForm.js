import React from 'react';

class JawBone extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    console.log(e.target.folderName.value);
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <label>Topic Name</label>
        <input type="text" name="folderName" />
      </form>
    );
  }
}

export default JawBone;
