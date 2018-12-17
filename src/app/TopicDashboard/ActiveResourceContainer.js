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
              resources[rescID]
            ) {
              return resources[rescID].completed === false ? (
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

// const mapStateToProps = state => {
//   return {
//     loading: state.resourceReducer.loading,
//     parentId: state.resourceReducer.topicId,
//     resources: state.resourceReducer.resources
//   };
// };

// export default connect()(ActiveResourceContainer);
export default ActiveResourceContainer;

// <DragDropContext onDragEnd={this.onDragEnd}>
// <section className="active-resources-container">
//   <button
//     // className="add-resource-button"
//     type="button"
//     onClick={this.handleScrollClick}
//   >
//     Add Resource
//   </button>
//   <Droppable droppableId="droppable-1">
//     {provided => (
//       <ul ref={provided.innerRef} className="active-resources-list">
//         {this.state.resourceOrder.map((rescID, index) => {
//           if (
//             resourceOrder &&
//             resources &&
//             resourceOrder.length > 0 &&
//             resources[rescID]
//           ) {
//             return resources[rescID].completed === false ? (
//               <Draggable
//                 key={rescID}
//                 draggableId={rescID}
//                 index={index}
//               >
//                 {provided => (
//                   <li
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                     className="resource-item-container"
//                   >
//                     <ResourceItem resource={resources[rescID]} />
//                   </li>
//                 )}
//               </Draggable>
//             ) : null;
//           } else {
//             return null;
//           }
//         })}
//       </ul>
//     )}
//   </Droppable>

//   <AddResourceForm id="123" ref1={this.Form1} />
// </section>
// </DragDropContext>
