import api from '../api';

export const LEARN_RESET = 'LEARN_RESET';
export const LEARN_SET_TOPIC = 'LEARN_SET_TOPIC';
export const LEARN_SET_RESOURCE = 'LEARN_SET_RESOURCE';
export const LEARN_API_ERROR = 'LEARN_API_ERROR';

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
