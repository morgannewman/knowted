import React from 'react';
import AllTopicsContainer from './AllTopicsContainer';
<<<<<<< HEAD
import RecentlyViewedContainer from './RecentlyViewedContainer';
=======
>>>>>>> set up initial should render tests

class Dashboard extends React.Component {
  render() {
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

export default Dashboard;
