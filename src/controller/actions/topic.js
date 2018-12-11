import api from '../../controller/api';

export const TOPIC_SUBMIT = 'TOPIC_SUBMIT';
export const TOPIC_SUCCESS = 'TOPIC_SUCCESS';
export const ADD_TOPIC_SUCCESS = 'ADD_TOPIC_SUCCESS';
export const TOPIC_ERROR = 'TOPIC_ERROR';
export const TOPIC_DELETE = 'TOPIC_DELETE';
// Update notebook actions
export const TOPIC_NOTEBOOK_UPDATE_SUBMIT = 'TOPIC_NOTEBOOK_UPDATE_SUBMIT';
export const TOPIC_NOTEBOOK_UPDATE_SUCCESS = 'TOPIC_NOTEBOOK_UPDATE_SUCCESS';
export const TOPIC_NOTEBOOK_UPDATE_ERROR = 'TOPIC_NOTEBOOK_UPDATE_ERROR';

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
export const deleteTopic = id => dispatch => {
	dispatch(topicSubmit());
	api.topics
		.delete(id)
		.then(() => dispatch(topicDelete(id)))
		.catch(err => dispatch(topicError(err)));
};

/**
 * Persist updates to a topic's notebook asynchronously.
 * @param {{id: string, notebook: {}}} req
 */
export const submitTopicNotebookUpdate = req => dispatch => {
	dispatch(topicNotebookUpdateSubmit());
	api.topics
		.put(req)
		.then(() => dispatch(topicNotebookUpdateSuccess(req)))
		.catch(err => dispatch(topicNotebookUpdateError(err)));
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

const topicNotebookUpdateSubmit = () => ({
	type: TOPIC_NOTEBOOK_UPDATE_SUBMIT
});

// req = { id, notebook }
const topicNotebookUpdateSuccess = req => ({
	type: TOPIC_NOTEBOOK_UPDATE_SUCCESS,
	payload: { req }
});

const topicNotebookUpdateError = error => ({
	type: TOPIC_NOTEBOOK_UPDATE_ERROR,
	payload: error
});
