import React from 'react';
import RecentlyViewedContainer from './RecentlyViewedContainer';

class Dashboard extends React.Component {
  render() {
    return (
      <main>
        <div>
          <h2>Recently Viewed</h2>
          <RecentlyViewedContainer />
        </div>
        <div>
          <h2>All</h2>
        </div>
      </main>
    );
  }
}

export default Dashboard;
