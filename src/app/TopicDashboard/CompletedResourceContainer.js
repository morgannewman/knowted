import React from 'react';
import ResourceItem from './ResourceItem';
import './CompletedResourceContainer.scss';

export class CompletedResourceContainer extends React.Component {
  //TODO: Drag and drop functionality

  constructor(props) {
    super(props);
    this.state = {
      showAll: false
    };
  }

  handletoggle = () => {
    this.setState(prevState => ({ showAll: !prevState.showAll }));
  };

  render() {
    const { resources, resourceOrder } = this.props;
    return (
      <section className="completed-resources-container">
        <div className="completed-label">
          <h3>Completed</h3>
          <button type="button" onClick={this.handletoggle}>
            {this.state.showAll ? 'hide all' : 'show all'}
          </button>
        </div>
        {this.state.showAll ? (
          <ul className="completed-resources-list">
            {resourceOrder.map(rescID => {
              if (
                resourceOrder &&
                resources &&
                resourceOrder.length > 0 &&
                resources[rescID].completed === true
              ) {
                return resources[rescID] ? (
                  <li key={rescID} className="resource-item-container">
                    <ResourceItem resource={resources[rescID]} />
                  </li>
                ) : null;
              } else {
                return null;
              }
            })}
          </ul>
        ) : null}
      </section>
    );
  }
}

export default CompletedResourceContainer;
