import React from 'react';

export function ResourceData({
  resource,
  handleChecked,
  handleEdit,
  handleDelete
}) {
  return (
    <div>
      <input
        id={resource.id}
        type="checkbox"
        checked={resource.completed}
        onChange={handleChecked}
      />
      <a href={resource.id}>{resource.title}</a>
      <br />
      <a href={resource.uri} target="_blank" rel="noopener">
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

export default ResourceData;
