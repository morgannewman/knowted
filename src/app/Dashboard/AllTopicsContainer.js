import React from 'react';
<<<<<<< HEAD
=======
import './AllTopicsContainer.css';
>>>>>>> added in component logic for Add Topic form as well as some temporary styling:

import AddTopic from './AddTopic';
import Folder from './Folder';
import Topic from './Topic';
import AddTopic from './AddTopic';

//FIXME: remove hard coded references
import TopicsData from '../../db/topicsData';
import FoldersData from '../../db/foldersData';

class AllTopicsContainer extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      <React.Fragment>
        <AddTopic />
        {FoldersData.map((folder, index) => {
          return <Folder title={folder.title} key={index} id={folder.id} />;
=======
      <section className="all-topics-container">
        <AddTopic />
        {FoldersData.map(folder => {
          return (
            <Folder title={folder.title} folderId={folder.id} key={folder.id} />
          );
>>>>>>> added in component logic for Add Topic form as well as some temporary styling:
        })}
        {TopicsData.map(topic =>
          !topic.parent ? (
            <Topic title={topic.title} key={topic.id} topicId={topic.id} />
          ) : null
        )}
<<<<<<< HEAD
      </React.Fragment>
=======
      </section>
>>>>>>> added in component logic for Add Topic form as well as some temporary styling:
    );
  }
}

export default AllTopicsContainer;
