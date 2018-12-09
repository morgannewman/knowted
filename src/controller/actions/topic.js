import api from '../../controller/api';

export const TOPIC_SUBMIT = 'TOPIC_SUBMIT';
export const TOPIC_SUCCESS = 'TOPIC_SUCCESS';
export const ADD_TOPIC_SUCCESS = 'ADD_TOPIC_SUCCESS';
export const TOPIC_ERROR = 'TOPIC_ERROR';

export const TOPIC_DELETE = 'TOPIC_DELETE';

/**
 * Components can consume this function to get all Topics
 * On submit: state.topic.loading === true
 * On success: state.topic.topics === [of topics]
 * On fail: state.topic.error === some error object
 */
export const getTopics = () => dispatch => {
  dispatch(topicSubmit());
  api.topics
    .get()
    .then(topics => dispatch(topicSuccess(topics)))
    .catch(err => dispatch(topicError(err)));
};

/**
 * Components can consume this function to add a new Topic
 * On submit: state.topic.loading === true
 * On success: state.topic.topics === [of topics]
 * On fail: state.topic.error === some error object
 * @param {{title: string}} object
 */
//FIXME: Line 39 I am calling getTopics again in order to refresh topics on dashboard
// tried calling this inside of a componentDidUpdate within the AllTopicsContainer and it triggered some
// weird behavior (calling GET non-stop). Need to rethink how this is working - clearly something
// wrong with how it's written
export const addTopic = title => dispatch => {
  dispatch(topicSubmit());
  api.topics
    .post({ title })
    .then(topic => dispatch(addTopicSuccess(topic)))
    .catch(err => dispatch(topicError(err)));
};

/**
 * Components can consume this function to delete a Topic
 * On submit: state.topic.loading === true
 * On delete:
 * On fail: state.topic.error === some error object
 * @param {{id: number}} object
 */
//FIXME: same issue as above on line 56
export const deleteTopic = id => dispatch => {
  dispatch(topicSubmit());
  api.topics
    .delete(id)
    .then(() => dispatch(topicDelete(id)))
    .catch(err => dispatch(topicError(err)));
};

export const topicSubmit = () => ({
  type: TOPIC_SUBMIT
});

export const addTopicSuccess = topic => ({
  type: ADD_TOPIC_SUCCESS,
  payload: topic
});

export const topicSuccess = topics => ({
  type: TOPIC_SUCCESS,
  payload: topics
});

export const topicError = err => ({
  type: TOPIC_ERROR,
  payload: err
});

export const topicDelete = topicId => {
  return {
    type: TOPIC_DELETE,
    payload: topicId
  };
};
