import api from '../../controller/api';

export const initializeDashboard = num => dispatch => {
  return Promise.all([
    api.folders.get(),
    api.topics.get(),
    api.resources.recent(num)
    // api.users.get()
  ])
    .then(([folders, topics, recentResources, topicOrder]) => {
      dispatch(
        dashboardPopulateSuccess({
          folders,
          topics,
          recentResources,
          topicOrder
        })
      );
    })
    .catch(err => dispatch(apiError(err)));
};

//-- TOPIC ASYNC --

/**
 * Components can consume this function to add a new Topic
 * On submit: state.topic.loading === true
 * On success: state.topic.topics === [of topics]
 * On fail: state.topic.error === some error object
 * @param {{title: string}} object
 */
export const addTopic = title => dispatch => {
  api.topics
    .post({ title })
    .then(topic => dispatch(addTopicSuccess(topic)))
    .catch(err => dispatch(apiError(err)));
};

/**
 * Components can consume this function to update a Topic
 * On submit: state.topic.loading === true
 * On success: state.topic.topics === [of topics]
 * On fail: state.topic.error === some error object
 * @param {{title: string, id: number}} object
 */
export const updateTopic = (title, id) => dispatch => {
  api.topics
    .put({ title, id })
    .then(topic => dispatch(updateTopicSuccess(topic)))
    .catch(err => dispatch(apiError(err)));
};

/**
 * Components can consume this function to delete a Topic
 * On submit: state.topic.loading === true
 * On delete:
 * On fail: state.topic.error === some error object
 * @param {{id: number}} object
 */
export const deleteTopic = id => dispatch => {
  api.topics
    .delete(id)
    .then(() => dispatch(deleteTopicSuccess(id)))
    .catch(err => dispatch(apiError(err)));
};

/**
 * Components can consume this function to update the topic order
 * On submit: state.topic.loading === true
 * On success: state.topic.topics === [of topics]
 * On fail: state.topic.error === some error object
 * @param {{id: number}} object
 */
export const updateTopicOrder = (topicOrder, userId) => dispatch => {
  api.users
    .put({ topicOrder, userId })
    .then(topics => dispatch(updateTopicOrderSuccess(topics)))
    .catch(err => dispatch(apiError(err)));
};

//-- FOLDER ASYNC --

/**
 * Components can consume this function to update a Topic
 * On submit: state.topic.loading === true
 * On success: state.topic.topics === [of topics]
 * On fail: state.topic.error === some error object
 * @param {{title: string, id: number}} object
 */
export const updateFolder = (title, id) => dispatch => {
  api.folders
    .put({ title, id })
    .then(folder => dispatch(updateFolderSuccess(folder)))
    .catch(err => dispatch(apiError(err)));
};

//-----------------------------------------------------------

export const DASHBOARD_POPULATE_SUCCESS = 'DASHBOARD_POPULATE_SUCCESS';
export const dashboardPopulateSuccess = data => ({
  type: DASHBOARD_POPULATE_SUCCESS,
  payload: data
});

export const API_ERROR = 'API_ERROR';
export const apiError = err => ({
  type: API_ERROR,
  payload: err
});

// -- TOPIC ACTIONS --
export const ADD_TOPIC_SUCCESS = 'ADD_TOPIC_SUCCESS';
export const addTopicSuccess = topic => ({
  type: ADD_TOPIC_SUCCESS,
  payload: topic
});

export const UPDATE_TOPIC_SUCCESS = 'UPDATE_TOPIC_SUCCESS';
export const updateTopicSuccess = topic => ({
  type: UPDATE_TOPIC_SUCCESS,
  payload: topic
});

export const DELETE_TOPIC_SUCCESS = 'DELETE_TOPIC_SUCCESS';
export const deleteTopicSuccess = topicId => {
  return {
    type: DELETE_TOPIC_SUCCESS,
    payload: topicId
  };
};

export const UPDATE_TOPIC_ORDER_SUCCESS = 'UPDATE_TOPIC_ORDER_SUCCESS';
export const updateTopicOrderSuccess = topics => ({
  type: UPDATE_TOPIC_ORDER_SUCCESS,
  payload: topics
});

//-- FOLDER ACTIONS --

export const UPDATE_FOLDER_SUCCESS = 'UPDATE_FOLDER_SUCCESS';
export const updateFolderSuccess = folder => ({
  type: UPDATE_FOLDER_SUCCESS,
  payload: folder
});
