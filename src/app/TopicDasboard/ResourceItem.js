import React from 'react';
import PropTypes from 'prop-types';
import ResourceEditForm from './ResourceEditForm';
import ResourceData from './ResourceData';
// import { Link } from 'react-router-dom';

//TODO: use Link so so the resource title links to it's corresponding
//resource page
//TODO:remove console.logs
export class ResourceItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }

  static propTypes = {
    resource: PropTypes.object.isRequired
  };

  /**
   * Used by the ResourceData component
   *This function is passed in through a prop and eventually called by a lower level component
   *It was working with state, however the intention of this function is to communicate 
   to the back end whether a resource item is completed. Currently a resource is rendered with a checked or unchecked box
   depending whether the completed property is true or false
  *The intention of this function is to make a PUT request to resources endpoint
   */
  //FIXME: connect function to dispatch async action to backend
  handleChecked = () => {
    console.log('check works');
  };
  /**
   * Used by the ResourceData component
   *This function takes an event and extracts the id of the resource where the event occured(the resource that was clicked)
   *The intention of this function is to make a DELETE request to resources endpoint
   * This function is passed in through a prop and eventually called by a lower level component
   * @param {{e: object}} credentials
   */
  //FIXME: connect function to dispatch async action to backend
  handleDelete = e => {
    const id = e.target.getAttribute('resourceid');
    console.log(`Deletes resource with id: ${id}`);
  };

  /**
   * Used by the ResourceData component
   *This function takes an event and extracts the id of the resource where 
   the event occured(the resource that was clicked)
   *This function might not need the event and can be deleted if unnecessary
   *It is responsible for communicating to state that the ResourceEditForm component should
   be rendered instead of the normal view mode
   * @param {{e: object}} credentials
   */

  //FIXME: Delete event argument if unnecessary
  handleEdit = e => {
    const id = e.target.getAttribute('resourceid');
    console.log(`Edits resource with id: ${id}`);
    this.setState({ editing: !this.state.editing });
  };

  /**
   *Used by the ResourceEditForm component
   *This function takes an event and extracts the id of the resource where 
   the event occured(the resource that was clicked)
   *The second argument is the newTitle string that the user is updating to
   *It is responsible for communicating to state that the ResourceData component should
   be rendered instead of the form
   *The intention of this function is also responsible to make a PUT request to the resources endpoint
   * @param {{e: object, newTitle:string}} credentials
   */
  //FIXME: connect function to dispatch async action to backend
  handleUpdate = (e, newTitle) => {
    const id = e.target.getAttribute('resourceid');
    if (newTitle === undefined) {
      return;
    }
    console.log(`Updates resource with id: ${id} and name ${newTitle.trim()}`);
    this.setState({ editing: !this.state.editing });
  };

  render() {
    const { resource } = this.props;

    return (
      <div>
        {!this.state.editing ? (
          <ResourceData
            handleEdit={this.handleEdit}
            handleChecked={this.handleChecked}
            handleDelete={this.handleDelete}
            resource={resource}
          />
        ) : (
          <ResourceEditForm
            handleUpdate={this.handleUpdate}
            resource={resource}
          />
        )}
      </div>
    );
  }
}

export default ResourceItem;
