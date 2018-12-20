import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { RecentlyViewedContainer } from '../styles/dashboard.styles';

export class RecentlyViewed extends Component {
  render() {
    const { recentResources } = this.props;
    return (
      <RecentlyViewedContainer>
        <h2>Recently Viewed</h2>
        {recentResources ? (
          <ul className="recent-resources">
            {recentResources.map(item => {
              return (
                <Link
                  to={`dashboard/${item.parent.id}/${item.id}`}
                  key={item.id}
                >
                  <li>
                    <span>{item.parent.title}</span> > <span>{item.title}</span>
                  </li>
                </Link>
              );
            })}
          </ul>
        ) : null}
      </RecentlyViewedContainer>
    );
  }
}

const mapStateToProps = state => ({
  recentResources: state.dashboardReducer.recentResources
});

export default connect(mapStateToProps)(RecentlyViewed);
