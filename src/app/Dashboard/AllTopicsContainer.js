import React from 'react';
<<<<<<< HEAD
=======
import './AllTopicsContainer.css';
import { connect } from 'react-redux';
>>>>>>> connecting UI to get all topics and setting up folder actions

import AddTopic from './AddTopic';
import Folder from './Folder';
import Topic from './Topic';
import AddTopic from './AddTopic';

import { getTopics } from '../../controller/actions/topic';

//FIXME: remove hard coded references
import FoldersData from '../../db/foldersData';

class AllTopicsContainer extends React.Component {
  componentWillMount() {
    this.props.dispatch(getTopics());
  }

  render() {
    const { topics } = this.props;
    return (
      <section className="all-topics-container">
        <AddTopic />
        {FoldersData.map(folder => {
          return (
            <Folder title={folder.title} folderId={folder.id} key={folder.id} />
          );
        })}
<<<<<<< HEAD
        {TopicsData.map(topic =>
          !topic.parent ? (
            <Topic title={topic.title} key={topic.id} topicId={topic.id} />
          ) : null
=======
        {topics.map(
          topic =>
            !topic.parent && (
              <Topic title={topic.title} topicId={topic.id} key={topic.id} />
            )
>>>>>>> connecting UI to get all topics and setting up folder actions
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  topics: state.topicReducer.topics
});

export default connect(mapStateToProps)(AllTopicsContainer);
