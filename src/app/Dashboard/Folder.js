import React from 'react';
import JawBone from './JawBone';
import PropTypes from 'prop-types';
export default class Folder extends React.Component {
  static propTypes = {
    folderId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  };

  state = {
    showJawBone: false,
    showEdit: false
  };

  toggleJawBone = () => {
    this.setState({
      showJawBone: !this.state.showJawBone
    });
  };

  toggleEdit = () => {
    this.setState({
      showEdit: !this.state.showEdit
    });
  };

  editFolder = () => {
    console.log('edit');
  };

  render() {
    const { title, folderId } = this.props;

    return (
      <div
        className="folder-wrap"
        onMouseEnter={this.toggleEdit}
        onMouseLeave={this.toggleEdit}
      >
        {this.state.showEdit && <button onClick={this.editFolder}>Edit</button>}
        <button className="folder-btn" onClick={this.toggleJawBone}>
          {title}
        </button>

        {this.state.showJawBone && <JawBone folderId={folderId} />}
      </div>
    );
  }
}
