import React from 'react';

export function ResourceEditForm({ resource, handleUpdate }) {
  return (
    <div>
      <form
        resourceid={resource.id}
        className="resource-item"
        onSubmit={e => {
          e.preventDefault();
          const newTitle = e.currentTarget.getElementsByTagName('INPUT')[0]
            .value;
          handleUpdate(e, newTitle);
        }}
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
