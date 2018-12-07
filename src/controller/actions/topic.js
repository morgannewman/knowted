import api from '../../controller/api';

export const TOPIC_SUBMIT = 'TOPIC_SUBMIT';
export const TOPIC_SUCCESS = 'TOPIC_SUCCESS';
export const TOPIC_ERROR = 'TOPIC_ERROR';

export const TOPIC_DELETE = 'TOPIC_DELETE';

/**
 * Components can consume this function to add a new Topic
 * On submit: state.topic.loading === true
 * On success: state.topic.topics === [of topics]
 * On fail: state.topic.error === some error object
 * @param {{title: string}} credentials
 */
export const submitTopic = credentials => dispatch => {
  dispatch(topicSubmit());
  api.auth
    .login(credentials)
    .then(title => dispatch(topicSuccess(title)))
    .catch(err => dispatch(topicError(err)));
};

export const topicSubmit = () => ({
  type: TOPIC_SUBMIT
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
