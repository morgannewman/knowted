export const TOPIC_SUBMIT = 'TOPIC_SUBMIT';
export const TOPIC_SUCCESS = 'TOPIC_SUCCESS';
export const TOPIC_ERROR = 'TOPIC_ERROR';

export const TOPIC_DELETE = 'TOPIC_DELETE';

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
