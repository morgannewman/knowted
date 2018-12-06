import React from 'react';
import JawBone from './JawBone';

class Folder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    };
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    return (
      <React.Fragment>
        <button className="folder-btn" onClick={() => this.toggleHidden()}>
          {this.props.title}
        </button>
        {this.state.isHidden ? null : <JawBone folderId={this.props.id} />}
      </React.Fragment>
    );
  }
}

export default Folder;
