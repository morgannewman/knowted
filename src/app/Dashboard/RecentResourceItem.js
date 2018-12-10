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
            <li key={item.id} className="recent-resource-item">
              <a href={`/${item.id}`}>
                <span>{item.parent.title}</span>
                >>
                <span>{item.title}</span>
                <p>Last Opened: {item.last_opened}</p>
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
