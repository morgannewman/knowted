import React from 'react';
import ResourceItem from './ResourceItem';

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
        <div className="complete-header">
          <h3 className="complete-title">Completed Resources</h3>
          <div className="show-button-cont">
            <button type="button" onClick={this.handletoggle}>
              {this.state.showAll ? 'hide all' : 'show all'}
            </button>
          </div>
        </div>

        {this.state.showAll ? (
          <ul className="completed-resources-list">
            {resourceOrder.map(rescID => {
              if (
                resourceOrder &&
                resources &&
                resourceOrder.length > 0 &&
                resources[rescID]
              ) {
                return resources[rescID].completed === true ? (
                  <li
                    key={rescID}
                    className=" resource-item completed-resource-item"
                  >
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
