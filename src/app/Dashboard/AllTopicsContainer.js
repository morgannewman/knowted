import React from 'react';
import './AllTopicsContainer.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import AddTopic from './AddTopic';
import Folder from './Folder';
import Topic from './Topic';

export class AllTopicsContainer extends React.Component {
  static propTypes = {
    topics: PropTypes.array,
    folders: PropTypes.array
  };

  state = {
    topicsOrder: this.props.topics
  };

  componentDidMount() {
    console.log(this.state.topicsOrder);
  }

  reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  onDragEnd = result => {
    const { destination, source, draggableId, combine } = result;

    if (!destination) {
      return;
    }
    //check if destination has changed if not just return
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (combine) {
      console.log(combine.draggableId, draggableId);
    }

    console.log(result);
    //reorder
    const topics = this.reorder(
      this.state.topicsOrder,
      source.index,
      destination.index
    );

    this.setState({
      topicsOrder: topics
    });
  };

  render() {
    const { topics, folders } = this.props;

    return (
      <section className="all-topics-container">
        <div className="folders-container">
          {folders &&
            folders
              .map((folder, index) => {
                return (
                  <Folder
                    title={folder.title}
                    folderId={folder.id}
                    key={folder.id}
                    index={index}
                  />
                );
              })
              .sort()}
        </div>
        <div className="lonely-topics-container">
          <AddTopic />
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable
              droppableId="lonelyTopics"
              direction="horizontal"
              isCombineEnabled
            >
              {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {topics &&
                    this.state.topicsOrder
                      .map(
                        (topic, index) =>
                          (!topic.parent || !topic.parent.id) && (
                            <Draggable
                              key={topic.id}
                              draggableId={topic.id}
                              index={index}
                            >
                              {provided => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <Topic
                                    title={topic.title}
                                    topicId={topic.id}
                                    key={topic.id}
                                    index={index}
                                  />
                                </div>
                              )}
                            </Draggable>
                          )
                      )
                      .sort()}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  topics: state.dashboardReducer.topics,
  folders: state.dashboardReducer.folders
});

export default connect(mapStateToProps)(AllTopicsContainer);
