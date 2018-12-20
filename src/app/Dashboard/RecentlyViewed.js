import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecentlyViewedContainer } from '../styles/dashboard.styles';

export class RecentlyViewed extends Component {
  render() {
    const { recentResources } = this.props;

    console.log(recentResources);
    return (
      <RecentlyViewedContainer>
        {recentResources.length === 0 ? (
          <div className="welcome-zero-case">
            <h1>Welcome to Knowted, {this.props.userName}!</h1>
            <p>
              Start organizing your learning now by adding a topic below you're
              interested in and click it to add your first resources.
            </p>
            <p>
              You can also combine topics by dragging and dropping them together
              to make Folders!
            </p>
          </div>
        ) : (
          <>
            <h2>Recently Viewed</h2>
            {recentResources ? (
              <ul className="recent-resources">
                {recentResources.map(item => {
                  return (
                    <a
                      href={`dashboard/${item.parent.id}/${item.id}`}
                      key={item.id}
                    >
                      <li>
                        <span>{item.parent.title}</span> >{' '}
                        <span>{item.title}</span>
                      </li>
                    </a>
                  );
                })}
              </ul>
            ) : null}
          </>
        )}
      </RecentlyViewedContainer>
    );
  }
}

const mapStateToProps = state => ({
  recentResources: state.dashboardReducer.recentResources,
  userName: state.auth.user.name
});

export default connect(mapStateToProps)(RecentlyViewed);
