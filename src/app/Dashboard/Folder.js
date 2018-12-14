import React from 'react';
import JawBone from './JawBone';
import PropTypes from 'prop-types';
import './Folder.css';
import { connect } from 'react-redux';

import { updateFolder } from '../../controller/actions/dashboard';

export class Folder extends React.Component {
  static propTypes = {
    folderId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  };

  state = {
    showJawBone: false,
    showEdit: false,
    editing: false
  };

  toggleJawBone = () => {
    this.setState(state => {
      return { showJawBone: !state.showJawBone };
    });
  };

  toggleEdit = () => {
    this.setState(state => {
      return { showEdit: !state.showEdit };
    });
  };

  editFolder = () => {
    this.setState(state => {
      return { editing: !state.editing };
    });
  };

  submitEdit = e => {
    e.preventDefault();
    let title = this.titleInput.value;
    this.props.dispatch(updateFolder(title, this.props.folderId));
    this.editFolder();
  };

  render() {
    const { title, folderId } = this.props;

    return this.state.editing ? (
      <>
        <button onClick={this.editFolder}>Cancel</button>
        <form className="edit-folder-form" onSubmit={this.submitEdit}>
          <label>Folder Name</label>
          <input
            ref={input => (this.titleInput = input)}
            type="text"
            name="folderTitle"
            defaultValue={this.props.title}
          />
        </form>
      </>
    ) : (
      <>
        {this.state.showEdit && <button onClick={this.editFolder}>Edit</button>}
        <button className="folder-btn" onClick={this.toggleJawBone}>
          {title}
        </button>
        {this.state.showJawBone && <JawBone folderId={folderId} />}
      </>
    );
  }
}

const mapStateToProps = state => ({
  folders: state.dashboardReducer
});

export default connect(mapStateToProps)(Folder);
