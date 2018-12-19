import {
	DASHBOARD_POPULATE_SUCCESS,
	ADD_TOPIC_SUCCESS,
	UPDATE_TOPIC_SUCCESS,
	UPDATE_TOPIC_PARENT_SUCCESS,
	DELETE_TOPIC_SUCCESS,
	UPDATE_TOPIC_ORDER_SUCCESS,
	DISPLAY_EDIT_FOLDER_FORM,
	HIDE_EDIT_FOLDER_FORM,
	ADD_FOLDER_SUCCESS,
	UPDATE_FOLDER_SUCCESS,
	API_ERROR,
	UPDATE_TOPIC_SUBMIT
} from '../actions/dashboard';
import produce from 'immer';

const initialState = {
	topics: [],
	lonelyTopics: null,
	folders: null,
	folderOrder: null,
	recentResources: null,
	editingFolder: false,
	currentFolderId: null,
	loading: true,
	error: null
};

export default produce((state, action) => {
	switch (action.type) {
		case DASHBOARD_POPULATE_SUCCESS: {
			const { folders, topics, recentResources } = action.payload;

			state.error = null;
			state.recentResources = recentResources;
			state.loading = false;

			// Hydrate folders
			let folderObject = {};
			let folderOrder = [];
			for (const folder of folders) {
				const id = folder.id;
				// Add each folder ID to folderOrder
				folderOrder.push(id);
				// Add each folder to folder object
				folderObject[id] = folder;
				// Add a topics array for the topic IDs each folder owns
				folderObject[id].topics = [];
			}
			state.folders = folderObject;
			state.folderOrder = folderOrder;

			// Hydrate topics
			let topicObject = {};
			let lonelyTopics = [];
			for (const topic of topics) {
				const id = topic.id;
				topicObject[id] = topic;
				if (topic.parent === null) {
					lonelyTopics.push(id);
				} else {
					const parent = topic.parent.id;
					state.folders[parent].topics.push(id);
				}
			}
			state.lonelyTopics = lonelyTopics;
			state.topics = topicObject;
			return;
		}

		case ADD_TOPIC_SUCCESS: {
			state.loading = false;
			state.error = null;
			const topic = action.payload;
			state.lonelyTopics.unshift(topic.id);
			state.topics[topic.id] = topic;
			return;
		}

		case UPDATE_TOPIC_SUCCESS: {
			state.loading = false;
			state.error = null;
			// const topicIndex = state.topics.findIndex(item => item.id === action.payload.id);
			// if (topicIndex > -1) {
			// 	state.topics[topicIndex].title = action.payload.title;
			// }
			return;
		}

		case UPDATE_TOPIC_PARENT_SUCCESS: {
			state.loading = false;
			state.error = null;
			const topicParentIndex = state.topics.findIndex(item => item.id === action.payload.id);
			if (topicParentIndex > -1) {
				state.topics[topicParentIndex].parent = action.payload.parent;
			}
			return;
		}

		case DELETE_TOPIC_SUCCESS: {
			const deleteTopicIndex = state.topics.findIndex(item => item.id === action.payload);
			if (deleteTopicIndex > -1) {
				state.topics.splice(deleteTopicIndex, 1);
			}
			state.loading = false;
			return;
		}

		case UPDATE_TOPIC_ORDER_SUCCESS: {
			state.loading = false;
			state.error = null;
			state.topicOrder = action.payload;
			return;
		}

		case ADD_FOLDER_SUCCESS: {
			state.loading = false;
			state.error = null;
			state.folders.unshift(action.payload);
			return;
		}

		case UPDATE_FOLDER_SUCCESS: {
			state.loading = false;
			state.error = null;
			const folderIndex = state.folders.findIndex(item => item.id === action.payload.id);
			if (folderIndex > -1) {
				state.folders[folderIndex].title = action.payload.title;
			}
			return;
		}

		case DISPLAY_EDIT_FOLDER_FORM: {
			state.error = null;
			state.currentFolderId = action.payload;
			state.editingFolder = true;
			return;
		}

		case HIDE_EDIT_FOLDER_FORM: {
			state.error = null;
			state.currentFolderId = null;
			state.editingFolder = false;
			return;
		}

		case UPDATE_TOPIC_SUBMIT: {
			const topic = state.topics.findIndex(topic => topic.id === action.payload.id);
			if (topic > -1) {
				// replace existing contents with new body optimistically
				state.topics[topic] = { ...state.topics[topic], ...action.payload };
			}
			return;
		}

		case API_ERROR: {
			return { ...initialState, error: action.payload };
		}

		default:
			return;
	}
}, initialState);
