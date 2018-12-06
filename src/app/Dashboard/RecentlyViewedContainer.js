import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import RecentResourceItem from './RecentResourceItem';

//TODO: delete these two imports once we're connected and can pass through state
import topicsData from '../../dummyDB/topicsData';
import resourcesData from '../../dummyDB/resourcesData';

export class RecentlyViewed extends Component {
  render() {
    return (
      <section className="recently-viewed">
        <RecentResourceItem resources={resourcesData} />
      </section>
    );
  }
}

export default RecentlyViewed;
