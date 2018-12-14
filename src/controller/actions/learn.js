import api from '../api';

export const LEARN_RESET = 'LEARN_RESET';
export const LEARN_SET_TOPIC = 'LEARN_SET_TOPIC';
export const LEARN_SET_RESOURCE = 'LEARN_SET_RESOURCE';
export const LEARN_API_ERROR = 'LEARN_API_ERROR';
// Update notebook actions
export const LEARN_NOTEBOOK_UPDATE_SUBMIT = 'LEARN_NOTEBOOK_UPDATE_SUBMIT';
export const LEARN_NOTEBOOK_UPDATE_SUCCESS = 'LEARN_NOTEBOOK_UPDATE_SUCCESS';
export const LEARN_NOTEBOOK_UPDATE_ERROR = 'LEARN_NOTEBOOK_UPDATE_ERROR';

/**
 * Ensures state is not stale and populates the learn region with data.
 * If state is stale, it resets the state to the initial state.
 * @param {number | string} topicId - given by routing
 * @param {number | string} resourceId - given by routing
 */
export const initializeLearn = (topicId, resourceId) => (dispatch, getState) => {
	const currentTopic = getState().learn.topic;
	const currentResource = getState().learn.resource;

	const topicIsStale = currentTopic && currentTopic.id !== topicId;
	const resourceIsStale = currentResource && currentResource.id !== resourceId;

	if (topicIsStale || resourceIsStale) {
		dispatch(resetLearn());
	}

	return Promise.all([api.topics.get(topicId), api.resources.get(resourceId)])
		.then(([topic, resource]) => {
			dispatch(setCurrentTopic(topic));
			dispatch(setCurrentResource(resource));
		})
		.catch(err => dispatch(apiError(err)));
};

/**
 * Persist updates to a topic's notebook asynchronously.
 * @param {{id: string, notebook: {}}} req
 */
export const submitNotebookUpdate = req => dispatch => {
	dispatch(notebookUpdateSubmit());
	api.topics
		.put(req)
		.then(() => dispatch(notebookUpdateSuccess(req)))
		.catch(err => dispatch(notebookUpdateError(err)));
};

export const resetLearn = () => ({
	type: LEARN_RESET
});

export const setCurrentTopic = topic => ({
	type: LEARN_SET_TOPIC,
	payload: topic
});

export const setCurrentResource = resource => ({
	type: LEARN_SET_RESOURCE,
	payload: resource
});

export const apiError = err => ({
	type: LEARN_API_ERROR,
	payload: err
});

const notebookUpdateSubmit = () => ({
	type: LEARN_NOTEBOOK_UPDATE_SUBMIT
});

// req = { id, notebook }
const notebookUpdateSuccess = req => ({
	type: LEARN_NOTEBOOK_UPDATE_SUCCESS,
	payload: req
});

const notebookUpdateError = error => ({
	type: LEARN_NOTEBOOK_UPDATE_ERROR,
	payload: error
});
