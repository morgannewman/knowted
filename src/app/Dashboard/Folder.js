import React from 'react';
import JawBone from './JawBone';

class Folder extends React.Component {
  state = {};

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    return (
      <>
        <button className="folder-btn" onClick={() => this.toggleHidden()}>
          {this.props.title}
        </button>
        {this.state.isHidden ? null : <JawBone folderId={this.props.id} />}
      </>
    );
  }
}

export default Folder;
