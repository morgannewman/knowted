import React from 'react';
import { connect } from 'react-redux';
import { updateRescOrder } from '../../controller/actions/topicDashboard';
import ResourceItem from './ResourceItem';
import AddResourceForm from './AddResourceForm';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './ActiveResourceContainer.scss';

export class ActiveResourceContainer extends React.Component {
  //TODO: Drag and drop functionality
  constructor(props) {
    super(props);
    this.Form1 = React.createRef();
  }

  handleScrollClick = () => {
    const element = this.Form1.current;
    element.scrollIntoView();
  };
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

    const newOrder = Array.from(this.props.rescOrder);
    newOrder.splice(source.index, 1);
    newOrder.splice(destination.index, 0, draggableId);
    this.props.dispatch(updateRescOrder(newOrder, this.props.parentId));
  };

  render() {
    const { resources, rescOrder } = this.props;
    console.log(this.props);
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
                {rescOrder.map((rescID, index) => {
                  if (
                    rescOrder &&
                    resources &&
                    rescOrder.length > 0 &&
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

const mapStateToProps = state => {
  return {
    parentId: state.topicDashReducer.topic.id,
    rescOrder: state.topicDashReducer.resourceOrder
  };
};

export default connect(mapStateToProps)(ActiveResourceContainer);
