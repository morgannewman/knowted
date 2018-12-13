import React from 'react';
import { connect } from 'react-redux';
import ActiveResourceContainer from './ActiveResourceContainer';
import CompletedResourceContainer from './CompletedResourceContainer';
import { getResources } from '../../controller/actions/topicDashboard';
import Loading from '../common/Loading';
import './index.scss';
export class TopicDashboard extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.topicId;
    this.props.dispatch(getResources(id));
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    }
    return (
      <main className="topic-dashboard">
        <section>
          <h2>Breadcrumb nav placeholder</h2>
        </section>
        <h2>Active Resources</h2>
        <ActiveResourceContainer resources={this.props.resources} />

        <h2>Completed Resources </h2>
        <CompletedResourceContainer resources={this.props.resources} />
      </main>
    );
  }
}
const mapStateToProps = state => {
  return {
    loading: state.topicDashReducer.loading,
    parentId: state.topicDashReducer.topicId,
    resources: state.topicDashReducer.resources
  };
};
export default connect(mapStateToProps)(TopicDashboard);
