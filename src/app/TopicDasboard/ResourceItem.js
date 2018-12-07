import React from 'react';
import PropTypes from 'prop-types';
import resourcesData from '../../dummyDB/resourcesData';
import ResourceEditForm from './ResourceEditForm';
import ResourceData from './ResourceData';
// import { Link } from 'react-router-dom';

//TODO: use Link so so the resource title links to it's corresponding
//resource page

export class ResourceItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      checked: false
    };
  }

  static propTypes = {
    resource: PropTypes.object.isRequired
  };

  handleChecked = () => {
    console.log('check works');
    this.setState({ checked: !this.state.checked });
  };

  handleDelete = e => {
    const id = e.target.getAttribute('resourceid');
    console.log(`Deletes resource with id: ${id}`);
  };

  handleEdit = e => {
    const id = e.target.getAttribute('resourceid');
    console.log(`Edits resource with id: ${id}`);
    this.setState({ editing: !this.state.editing });
  };

  handleUpdate = (e, newTitle) => {
    const id = e.target.getAttribute('resourceid');
    if (newTitle === undefined) {
      return;
    }
    console.log(`Updates resource with id: ${id} and name ${newTitle}`);
    this.setState({ editing: !this.state.editing });
  };

  render() {
    const { resource } = this.props;

    return (
      <div>
        <ResourceEditForm
          handleUpdate={this.handleUpdate}
          resource={resource}
        />
        <br />
        <ResourceData
          handleEdit={this.handleEdit}
          handleChecked={this.handleChecked}
          handleDelete={this.handleDelete}
          resource={resource}
        />

        {/* {!this.state.editing ? (
          <ResourceData
            handleChecked={this.handleChecked()}
            handleEdit={this.handleEdit()}
            resource={resource}
          />
        ) : (
          <ResourceEditForm resource={resource} />
        )} */}
      </div>
    );
  }
}

export default ResourceItem;
