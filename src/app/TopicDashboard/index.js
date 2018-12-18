import React from 'react';
import { actions as notifActions } from 'redux-notifications';
import { connect } from 'react-redux';
import ActiveResourceContainer from './ActiveResourceContainer';
import CompletedResourceContainer from './CompletedResourceContainer';
import { initializeTopicDashboard } from '../../controller/actions/topicDashboard';
import Loading from '../common/Loading';
import './index.scss';
import Breadcrumbs from '../common/Breadcrumbs';
const { notifSend } = notifActions;
export class TopicDashboard extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.topicId;
    this.props.dispatch(initializeTopicDashboard(id));
  }

  send = () => {
    this.props.dispatch(
      notifSend({
        message: 'hello world',
        kind: 'info',
        dismissAfter: 2000
      })
    );
  };
  render() {
    if (this.props.loading) {
      return <Loading />;
    }

    const { topic } = this.props;

    return (
      <main className="topic-dashboard">
        <section>
          <h2>
            <Breadcrumbs
              topicId={topic && topic.id}
              topicTitle={topic && topic.title}
            />
          </h2>
          <button onClick={this.send}>Send Notification</button>
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
const mapStateToProps = state => {
  return {
    loading: state.topicDashReducer.loading,
    resources: state.topicDashReducer.resources,
    resourceOrder: state.topicDashReducer.resourceOrder,
    topic: state.topicDashReducer.topic
  };
};
export default connect(mapStateToProps)(TopicDashboard);
