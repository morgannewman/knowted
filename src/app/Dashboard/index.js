import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//STYLESHEET
import { Main } from '../styles/common.styles';
import { DashboardContainer } from '../styles/dashboard.styles';

import Loading from '../common/Loading';
import AllTopics from './AllTopics';
import RecentlyViewed from './RecentlyViewed';

import { initializeDashboard } from '../../controller/actions/dashboard';
export class Dashboard extends React.Component {
  static propTypes = {
    loading: PropTypes.bool,
    topics: PropTypes.array,
    folders: PropTypes.array
  };

  componentDidMount() {
    this.props.dispatch(initializeDashboard(3));
  }

  render() {
    if (this.props.loading) return <Loading />;

    return (
      <Main>
        <DashboardContainer>
          <RecentlyViewed />
          <AllTopics />
        </DashboardContainer>
      </Main>
    );
  }
}

const mapStateToProps = state => ({
  topics: state.dashboardReducer.topics,
  folders: state.dashboardReducer.folders,
  recentResources: state.dashboardReducer.recentResources,
  loading: state.dashboardReducer.loading
});

export default connect(mapStateToProps)(Dashboard);
