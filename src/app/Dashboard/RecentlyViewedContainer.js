import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RecentResourceItem from './RecentResourceItem';

const resources = [
  {
    resource:{
      id: 12345,
      parent: 54321,
      title: 'needles',
      uri: 'http://something',
      last_opened: Date.now()
    }
  },

  {
    resource:{
      id: 123456,
      parent:102030,
      title: 'Karate',
      uri: 'http://something',
      last_opened: Date.now()
    }
  },
  {
    resource:{
      id: 1234567,
      parent: 10204,
      title: 'Australia',
      uri: 'http://something',
      last_opened: Date.now()
    }
  }
  
  ];
export class RecentlyViewed extends Component {
  render(){
    return(
      <section className= 'recently-viewed'>
      <RecentResourceItem resources={resources}/>
      </section>
    )
  }
}

export default RecentlyViewed;