import React from 'react';
import { connect } from 'react-redux';
import ActiveResourceContainer from './ActiveResourceContainer';
import CompletedResourceContainer from './CompletedResourceContainer';
import { get_resources } from '../../controller/actions/resource';

class TopicDashboard extends React.Component {
  componentDidMount() {
    //TODO: Will need to dispatch with this.props.params.id
    //ID hardcoded for now
    this.props.dispatch(get_resources(4000));
  }
  render() {
    return (
      <main>
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
    resources: state.resourceReducer.resources
  };
};
export default connect(mapStateToProps)(TopicDashboard);
