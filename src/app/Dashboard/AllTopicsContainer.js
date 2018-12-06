import React from 'react';
import Folder from './Folder';
import Topic from './Topic';

class AllTopicsContainer extends React.Component {
  //FIXME: hard coded for now
  topics = [
    { id: 1, title: 'Topic One', parent: null },
    {
      id: 2,
      title: 'Topic Two',
      parent: 101
    },
    {
      id: 3,
      title: 'Topic Three',
      parent: 101
    }
  ];

  folders = [{ id: 101, title: 'Folder One' }];

  renderTopics(topic) {
    //if topic.parent is null
    if (!topic.parent) {
      return <Topic title={topic.title} key={topic.id} />;
    }
    // let folderId = topic.parent;
    // return this.findFolder(folderId);
  }

  // findFolder(folderId) {
  //   //find folder based on ID
  //   let result = this.folders.find(folder => folder.id === folderId);
  //   return <Folder title={result.title} />;
  // }

  render() {
    return (
      <React.Fragment>
        <button>add topic</button>
        <br />
        {this.folders.map((folder, index) => {
          return <Folder title={folder.title} key={index} />;
        })}
        {this.topics.map(topic => this.renderTopics(topic))}
      </React.Fragment>
    );
  }
}

export default AllTopicsContainer;
