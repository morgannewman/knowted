import React from 'react';
import Folder from './Folder';
import Topic from './Topic';

//FIXME: remove hard coded references
import TopicsData from '../../db/topicsData';
import FoldersData from '../../db/foldersData';

class AllTopicsContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={() => console.log('add a topic')}>add topic</button>
        <br />
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
