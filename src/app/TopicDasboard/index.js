import React from 'react';
import ResourceItem from './ResourceItem';
import resourcesData from '../../dummyDB/resourcesData';

class TopicDashboard extends React.Component {
  render() {
    return (
      <main>
        <section>
          <h2>Breadcrumb nav placeholder</h2>
        </section>
        <section>
          <h2>Active Resource Container placeholder</h2>

          <ResourceItem resource={resourcesData[0].resource} />
        </section>
        <section>
          <h2>Completed Resource Container placeholder</h2>
        </section>
      </main>
    );
  }
}

export default TopicDashboard;
