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
    <div className="resource-view">
      <EditButton
        resourceid={resource.id}
        onClick={handleEdit}
        className="resource-item-edit resource-item-controls"
      >
        edit
      </EditButton>

      <button
        className="checkbox"
        id={resource.id}
        type="button"
        onClick={handleChecked}
        checked={resource.completed}
      />
      <div className="resource-info">
        <span className="name-of-resource">
          <Link to={`/dashboard/${topicID}/${resource.id}`}>
            {resource.title}
          </Link>
        </span>
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

      <button
        resourceid={resource.id}
        onClick={handleDelete}
        className="resource-item-delete resource-item-controls"
      />
    </div>
  );
}

export default ResourceView;
