import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecentResourceItem from './RecentResourceItem';
import { getMostRecentResources } from '../../controller/actions/resource';

export class RecentlyViewed extends Component {
  componentDidMount() {
    this.props.dispatch(getMostRecentResources(3));
  }

  render() {
    const { recentResources } = this.props.resources;
    return (
      <section className="recently-viewed">
        <RecentResourceItem resources={recentResources} />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  resources: state.resourceReducer
});

export default connect(mapStateToProps)(RecentlyViewed);
