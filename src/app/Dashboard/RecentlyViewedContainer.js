import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RecentResourceItem from './RecentResourceItem';

const resources = [
  {
    resource:{
      name: 'needles',
      id: 12345,
      topic: 'knitting'
    }
  },

  {
    resource:{
      name: 'high-kicks',
      id: 12345,
      topic: 'karate'
    }
  },
  {
    resource:{
      name: 'Australia',
      id: 12345,
      topic: 'kangaroos'
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