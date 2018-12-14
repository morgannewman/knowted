import React from 'react';
import Topic from './Topic';
import './JawBone.css';

import Loading from '../common/Loading';

import { connect } from 'react-redux';

export class JawBone extends React.Component {
  render() {
    if (this.props.loading) return <Loading />;
    const { topics } = this.props;
    return (
      <div className="jaw-bone-container">
        {topics.map(topic =>
          topic.parent.id === this.props.folderId ? (
            <Topic title={topic.title} key={topic.id} topicId={topic.id} />
          ) : null
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  topics: state.dashboardReducer.topics,
  loading: state.dashboardReducer.loading
});

export default connect(mapStateToProps)(JawBone);
