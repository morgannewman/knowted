import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import ResourceItem from './ResourceItem';
import AddResourceForm from './AddResourceForm';
import './ActiveResourceContainer.scss';
// import Loading from '../common/Loading';

export class ActiveResourceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.Form1 = React.createRef();
    this.state = {
      resources: this.props.resources,
      resourceOrder: this.props.resourceOrder
    };
  }
  //TODO: Drag and drop functionality

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    //FIXME: take out console logs once I'm sure this works.
    // const column = source.droppableId;
    // const newResources = Array.from(this.state.resources);
    // console.log(this.state.resources);
    // const index = newResources.findIndex(item => item.id === draggableId);
    // const movedItem = newResources[index];
    // console.log(movedItem, 'movedItem');
    // console.log(draggableId, 'draggableId');
    // console.log(index, 'index');
    // console.log(source.index, 'source index');
    // console.log(destination.index, 'destination index');

    // newResources.splice(source.index, 1);
    // newResources.splice(destination.index, 0, movedItem);
    // console.log(destination.index);
    // console.log(movedItem, 44);
    // newResources[destination.index] = movedItem;
    // console.log(newResources, 'newresources inseter');
    // console.log(newResources, 'after splice');
    // this.setState({ resources: newResources });
  };
  handleScrollClick = () => {
    // console.log(this.Form1.current);
    const element = this.Form1.current;
    element.scrollIntoView();
  };
  render() {
    const { resources, resourceOrder } = this.props;
    // console.log(this.state.resources);
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <section className="active-resources-container">
          <button
            // className="add-resource-button"
            type="button"
            onClick={this.handleScrollClick}
          >
            Add Resource
          </button>
          <Droppable droppableId="droppable-1">
            {provided => (
              <ul ref={provided.innerRef} className="active-resources-list">
                {this.state.resourceOrder.map((rescID, index) => {
                  if (
                    resourceOrder &&
                    resources &&
                    resourceOrder.length > 0 &&
                    resources[rescID]
                  ) {
                    return resources[rescID].completed === false ? (
                      <Draggable
                        key={rescID}
                        draggableId={rescID}
                        index={index}
                      >
                        {provided => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="resource-item-container"
                          >
                            <ResourceItem resource={resources[rescID]} />
                          </li>
                        )}
                      </Draggable>
                    ) : null;
                  } else {
                    return null;
                  }
                })}
              </ul>
            )}
          </Droppable>

          <AddResourceForm id="123" ref1={this.Form1} />
        </section>
      </DragDropContext>
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

export default connect()(ActiveResourceContainer);
