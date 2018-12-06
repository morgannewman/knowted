import React from 'react';

const Topic = props => {
  return (
    <button
      className="topic-btn"
      onClick={() => console.log('click through to topic/:id', props.topicId)}
    >
      {props.title}
    </button>
  );
};

export default Topic;
