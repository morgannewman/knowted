import api from '../../controller/api';

export const TOPIC_SUBMIT = 'TOPIC_SUBMIT';
export const TOPIC_SUCCESS = 'TOPIC_SUCCESS';
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
export const addTopic = title => dispatch => {
  dispatch(topicSubmit());
  api.topics
    .post({ title })
    .then(dispatch(topicSuccess()))
    .catch(err => dispatch(topicError(err)));
};

/**
 * Components can consume this function to delete a Topic
 * On submit: state.topic.loading === true
 * On delete:
 * On fail: state.topic.error === some error object
 * @param {{id: number}} object
 */
export const deleteTopic = id => dispatch => {
  dispatch(topicSubmit());
  api.topics
    .post({ id })
    .then(() => dispatch(topicDelete()))
    .catch(err => dispatch(topicError(err)));
};

export const topicSubmit = () => ({
  type: TOPIC_SUBMIT
});

export const topicSuccess = value => ({
  type: TOPIC_SUCCESS,
  payload: value
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
