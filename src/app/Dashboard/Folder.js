import React from 'react';

const Folder = props => {
  return <button onClick={() => console.log(props)}>{props.title}</button>;
};

export default Folder;
