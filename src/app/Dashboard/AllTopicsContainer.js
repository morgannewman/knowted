import React from 'react';
import './AllTopicsContainer.css';

import AddTopic from './AddTopic';
import Folder from './Folder';
import Topic from './Topic';

//FIXME: remove hard coded references
import TopicsData from '../../db/topicsData';
import FoldersData from '../../db/foldersData';

class AllTopicsContainer extends React.Component {
  render() {
    return (
      <section className="all-topics-container">
        <AddTopic />
        {FoldersData.map(folder => {
          return (
            <Folder title={folder.title} folderId={folder.id} key={folder.id} />
          );
        })}
        {TopicsData.map(topic =>
          !topic.parent ? (
            <Topic title={topic.title} topicId={topic.id} key={topic.id} />
          ) : null
        )}
      </section>
    );
  }
}

export default AllTopicsContainer;
