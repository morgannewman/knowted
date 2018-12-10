import { goFetch } from '../config';
const BASE_URL = '/api/topics';

export default {
	/**
	 * Exposes GET /api/topics.
	 * Topics have these props:
	 * id, title, parent, lastOpened, notebook,
	 * resourceOrder, created_at, updated_at.
	 * @returns {[{}]} an array of topic objects
	 */
	get() {
		return goFetch(BASE_URL);
	},

	/**
	 * Exposes POST /api/topics.
	 * Topics can be created with these props:
	 * title, parent, notebook
	 * @param {{}} body
	 * @returns {[{}]} an array of topic objects
	 */
	post(body) {
		if (!body.title) throw new Error('Missing `title` in topic request body.');
		return goFetch(BASE_URL, { method: 'POST', body });
	},

	/**
	 * Exposes PUT /api/topics.
	 * Topics can be updated with these props:
	 * title, parent, notebook, lastOpened, resourceOrder
	 * @param {{}} body
	 * @returns {[{}]} an array of topic objects
	 */
	put(body) {
		if (!body.id) throw new Error('Missing `id` in topic request body.');
		return goFetch(`${BASE_URL}/${body.id}`, { method: 'PUT', body });
	},

	/**
	 * Exposes DELETE /api/topics/:id.
	 * @param {number | string} id
	 */
	delete(id) {
		return goFetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
	}
};
