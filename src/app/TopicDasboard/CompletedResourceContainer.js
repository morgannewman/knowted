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
  componentDidMount() {
    console.log('component mounts and ready to dispatch actions');
  }

  handletoggle = () => {
    this.setState({ showAll: !this.state.showAll });
  };

  render() {
    const { resources } = this.props;

    return (
      <section className="completed-resources-container">
        <div>
          <h3>Completed</h3>
          <button type="button" onClick={this.handletoggle}>
            {this.state.showAll ? 'show all' : 'hide all'}
          </button>
        </div>
        {this.state.showAll ? (
          <ul className="completed-resources-list">
            {resources.map(rescItem => {
              if (rescItem.resource.completed) {
                return (
                  <li
                    key={rescItem.resource.id}
                    className="completed-item-container"
                  >
                    <ResourceItem resource={rescItem.resource} />
                  </li>
                );
              }
            })}
          </ul>
        ) : null}
      </section>
    );
  }
}

export default CompletedResourceContainer;
