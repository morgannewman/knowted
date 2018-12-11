import React from 'react';
import ResourceItem from './ResourceItem';
import { connect } from 'react-redux';
import { get_resources, set_topicId } from '../../controller/actions/resource';
import './CompletedResourceContainer.scss';

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
    this.props.dispatch(get_resources(4000));
  }

  handletoggle = () => {
    this.setState({ showAll: !this.state.showAll });
  };

  render() {
    const { resources } = this.props;
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
            {resources.map(rescItem => {
              if (rescItem.completed) {
                return (
                  <li key={rescItem.id} className="completed-item-container">
                    <ResourceItem resource={rescItem} />
                  </li>
                );
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

export default connect()(CompletedResourceContainer);
