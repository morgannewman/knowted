import React from 'react';

const Topic = props => {
  return <button onClick={() => console.log('clicked')}>{props.title}</button>;
};

export default Topic;
