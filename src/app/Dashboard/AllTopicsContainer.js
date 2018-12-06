import React from 'react';

import Folder from './Folder';
import Topic from './Topic';
import AddTopic from './AddTopic';

//FIXME: remove hard coded references
import TopicsData from '../../db/topicsData';
import FoldersData from '../../db/foldersData';

class AllTopicsContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AddTopic />
        {FoldersData.map((folder, index) => {
          return <Folder title={folder.title} key={index} id={folder.id} />;
        })}
        {TopicsData.map(topic =>
          !topic.parent ? (
            <Topic title={topic.title} key={topic.id} topicId={topic.id} />
          ) : null
        )}
      </React.Fragment>
    );
  }
}

export default AllTopicsContainer;
