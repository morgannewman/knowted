import React from 'react';
import { actions as notifActions } from 'redux-notifications';
import { connect } from 'react-redux';
import { initializeTopicDashboard } from '../../controller/actions/topicDashboard';
import ActiveResourceContainer from './ActiveResourceContainer';
import CompletedResourceContainer from './CompletedResourceContainer';
import Loading from '../common/Loading';
import Breadcrumbs from '../common/Breadcrumbs';
//STYLESHEET
import { Main } from '../styles/common.styles';
import {
  TopicDashContainer,
  ActiveResources
} from '../styles/topicDashboard.styles';
import 'redux-notifications/lib/styles.css';

const { notifSend } = notifActions;

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
      <Main>
        <TopicDashContainer>
          <Breadcrumbs
            topicId={topic && topic.id}
            topicTitle={topic && topic.title}
          />
          <h2>{topic.title}</h2>
          <h3>Active Resources</h3>
          <ActiveResources>
            <ActiveResourceContainer {...this.props} />
          </ActiveResources>
          <h2>Completed Resources </h2>
          <CompletedResourceContainer {...this.props} />
        </TopicDashContainer>
      </Main>
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
