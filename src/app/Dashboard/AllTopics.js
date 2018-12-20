import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { AllTopicsContainer } from '../styles/dashboard.styles';

import AddTopic from './AddTopic';
import Folder from './Folder';
import Topic from './Topic';

import {
  mergeTopicsNewFolder,
  updateTopic
} from '../../controller/actions/dashboard';

export class AllTopics extends React.Component {
  static propTypes = {
    topics: PropTypes.array,
    folders: PropTypes.array
  };

  handleTopicCombine = (topicId1, topicId2) => {
    this.props.dispatch(
      mergeTopicsNewFolder(`Untitled Folder-${Date.now()}`, topicId1, topicId2)
    );
  };

  handleTopicFolderChange = result => {
    const { destination, draggableId } = result;
    // update folder
    const parent =
      destination.droppableId === 'lonelyTopics'
        ? null
        : Number(destination.droppableId);
    this.props.dispatch(updateTopic({ id: Number(draggableId), parent }));
  };

  onDragEnd = result => {
    console.log(result);

    const { destination, source, draggableId, combine } = result;

    //CASE: combining lone topics => creates a new folder and places items within that folder
    if (combine) {
      this.handleTopicCombine(combine.draggableId, draggableId);
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
    if (source.droppableId !== destination.droppableId) {
      this.handleTopicFolderChange(result);
    }
    // removing last item from folder => deletes folder
  };

  render() {
    const { topics, folders } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <AllTopicsContainer>
          <h2>All Topics</h2>
          <h3>Folders</h3>
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
          <h3>Topics</h3>
          <Droppable
            droppableId="lonelyTopics"
            direction="horizontal"
            isCombineEnabled
          >
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <div className="lonely-topics-container">
                  <AddTopic />
                  {topics &&
                    this.props.topics.map(
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
              </div>
            )}
          </Droppable>
        </AllTopicsContainer>
      </DragDropContext>
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

export default connect(mapStateToProps)(AllTopics);
