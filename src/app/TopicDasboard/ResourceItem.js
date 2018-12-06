import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

//TODO: use Link so so the resource title links to it's corresponding
//resource page

export class ResourceItem extends React.Component {
  static propTypes = {
    resource: PropTypes.object.isRequired
  };

  render() {
    const { resource } = this.props;
    return (
      <>
        <form className="js-update-item hidden">
          <input id="box1" type="checkbox" />
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
            onClick={() => console.log('edit works')}
            className="resource-item-edit"
          >
            <span className="button-label">edit</span>
          </button>
          <button
            onClick={() => console.log('delete works')}
            className="resource-item-delete"
          >
            <span className="button-label">delete</span>
          </button>
        </div>
      </>
    );
  }
}

export default ResourceItem;
