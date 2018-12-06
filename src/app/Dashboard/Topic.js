import React from 'react';
import PropTypes from 'prop-types';

export default function Topic({ title, topicId }) {
  return (
    <button
      className="topic-btn"
      onClick={() => console.log('click through to topic/:id', topicId)}
    >
      {title}
    </button>
  );
}

Topic.propTypes = {
  topicId: PropTypes.number,
  title: PropTypes.string
};
