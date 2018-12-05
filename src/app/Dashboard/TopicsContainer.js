import React from 'react';
import Folder from './Folder';
import Topic from './Topic';

class TopicsContainer extends React.Component {
  render() {
    //FIXME: hard coded for now
    let folders = ['folder one', 'folder two'];
    let topics = ['topic one', 'topic two', 'topic three'];

    return (
      <React.Fragment>
        <button>add topic</button>
        {folders.map((folder, index) => {
          return <Folder title={folder} key={index} />;
        })}
        {topics.map((topic, index) => {
          return <Topic title={topic} key={index} />;
        })}
      </React.Fragment>
    );
  }
}

export default TopicsContainer;
