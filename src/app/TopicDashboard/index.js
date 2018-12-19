import React from 'react';
import { connect } from 'react-redux';
import ActiveResourceContainer from './ActiveResourceContainer';
import CompletedResourceContainer from './CompletedResourceContainer';
import { initializeTopicDashboard } from '../../controller/actions/topicDashboard';
import Loading from '../common/Loading';
import './index.scss';
import Breadcrumbs from '../common/Breadcrumbs';

export class TopicDashboard extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.topicId);
    const currentTopicID = this.props.match.params.topicId;
    this.props.dispatch(initializeTopicDashboard(currentTopicID));
  }

  componentDidUpdate(prevProps) {
    const currentTopicID = this.props.match.params.topicId;
    const prevID = prevProps.match.params.topicId;

    if (prevID !== currentTopicID) {
      this.props.dispatch(initializeTopicDashboard(currentTopicID));
    }
  }

  render() {
    const { loading, topic, stateIsStale } = this.props;
    if (loading || stateIsStale) {
      return <Loading />;
    }
    return (
      <main className="topic-dashboard">
        <section>
          <h2>
            <Breadcrumbs
              topicId={topic && topic.id}
              topicTitle={topic && topic.title}
            />
          </h2>
        </section>
        <h2>Active Resources</h2>
        <ActiveResourceContainer
          resources={this.props.resources}
          resourceOrder={this.props.resourceOrder}
        />

        <h2>Completed Resources </h2>
        <CompletedResourceContainer {...this.props} />
      </main>
    );
  }
}
const mapStateToProps = (state, props) => {
  console.log(props);
  const currentTopicID = props.match.params.topicId;
  const stateTopicID = state.topicDashReducer.topic.id;
  return {
    stateIsStale: Number(stateTopicID) !== Number(currentTopicID),
    loading: state.topicDashReducer.loading,
    resources: state.topicDashReducer.resources,
    resourceOrder: state.topicDashReducer.resourceOrder,
    topic: state.topicDashReducer.topic
  };
};
export default connect(mapStateToProps)(TopicDashboard);
