import React from 'react';
import './AllTopicsContainer.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import AddTopic from './AddTopic';
import Folder from './Folder';
import Topic from './Topic';
import Loading from '../common/Loading';

import { getTopics } from '../../controller/actions/topic';
import { getFolders } from '../../controller/actions/folder';

export class AllTopicsContainer extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    topics: PropTypes.array,
    folders: PropTypes.array
  };

  componentDidMount() {
    this.props.dispatch(getTopics());
    this.props.dispatch(getFolders());
  }

  reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    //check if destination has changed
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    //reorder
    const folders = this.reorder(
      this.state.folders,
      source.index,
      destination.index
    );
  };

  render() {
    const { topics, folders } = this.props;
    if (this.props.loading) return <Loading />;
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
        className="all-topics-container"
      >
        <section className="all-topics-container">
          <AddTopic />
          <Droppable droppableId="dashboardDroppable" direction="horizontal">
            {provided => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {folders &&
                  folders.map((folder, index) => {
                    return (
                      <Folder
                        title={folder.title}
                        folderId={folder.id}
                        key={folder.id}
                        index={index}
                      />
                    );
                  })}
                {topics &&
                  topics.map(
                    (topic, index) =>
                      (!topic.parent || !topic.parent.id) && (
                        <Topic
                          title={topic.title}
                          topicId={topic.id}
                          key={topic.id}
                          index={index}
                        />
                      )
                  )}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </section>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  topics: state.topicReducer.topics,
  folders: state.folderReducer.folders,
  loading: state.topicReducer.loading
});

export default connect(mapStateToProps)(AllTopicsContainer);
