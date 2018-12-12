import { goFetch } from '../config';
const BASE_URL = '/api/metadata';

// In metadata file (endpoint)
// set BASE_URL at top of file to /api/metadata

export default {
  get(uri) {
    return goFetch(
      BASE_URL,
      {
        method: 'GET',
        auth: false
      },
      { uri }
    );
  }
};
