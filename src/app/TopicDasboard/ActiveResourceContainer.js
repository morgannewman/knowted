import React from 'react';
import ResourceItem from './ResourceItem';
import AddResourceForm from './AddResourceForm';
import './ActiveResourceContainer.scss';

export class ActiveResourceContainer extends React.Component {
  //TODO: Drag and drop functionality
  componentDidMount() {
    console.log('component mounts and ready to dispatch actions');
  }
  render() {
    const { resources } = this.props;

    return (
      <section className="active-resources-container">
        <ul className="active-resources-list">
          {resources.map(rescItem => {
            if (!rescItem.completed) {
              return (
                <li key={rescItem.id} className="resource-item-container">
                  <ResourceItem resource={rescItem} />
                </li>
              );
            }
          })}
          <AddResourceForm />
        </ul>
      </section>
    );
  }
}

export default ActiveResourceContainer;
