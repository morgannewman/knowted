import React from 'react';
import resourcesData from '../../dummyDB/resourcesData';
import ActiveResourceContainer from './ActiveResourceContainer';
import CompletedResourceContainer from './CompletedResourceContainer';
class TopicDashboard extends React.Component {
  render() {
    return (
      <main>
        <section>
          <h2>Breadcrumb nav placeholder</h2>
        </section>
        <h2>Active Resources</h2>
        <ActiveResourceContainer resources={resourcesData} />

        <h2>Completed Resources </h2>
        <CompletedResourceContainer resources={resourcesData} />
      </main>
    );
  }
}

export default TopicDashboard;
