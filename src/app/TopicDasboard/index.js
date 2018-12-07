import React from 'react';
import resourcesData from '../../dummyDB/resourcesData';
import ActiveResourceContainer from './ActiveResourceContainer';

class TopicDashboard extends React.Component {
  render() {
    return (
      <main>
        <section>
          <h2>Breadcrumb nav placeholder</h2>
        </section>
        <h2>Active Resources</h2>
        <ActiveResourceContainer resources={resourcesData} />
        <section>
          <h2>Completed Resource Container placeholder</h2>
        </section>
      </main>
    );
  }
}

export default TopicDashboard;
