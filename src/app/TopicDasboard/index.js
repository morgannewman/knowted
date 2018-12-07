import React from 'react';
import ResourceItem from './ResourceItem';
import resourcesData from '../../dummyDB/resourcesData';

class TopicDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resource: {
        id: 123456,
        parent: {
          id: 102030,
          title: 'Martial Arts'
        },
        title: 'Karate',
        uri: 'http://something',
        completed: false,
        last_opened: new Date().toLocaleString()
      }
    };
  }
  render() {
    console.log(this.state.resources);

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
