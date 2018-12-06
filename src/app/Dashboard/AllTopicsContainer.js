import React from 'react';
import PropTypes from 'prop-types';

import Folder from './Folder';
import Topic from './Topic';

//FIXME: remove hard coded references
import TopicsData from '../../db/topicsData';
import FoldersData from '../../db/foldersData';

class AllTopicsContainer extends React.Component {
  render() {
    return (
      <>
        <button onClick={() => console.log('add a topic')}>add topic</button>
        <br />
        {FoldersData.map((folder, index) => {
          return (
            <Folder title={folder.title} folderId={folder.id} key={index} />
          );
        })}
        {TopicsData.map((topic, index) =>
          !topic.parent ? (
            <Topic title={topic.title} topicId={topic.id} key={index} />
          ) : null
        )}
      </>
    );
  }
}

export default AllTopicsContainer;
