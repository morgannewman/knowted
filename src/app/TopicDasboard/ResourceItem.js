import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

//TODO: use Link so so the resource title links to it's corresponding
//resource page

export class ResourceItem extends React.Component {
  static propTypes = {
    resource: PropTypes.object.isRequired
  };

  handleChecked = id => {};

  handleDelete = id => {
    console.log(`Deletes resource with id: ${id}`);
  };

  handleEdit = id => {
    console.log(`Edits resource with id: ${id}`);
  };

  render() {
    const { resource } = this.props;
    return (
      <div>
        <form className="resource-item">
          <input
            id={resource.id}
            type="checkbox"
            onClick={e => console.log(e.target)}
          />
          <label htmlFor="box1">{resource.name}</label>
          <label htmlFor={resource.title} />
          <input
            type="text"
            name={resource.title}
            disabled={true}
            value={resource.title}
          />
        </form>

        <div className="resource-item-controls">
          <button
            resourceid={resource.id}
            onClick={e => this.handleEdit(e.target.getAttribute('resourceid'))}
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
    );
  }
}

export default ResourceItem;
