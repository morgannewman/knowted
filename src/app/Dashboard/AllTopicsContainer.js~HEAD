import React from 'react';
import './AllTopicsContainer.css';
import { connect } from 'react-redux';

import AddTopic from './AddTopic';
import Folder from './Folder';
import Topic from './Topic';

import { getTopics } from '../../controller/actions/topic';

//FIXME: remove hard coded references
import FoldersData from '../../db/foldersData';

export class AllTopicsContainer extends React.Component {
  componentWillMount() {
    this.props.dispatch(getTopics());
  }

  render() {
    const { topics } = this.props;
    console.log(topics);
    return (
      <section className="all-topics-container">
        <AddTopic />
        {FoldersData.map(folder => {
          return (
            <Folder title={folder.title} folderId={folder.id} key={folder.id} />
          );
        })}
        {topics &&
          topics.map(
            topic =>
              !topic.parent && (
                <Topic title={topic.title} topicId={topic.id} key={topic.id} />
              )
          )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  topics: state.topicReducer.topics
});

export default connect(mapStateToProps)(AllTopicsContainer);
