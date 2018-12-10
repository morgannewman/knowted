import api from '../../controller/api';

export const RESOURCE_LOADING = 'RESOURCE_LOADING';
export const resource_Loading = () => ({
  type: RESOURCE_LOADING
});

export const RESOURCE_SUCCESS = 'RESOURCE_SUCCESS';
export const resource_success = resources => ({
  type: RESOURCE_SUCCESS,
  payload: resources
});

export const get_resources = id => dispatch => {};
