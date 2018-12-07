import React from 'react';
import PropTypes from 'prop-types';
import resourcesData from '../../dummyDB/resourcesData';
// import { Link } from 'react-router-dom';

//TODO: use Link so so the resource title links to it's corresponding
//resource page

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

  handleChecked = id => {};

  handleDelete = id => {
    console.log(`Deletes resource with id: ${id}`);
  };

  handleEdit = id => {
    console.log(`Edits resource with id: ${id}`);
    this.setState({ editing: !this.state.editing });
  };

  handleUpdate = id => {
    console.log(`Edits resource with id: ${id}`);
    this.setState({ editing: !this.state.editing });
  };

  render() {
    const { resource } = this.props;

    return (
      <div>
        {!this.state.editing ? (
          <div>
            {' '}
            <input
              id={resource.id}
              type="checkbox"
              checked={resource.completed}
              onChange={e => {
                console.log(e.target);
              }}
            />
            <a href={resource.id}>{resource.title}</a>
            <br />
            <a href={resource.uri}>{resource.uri}</a>
            <div className="resource-item-controls">
              <button
                resourceid={resource.id}
                onClick={e =>
                  this.handleEdit(e.target.getAttribute('resourceid'))
                }
                className="resource-item-edit"
              >
                edit
              </button>

              <button
                resourceid={resource.id}
                onClick={e =>
                  this.handleDelete(e.target.getAttribute('resourceid'))
                }
                className="resource-item-delete"
              >
                delete
              </button>
            </div>
          </div>
        ) : (
          <div>
            <form className="resource-item" onSubmit={e => e.preventDefault()}>
              <input
                type="text"
                name={resource.title}
                ref={input => (this.input = input)}
                onChange={e => console.log(e.target.value)}
              />
              <button
                resourceid={resource.id}
                onClick={e =>
                  this.handleUpdate(e.target.getAttribute('resourceid'))
                }
                className="resource-item-edit"
              >
                update
              </button>
            </form>
            <a href={resource.uri}>{resource.uri}</a>
          </div>
        )}
      </div>
    );
  }
}

export default ResourceItem;
