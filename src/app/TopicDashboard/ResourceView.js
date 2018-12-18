import React from 'react';
import { Link } from 'react-router-dom';
export function ResourceView({
  resource,
  handleChecked,
  handleEdit,
  handleDelete,
  topicID
}) {
  return (
    <div className="resource-view">
      <input
        id={resource.id}
        type="checkbox"
        onChange={handleChecked}
        checked={resource.completed}
      />
      <Link to={`/dashboard/${topicID}/${resource.id}`}>{resource.title}</Link>
      <br />
      <a
        href={
          resource.type === 'youtube'
            ? `https://www.youtube.com/watch?v=${resource.uri}`
            : resource.uri
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        {resource.type === 'youtube'
          ? `https://www.youtube.com/watch?v=${resource.uri}`
          : resource.uri}
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
