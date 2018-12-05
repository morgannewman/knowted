import React from 'react';
import TopicsContainer from './TopicsContainer';

class Dashboard extends React.Component {
  render() {
    return (
      <main>
        <div>
          <h2>Recently Viewed</h2>
        </div>
        <div>
          <h2>All</h2>
          <TopicsContainer />
        </div>
      </main>
    );
  }
}

export default Dashboard;
