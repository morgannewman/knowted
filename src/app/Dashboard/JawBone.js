import React from 'react';
import Topic from './Topic';

//FIXME: remove hard coded references
import TopicsData from '../../db/topicsData';

export default class JawBone extends React.Component {
  findTopics() {
    return TopicsData.map(topic =>
      topic.parent === this.props.folderId ? (
        <Topic title={topic.title} key={topic.id} topicId={topic.id} />
      ) : null
    );
  }

  render() {
    return <div className="jaw-bone-container">{this.findTopics()}</div>;
  }
}
