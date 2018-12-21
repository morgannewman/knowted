import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { EditButton, DeleteButton } from '../styles/common.styles';

import { connect } from 'react-redux';
import {
  updateSingleResource,
  deleteResource
} from '../../controller/actions/topicDashboard';

//TODO: use Link so so the resource title links to it's corresponding
//TODO:remove console.logs

export class ResourceItem extends React.Component {
  constructor(props) {
    super(props);
    this.value = React.createRef();
    this.state = {
      editing: false,
      value: this.props.resource.title,
      uri: this.props.resource.uri
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
  handleEdit = () => {
    console.log('hello');
    this.setState(prevState => ({ editing: !prevState.editing }));
  };
  handleChecked = e => {
    const id = this.props.resource.id;
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
    const id = this.props.resource.id;
    this.props.dispatch(deleteResource(Number(id), this.props.parentId));
  };

  /**
   * Used by the ResourceData component
   *This function is responsible for communicating to state that
   *the ResourceEditForm component should
   be rendered instead of the normal view mode
   * @param {{e: object}} eventobject
   */

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
    if (!newTitle || newTitle.trim() === '') {
      this.setState({ editing: !this.state.editing });
      return;
    }
    const id = this.props.resource.id;
    this.props.dispatch(updateSingleResource(id, { id, title: newTitle }));
    this.setState({ editing: !this.state.editing });
  };

  render() {
    const { resource, parentId } = this.props;

    return (
      <div className="resource-view">
        <EditButton
          resourceid={resource.id}
          onClick={() => this.handleEdit()}
          className="resource-item-edit resource-item-controls"
        >
          edit
        </EditButton>
        <div className="elipsis">
          {' '}
          <span className="elipsis-dot" />
          <span className="elipsis-dot" />
          <span className="elipsis-dot" />
        </div>
        <button
          className={resource.completed ? 'checked-box' : 'checkbox'}
          id={resource.id}
          type="button"
          onClick={() => this.handleChecked()}
          checked={resource.completed}
        >
          &#10003;
        </button>
        <div className="resource-info">
          {this.state.editing ? (
            <form
              id={resource.id}
              onSubmit={e =>
                this.handleUpdate(
                  e,
                  this.state.value,
                  this.state.uri,
                  resource.title
                )
              }
            >
              <label htmlFor="title update" />
              <input
                autoFocus
                className="aside edit-input"
                type="text"
                name={resource.title}
                defaultValue={this.state.value}
                onChange={e => this.setState({ value: e.target.value })}
              />
            </form>
          ) : (
            <div className="name-of-resource">
              <Link to={`/dashboard/${parentId}/${resource.id}`}>
                {resource.title}
              </Link>
            </div>
          )}
          <div className="resc-uri">
            <Link to={`/dashboard/${parentId}/${resource.id}`}>
              {resource.type === 'youtube'
                ? `https://www.youtube.com/watch?v=${resource.uri}`
                : resource.uri}
            </Link>
          </div>
          <button
            id={resource.id}
            onClick={e =>
              this.handleUpdate(
                e,
                this.state.value,
                this.state.uri,
                resource.title
              )
            }
            type="submit"
            className={this.state.editing ? 'save-btn-show' : 'save-btn-hide'}
          >
            save
          </button>
        </div>
        <button
          type="button"
          resourceid={resource.id}
          onClick={() => this.handleDelete()}
          className="resource-item-delete resource-item-controls"
        >
          Delete
        </button>
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
