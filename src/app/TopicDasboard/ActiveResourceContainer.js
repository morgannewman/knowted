import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import ResourceItem from './ResourceItem';
import AddResourceForm from './AddResourceForm';
import './ActiveResourceContainer.scss';
// import Loading from '../common/Loading';

export class ActiveResourceContainer extends React.Component {
  //TODO: Drag and drop functionality
  onDragEnd = result => {
    // TODO: reorder our column
  };

  render() {
    const { resources } = this.props;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <section className="active-resources-container">
          <Droppable className="hello" droppableId="droppable">
            {provided => (
              <ul ref={provided.innerRef} className="active-resources-list">
                {resources.map((rescItem, index) => {
                  if (rescItem && !rescItem.completed) {
                    return (
                      <Draggable
                        key={rescItem.id}
                        draggableId={rescItem.id}
                        index={index}
                      >
                        {provided => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="resource-item-container"
                          >
                            <ResourceItem resource={rescItem} />
                          </li>
                        )}
                      </Draggable>
                    );
                  } else {
                    return null;
                  }
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
          <AddResourceForm />
        </section>
      </DragDropContext>
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

/*
<li key={rescItem.id} className="resource-item-container">
<ResourceItem resource={rescItem} />
</li>
*/
