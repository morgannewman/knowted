import React from 'react';
import ResourceItem from './ResourceItem';
import AddResourceForm from './AddResourceForm';
import './ActiveResourceContainer.scss';

export class ActiveResourceContainer extends React.Component {
  //TODO: Drag and drop functionality
  state = {
    resourceOrder: this.props.resourceOrder
  };

  render() {
    const { resources, resourceOrder } = this.props;

    return (
      <section className="active-resources-container">
        <ul className="active-resources-list">
          {resourceOrder.map(rescID => {
            if (
              resourceOrder &&
              resources &&
              resourceOrder.length > 0 &&
              resources[rescID].completed === false
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
          <AddResourceForm />
        </ul>
      </section>
    );
  }
}

export default ActiveResourceContainer;
