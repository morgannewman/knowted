import React from 'react';
import { Link } from 'react-router-dom';
import { EditButton, DeleteButton } from '../styles/common.styles';
export function ResourceView({
  resource,
  handleChecked,
  handleEdit,
  handleDelete,
  topicID
}) {
  return (
    <>
      <div className="resource-view">
        <EditButton
          resourceid={resource.id}
          onClick={handleEdit}
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
          className="checkbox"
          id={resource.id}
          type="button"
          onClick={handleChecked}
          checked={resource.completed}
        />
        <div className="resource-info">
          <div className="name-of-resource">
            <Link to={`/dashboard/${topicID}/${resource.id}`}>
              {resource.title}
            </Link>
          </div>
          <div className="resc-uri">
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
          </div>
        </div>
        <button
          type="button"
          resourceid={resource.id}
          onClick={handleDelete}
          className="resource-item-delete resource-item-controls"
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default ResourceView;
