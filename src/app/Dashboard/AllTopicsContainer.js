import React from 'react';
import './AllTopicsContainer.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import AddTopic from './AddTopic';
import Folder from './Folder';
import Topic from './Topic';

import {
  updateTopicOrder,
  mergeTopicsNewFolder
} from '../../controller/actions/dashboard';

export class AllTopicsContainer extends React.Component {
  static propTypes = {
    topics: PropTypes.array,
    folders: PropTypes.array
  };

  combine = (topicId1, topicId2) => {
    this.props.dispatch(
      mergeTopicsNewFolder(`Untitled Folder ${Date.now()}`, topicId1, topicId2)
    );
  };

  // reorder = (list, startIndex, endIndex) => {
  //   const result = Array.from(list);
  //   const [removed] = result.splice(startIndex, 1);
  //   result.splice(endIndex, 0, removed);
  //   return result;
  // };

  onDragEnd = result => {
    const { destination, source, draggableId, combine } = result;

    //CASE: combining lone topics => creates a new folder and places items within that folder
    if (combine) {
      this.combine(combine.draggableId, draggableId);
    }

    // CASE: not reordered
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    // TODO: CASE: Move to other list (different droppable id)
    // removing last item from folder => deletes folder

    // //reorder
    // const topics = this.reorder(
    //   this.props.topicOrder,
    //   source.index,
    //   destination.index
    // );

    // this.props.dispatch(updateTopicOrder(topics, this.props.userId));
  };

  render() {
    const { topics, folders } = this.props;
    return (
      <section className="all-topics-container">
        <div className="folders-container">
          {folders &&
            folders.map((folder, index) => {
              return (
                <Folder
                  title={folder.title}
                  folderId={folder.id}
                  key={folder.id}
                  index={index}
                  editing={
                    folder.id === this.props.currentFolderId
                      ? this.props.currentFolderId
                      : null
                  }
                />
              );
            })}
        </div>
        <div className="lonely-topics-container">
          <AddTopic />
          <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable
              droppableId="lonelyTopics"
              direction="horizontal"
              isCombineEnabled
            >
              {provided => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {topics &&
                    this.props.topics
                      // this.state.topicOrder
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
                      )}

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

const mapStateToProps = state => {
  // console.log(state.dashboardReducer);
  return {
    topics: state.dashboardReducer.topics,
    // topicOrder: state.dashboardReducer.topicOrder,
    folders: state.dashboardReducer.folders,
    currentFolderId: state.dashboardReducer.currentFolderId,
    userId: state.auth.user.id
  };
};

export default connect(mapStateToProps)(AllTopicsContainer);
