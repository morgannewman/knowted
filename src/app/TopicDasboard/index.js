import React from 'react';
import ResourceItem from './ResourceItem';
import resourcesData from '../../dummyDB/resourcesData';
import ActiveResourceContainer from './ActiveResourceContainer';

//FIXME: ResourceItem will be inside a container. This is here to make sure it renders
class TopicDashboard extends React.Component {
  render() {
    return (
      <main>
        <section>
          <h2>Breadcrumb nav placeholder</h2>
        </section>
        <section>
          <h2>Active Resourpmce Container placeholder</h2>
          <ActiveResourceContainer resources={resourcesData} />
          {/* <ResourceItem resource={resourcesData[0].resource} /> */}
        </section>
        <section>
          <h2>Completed Resource Container placeholder</h2>
        </section>
      </main>
    );
  }
}

export default TopicDashboard;
