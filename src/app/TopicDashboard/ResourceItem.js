import React from 'react';
import PropTypes from 'prop-types';
import ResourceEditForm from './ResourceEditForm';
import ResourceView from './ResourceView';
import { connect } from 'react-redux';
import {
  updateSingleResource,
  deleteResource
} from '../../controller/actions/topicDashboard';
import './ResourceItem.scss';

//TODO: use Link so so the resource title links to it's corresponding
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
   *This function is passed in through a prop and eventually called 
   by a lower level component
   *It was working with state, however the intention of this function 
   is to communicate to the back end whether a resource item is completed. Currently a resource 
   is rendered with a checked or unchecked box depending whether the completed property is true or false
  *The intention of this function is to make a PUT request to resources endpoint
  *@param {{e: object}} eventobject
   */

  handleChecked = e => {
    const id = Number(e.target.id);
    this.props.dispatch(
      updateSingleResource(id, {
        id,
        completed: !this.props.resource.completed
      })
    );
  };
  /**
   * Used by the ResourceData component
   *This function takes an event and extracts the id of the resource where the event 
   occured(the resource that was clicked)
   *The intention of this function is to make a DELETE request to resources endpoint
   * This function is passed in through a prop and eventually called by a lower level component
   * @param {{e: object}} eventobject
   */
  //FIXME: connect function to dispatch async action to backend
  handleDelete = e => {
    const id = e.target.getAttribute('resourceid');
    this.props.dispatch(deleteResource(Number(id), this.props.parentId));
  };

  /**
   * Used by the ResourceData component
   *This function is responsible for communicating to state that
   *the ResourceEditForm component should
   be rendered instead of the normal view mode
   * @param {{e: object}} eventobject
   */
  handleEdit = () => {
    this.setState(prevState => ({ editing: !prevState.editing }));
  };

  /**
   * Used by the ResourceEditFrom component
   *Toggles between form and view mode
   * passed down through props
   * Takes in the event object from child and handles form submission
   * If the newTitle is blank, set state back to view and keep the old title
   * * @param {{e: object, title:string, uri:String, oldTitle:string}}
   */
  handleUpdate = (e, newTitle, uri, oldTitle) => {
    e.preventDefault();
    if (oldTitle === newTitle) {
      this.setState({ editing: !this.state.editing });
    }
    const id = Number(e.target.id);
    if (!newTitle || newTitle.trim() === '') {
      this.setState({ editing: !this.state.editing });
      return;
    }
    this.props.dispatch(updateSingleResource(id, { id, title: newTitle }));
    this.setState({ editing: !this.state.editing });
  };

  render() {
    const { resource, parentId } = this.props;
    return (
      <div>
        {!this.state.editing ? (
          <ResourceView
            handleEdit={this.handleEdit}
            handleChecked={this.handleChecked}
            handleDelete={this.handleDelete}
            resource={resource}
            topicID={parentId}
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

const mapStateToProps = state => {
  return {
    parentId: state.topicDashReducer.topic.id
  };
};
export default connect(mapStateToProps)(ResourceItem);
