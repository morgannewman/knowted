import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import RecentResourceItem from './RecentResourceItem';

//TODO: delete these two imports once we're connected and can pass through state
import resourcesData from '../../dummyDB/resourcesData';
const [first, second, third] = resourcesData;
const data = [first, second, third];

export class RecentlyViewed extends Component {
  render() {
    return (
      <section className="recently-viewed">
        <RecentResourceItem resources={data} />
      </section>
    );
  }
}

export default RecentlyViewed;
