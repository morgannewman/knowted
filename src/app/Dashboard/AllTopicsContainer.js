import React from 'react';
import './AllTopicsContainer.css';
import { connect } from 'react-redux';

import AddTopic from './AddTopic';
import Folder from './Folder';
import Topic from './Topic';
import Loading from '../common/Loading';
import { getTopics } from '../../controller/actions/topic';
import PropTypes from 'prop-types';

//FIXME: remove hard coded references
import FoldersData from '../../db/foldersData';

export class AllTopicsContainer extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    topics: PropTypes.array
  };

  componentDidMount() {
    this.props.dispatch(getTopics());
  }

  render() {
    const { topics } = this.props;
    if (this.props.loading) return <Loading />;
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
              (!topic.parent || !topic.parent.id) && (
                <Topic title={topic.title} topicId={topic.id} key={topic.id} />
              )
          )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  topics: state.topicReducer.topics,
  loading: state.topicReducer.loading
});

export default connect(mapStateToProps)(AllTopicsContainer);
