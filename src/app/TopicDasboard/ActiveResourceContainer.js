import React from 'react';
import ResourceItem from './ResourceItem';
import AddResourceForm from './AddResourceForm';
import { connect } from 'react-redux';
import './ActiveResourceContainer.scss';
import Loading from '../common/Loading';
export class ActiveResourceContainer extends React.Component {
  //TODO: Drag and drop functionality

  render() {
    const { resources } = this.props;
    return (
      <section className="active-resources-container">
        <ul className="active-resources-list">
          {resources.map(rescItem => {
            if (rescItem && !rescItem.completed) {
              return (
                <li key={rescItem.id} className="resource-item-container">
                  <ResourceItem resource={rescItem} />
                </li>
              );
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

//FIXME: This component might not need to be connected?
// const mapStateToProps = state => {
//   return {
//     loading: state.resourceReducer.loading,
//     parentId: state.resourceReducer.topicId,
//     resources: state.resourceReducer.resources
//   };
// };

export default connect()(ActiveResourceContainer);
