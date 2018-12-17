import { goFetch } from '../config';
const BASE_URL = '/api/users';

export default {
  /**
   * Exposes GET /api/users/:id.
   * Users have these props:
   * id, email, name, password: hashed, topicOrder
   * @param {number | string} id
   * @returns {{}} a user object
   */
  getOne(id) {
    return goFetch(`${BASE_URL}/${id}`);
  },

  /**
   * Exposes PUT /api/users.
   * Users can be updated with these props:
   * topicOrder
   * @param {{id, topicOrder}} body
   * @returns {{}} a user object
   */
  put(topicOrder, id) {
    if (!id) throw new Error('Missing `id` in topic request body.');
    return goFetch(`${BASE_URL}/${id}`, { method: 'PUT', topicOrder });
  }
};
