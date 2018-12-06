import React from 'react';
import PropTypes from 'prop-types';

// import { Link } from 'react-router-dom';

export default function RecentResourceItem({ resources }) {
  return (
    <>
      <ul
        topics={resources.topics}
        resources={resources.resources}
        className="recent-resources"
      >
        {resources.map((item, index) => {
          return (
            <li key={item.resource.id} className="recent-resource-item">
              <a href={`/${item.resource.id}`}>
                <span>{item.resource.parent.title}</span>
                >>
                <span>{item.resource.title}</span>
                <p>Last Opened: {item.resource.last_opened}</p>
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
