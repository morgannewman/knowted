import React from 'react';
import ResourceItem from './ResourceItem';
export class ActiveResourceContainer extends React.Component {
  render() {
    const { resources } = this.props;

    return (
      <section className="active-resources">
        <ul>
          {resources.map(rescItem => {
            console.log(rescItem);

            return (
              <li>
                <ResourceItem resource={rescItem.resource} />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default ActiveResourceContainer;
