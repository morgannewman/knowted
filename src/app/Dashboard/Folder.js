import React from 'react';
import JawBone from './JawBone';
import PropTypes from 'prop-types';
class Folder extends React.Component {
  static propTypes = {
    folderId: PropTypes.number,
    title: PropTypes.string
  };

  state = {};

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    const { title, folderId } = this.props;
    return (
      <>
        <button className="folder-btn" onClick={() => this.toggleHidden()}>
          {title}
        </button>
        {this.state.isHidden ? null : <JawBone folderId={folderId} />}
      </>
    );
  }
}

export default Folder;
