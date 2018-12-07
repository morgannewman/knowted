import React from 'react';
import PropTypes from 'prop-types';

export function ResourceEditForm({ resource, handleUpdate }) {
  return (
    <div>
      <form
        resourceid={resource.id}
        className="resource-item"
        onSubmit={handleUpdate}
      >
        <input type="text" name={resource.title} />
        <button type="submit" className="resource-item-edit">
          update
        </button>
      </form>
      <a href={resource.uri}>{resource.uri}</a>
    </div>
  );
}

export default ResourceEditForm;

ResourceEditForm.propTypes = {
  resource: PropTypes.object.isRequired
};
