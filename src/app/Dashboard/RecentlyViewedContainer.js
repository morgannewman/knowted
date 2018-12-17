import React, { Component } from 'react';
import { connect } from 'react-redux';

export class RecentlyViewed extends Component {
  render() {
    const { recentResources } = this.props;
    return (
      <section className="recently-viewed">
        <ul className="recent-resources">
          {recentResources.map(item => {
            return (
              <li key={item.id} className="recent-resource-item">
                <a href={`dashboard/${item.parent.id}/${item.id}`}>
                  <span>{item.parent.title}</span> > <span>{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  recentResources: state.dashboardReducer.recentResources
});

export default connect(mapStateToProps)(RecentlyViewed);
