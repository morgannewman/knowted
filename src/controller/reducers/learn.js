import produce from 'immer';
import { LEARN_RESET, LEARN_SET_TOPIC, LEARN_SET_RESOURCE, LEARN_API_ERROR } from '../actions/learn';

const initialState = {
	topic: null,
	resource: null,
	loading: true,
	error: null
};

export default produce((state, action) => {
	switch (action.type) {
		case LEARN_RESET:
			return { ...initialState };

		case LEARN_API_ERROR:
			return { ...initialState, error: action.payload };

		case LEARN_SET_TOPIC:
			state.topic = action.payload;
			return;

		case LEARN_SET_RESOURCE:
			state.resource = action.payload;
			return;

		default:
			return;
	}
}, initialState);
