import React from 'react';
import PropTypes from 'prop-types';

export default function RecentResourceItem({ resources }) {
  return (
    <>
      <ul
        topics={resources.topics}
        resources={resources.resources}
        className="recent-resources"
      >
        {resources.map(item => {
          return (
            <li key={item.id} className="recent-resource-item">
              <a href={`dashboard/${item.parent.id}/${item.id}`}>
                <span>{item.parent.title}</span> > <span>{item.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

RecentResourceItem.propTypes = {
  resources: PropTypes.array.isRequired
};
