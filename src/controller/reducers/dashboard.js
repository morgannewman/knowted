import {
	DASHBOARD_POPULATE_SUCCESS,
	ADD_TOPIC_SUCCESS,
	UPDATE_TOPIC_SUCCESS,
	UPDATE_TOPIC_PARENT_SUCCESS,
	DELETE_TOPIC_SUCCESS,
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
			const parent = topic.parent && topic.parent.id;
			const targetArray = parent ? state.folders[parent].topics : state.lonelyTopics;
			targetArray.unshift(topic.id);
			state.topics[topic.id] = topic;
			return;
		}

		case UPDATE_TOPIC_SUCCESS: {
			state.loading = false;
			state.error = null;
			const topic = action.payload;
			state.topics[topic.id] = topic;
			return;
		}

		case UPDATE_TOPIC_PARENT_SUCCESS: {
			state.loading = false;
			state.error = null;

			const topicId = action.payload.id;
			const topic = action.payload;

			// Locate the ordering locations
			const prevParent = state.topics[topicId].parent && state.topics[topicId].parent.id;
			const newParent = topic.parent && topic.parent.id;
			const prevArr = prevParent ? state.folders[prevParent].topics : state.lonelyTopics;
			const newArr = newParent ? state.folders[newParent].topics : state.lonelyTopics;

			// Remove from old ordering location
			const index = prevArr.findIndex(id => String(id) === String(topicId));
			prevArr.splice(index, 1);

			// Add to new ordering location
			newArr.unshift(topicId);

			// Update topics object
			state.topics[topicId] = topic;
			return;
		}

		case DELETE_TOPIC_SUCCESS: {
			state.loading = false;

			const topic = action.payload;
			const parent = topic.parent && topic.parent.id;

			// Find which ordering array references the topic
			let targetArray = parent ? state.folders[parent].topics : state.lonelyTopics;
			const index = targetArray.findIndex(id => String(id) === String(topic.id));

			// Remove topic from ordering array
			if (index > -1) targetArray.splice(index, 1);

			// Remove topic from topic object
			delete state.topics[topic.id];

			return;
		}

		case ADD_FOLDER_SUCCESS: {
			state.loading = false;
			state.error = null;
			const folder = action.payload;
			folder.topics = [];
			console.log(folder);
			state.folderOrder.unshift(folder.id);
			state.folders[folder.id] = folder;
			return;
		}

		case UPDATE_FOLDER_SUCCESS: {
			state.loading = false;
			state.error = null;
			const folder = action.payload;
			// Preserve topics array
			folder.topics = state.folders[folder.id].topics;
			state.folders[folder.id] = folder;
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
			const topic = action.payload;
			// replace existing contents with new body optimistically
			state.topics[topic.id] = { ...state.topics[topic.id], ...action.payload };
			return;
		}

		case API_ERROR: {
			state.error = action.payload;
			return;
		}

		default:
			return;
	}
}, initialState);
