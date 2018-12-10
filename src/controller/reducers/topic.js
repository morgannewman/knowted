import {
	TOPIC_SUBMIT,
	TOPIC_SUCCESS,
	ADD_TOPIC_SUCCESS,
	TOPIC_ERROR,
	TOPIC_DELETE,
	TOPIC_NOTEBOOK_UPDATE_SUBMIT,
	TOPIC_NOTEBOOK_UPDATE_SUCCESS,
	TOPIC_NOTEBOOK_UPDATE_ERROR
} from '../actions/topic';
import produce from 'immer';

export const initialState = {
	topics: [],
	loading: false,
	error: null,
	topicId: null
};

export default produce((state, action) => {
	switch (action.type) {
		case TOPIC_SUBMIT:
			state.loading = true;
			state.error = null;
			return;

		case ADD_TOPIC_SUCCESS:
			state.loading = false;
			state.error = null;
			state.topics.push(action.payload);
			return;

		case TOPIC_SUCCESS:
			state.loading = false;
			state.error = null;
			state.topics = action.payload;
			return;

		case TOPIC_ERROR:
			return { ...initialState, error: action.payload };

		case TOPIC_DELETE:
			const index = state.topics.findIndex(item => item.id === action.payload);
			if (index > -1) {
				state.topics.splice(index, 1);
			}
			return;

		case TOPIC_NOTEBOOK_UPDATE_SUBMIT:
			state.loading = true;
			state.error = null;
			return;

		case TOPIC_NOTEBOOK_UPDATE_SUCCESS:
			state.loading = false;
			state.error = null;
			const topic = state.topics.find(item => item.id === action.payload.id);
			if (topic) topic.notebook = action.payload.notebook;
			return;

		case TOPIC_NOTEBOOK_UPDATE_ERROR:
			state.loading = false;
			state.error = action.payload;
			return;

		default:
			return;
	}
}, initialState);
