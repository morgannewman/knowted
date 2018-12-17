import React from 'react';

export function ResourceView({
  resource,
  handleChecked,
  handleEdit,
  handleDelete
}) {
  //FIXME: need to add fomatting to YOUTUBE URLs. Currently they are just a code
  return (
    <div className="resource-view">
      <input
        id={resource.id}
        type="checkbox"
        onChange={handleChecked}
        checked={resource.completed}
      />

      <a href={resource.id}>{resource.title}</a>
      <br />
      <a href={resource.uri} target="_blank" rel="noopener noreferrer">
        {resource.uri}
      </a>
      <div className="resource-item-controls">
        <button
          resourceid={resource.id}
          onClick={handleEdit}
          className="resource-item-edit"
        >
          edit
        </button>

        <button
          resourceid={resource.id}
          onClick={handleDelete}
          className="resource-item-delete"
        >
          delete
        </button>
      </div>
    </div>
  );
}

export default ResourceView;
