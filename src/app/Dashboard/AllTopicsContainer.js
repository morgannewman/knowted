import React from 'react';
import './AllTopicsContainer.css';
import { connect } from 'react-redux';

import AddTopic from './AddTopic';
import Folder from './Folder';
import Topic from './Topic';
import PropTypes from 'prop-types';

export class AllTopicsContainer extends React.Component {
  static propTypes = {
    topics: PropTypes.array,
    folders: PropTypes.array
  };

  render() {
    const { topics, folders } = this.props;

    return (
      <section className="all-topics-container">
        <AddTopic />
        {folders &&
          folders.map(folder => {
            return (
              <Folder
                title={folder.title}
                folderId={folder.id}
                key={folder.id}
              />
            );
          })}
        {topics &&
          topics.map(
            topic =>
              (!topic.parent || !topic.parent.id) && (
                <Topic title={topic.title} topicId={topic.id} key={topic.id} />
              )
          )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  topics: state.dashboardReducer.topics,
  folders: state.dashboardReducer.folders
});

export default connect(mapStateToProps)(AllTopicsContainer);
