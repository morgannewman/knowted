import React from 'react';
import { actions as notifActions } from 'redux-notifications';
import 'redux-notifications/lib/styles.css';
import { connect } from 'react-redux';
import ActiveResourceContainer from './ActiveResourceContainer';
import CompletedResourceContainer from './CompletedResourceContainer';
import { initializeTopicDashboard } from '../../controller/actions/topicDashboard';
import Loading from '../common/Loading';
// import './index.scss';
import Breadcrumbs from '../common/Breadcrumbs';
const { notifSend } = notifActions;
// import * '../styles/topicDashboard.styles';
// import * from '../styles/topicDashboard.styles';

export class TopicDashboard extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.topicId;
    this.props.dispatch(initializeTopicDashboard(id));
  }

  componentDidUpdate() {
    if (this.props.error) {
      return this.sendError();
    }
  }

  sendError = () => {
    this.props.dispatch(
      notifSend({
        message: this.props.error.message,
        kind: 'danger',
        dismissAfter: 4000
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
        <button>Hello</button>
        <Breadcrumbs
          topicId={topic && topic.id}
          topicTitle={topic && topic.title}
        />
        <h2>{topic.title}</h2>
        <ActiveResourceContainer {...this.props} />
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
    topic: state.topicDashReducer.topic,
    error: state.topicDashReducer.error
  };
};
export default connect(mapStateToProps)(TopicDashboard);
