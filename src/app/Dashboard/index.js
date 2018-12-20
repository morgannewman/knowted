import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Loading from '../common/Loading';
import AllTopicsContainer from './AllTopicsContainer';
import RecentlyViewedContainer from './RecentlyViewedContainer';

//TODO: change out
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
      <main>
        <div>
          <h2>Recently Viewed</h2>
          <RecentlyViewedContainer />
        </div>
        <div>
          <h2>All Topics</h2>
          <AllTopicsContainer />
        </div>
      </main>
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
