import {
  DASHBOARD_POPULATE_SUCCESS,
  ADD_TOPIC_SUCCESS,
  UPDATE_TOPIC_SUCCESS,
  UPDATE_TOPIC_PARENT_SUCCESS,
  DELETE_TOPIC_SUCCESS,
  UPDATE_TOPIC_ORDER_SUCCESS,
  ADD_FOLDER_SUCCESS,
  UPDATE_FOLDER_SUCCESS,
  API_ERROR
} from '../actions/dashboard';
import produce from 'immer';

const initialState = {
  topics: [],
  folders: null,
  recentResources: null,
  topicOrder: [],
  loading: true,
  error: null
};

export default produce((state, action) => {
  switch (action.type) {
    case DASHBOARD_POPULATE_SUCCESS:
      state.error = null;
      const { folders, topics, recentResources, topicOrder } = action.payload;
      state.folders = folders;
      state.topics = topics;
      state.recentResources = recentResources;
      state.topicOrder = topicOrder;
      state.loading = false;
      return;

    case ADD_TOPIC_SUCCESS:
      state.loading = false;
      state.error = null;
      state.topics.unshift(action.payload);
      return;

    case UPDATE_TOPIC_SUCCESS:
      state.loading = false;
      state.error = null;
      const topicIndex = state.topics.findIndex(
        item => item.id === action.payload.id
      );
      if (topicIndex > -1) {
        state.topics[topicIndex].title = action.payload.title;
      }
      return;

    case UPDATE_TOPIC_PARENT_SUCCESS:
      state.loading = false;
      state.error = null;
      const topicParentIndex = state.topics.findIndex(
        item => item.id === action.payload.id
      );
      if (topicParentIndex > -1) {
        state.topics[topicParentIndex].parent = action.payload.parent;
      }
      return;

    case DELETE_TOPIC_SUCCESS:
      const deleteTopicIndex = state.topics.findIndex(
        item => item.id === action.payload
      );
      if (deleteTopicIndex > -1) {
        state.topics.splice(deleteTopicIndex, 1);
      }
      state.loading = false;
      return;

    case UPDATE_TOPIC_ORDER_SUCCESS:
      state.loading = false;
      state.error = null;
      state.topicOrder = action.payload;
      return;

    case ADD_FOLDER_SUCCESS:
      state.loading = false;
      state.error = null;
      state.folders.unshift(action.payload);
      return;

    case UPDATE_FOLDER_SUCCESS:
      state.loading = false;
      state.error = null;
      const folderIndex = state.folders.findIndex(
        item => item.id === action.payload.id
      );
      if (folderIndex > -1) {
        state.folders[folderIndex].title = action.payload.title;
      }
      return;

    case API_ERROR:
      return { ...initialState, error: action.payload };

    default:
      return;
  }
}, initialState);
