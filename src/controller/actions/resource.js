import api from '../../controller/api';

export const RESOURCE_LOADING = 'RESOURCE_LOADING';
export const resource_loading = () => ({
  type: RESOURCE_LOADING
});

export const RESOURCE_SUCCESS = 'RESOURCE_SUCCESS';
export const resource_success = resources => ({
  type: RESOURCE_SUCCESS,
  payload: resources
});

export const RECENT_RESOURCE_SUCCESS = 'RECENT_RESOURCE_SUCCESS';
export const recent_resource_success = recentResources => ({
  type: RECENT_RESOURCE_SUCCESS,
  payload: recentResources
});

export const RESOURCE_ERROR = 'RESOURCE_ERROR';
export const resource_error = error => ({
  type: RESOURCE_ERROR,
  payload: error
});

export const SET_PARENT = 'SET_PARENT';
export const set_parent = parent => ({
  type: SET_PARENT,
  payload: parent
});

export const ADD_RESOURCE = 'ADD_RESOURCE';
export const add_resource = resource => ({
  type: ADD_RESOURCE,
  resource
});

export const UPDATE_RESOURCE = 'UPDATE_RESOURCE';
export const update_resource = (resource, id) => ({
  type: UPDATE_RESOURCE,
  resource,
  id
});

export const DELETE_RESOURCE = 'DELETE_RESOURCES';
export const del_resource = id => ({
  type: DELETE_RESOURCE,
  id
});

/**
 *Gets all resources belonging to a parent
 *First dispatches a loading function to change state to loading
 *Second: Sends GET request to the server using api.resources
 * Third: Dispatches resource_success action to add new data from server to current state
 * If there is an error, it dispatches an error obj to state
 * *@param {{id:integer}}} id
 */
export const get_resources = id => dispatch => {
  dispatch(resource_loading());
  api.resources
    .get(id)
    .then(data => {
      dispatch(resource_success(data));
      dispatch(set_parent(data[0].parent));
    })
    .catch(err => {
      console.log(err);
      dispatch(resource_error(err));
    });
};

/**
 * Gets 3 most recently viewed resources
 * First dispatches a loading function to change state to loading
 * Second: Sends GET request to the server using api.resources
 * Third: Dispatches resource_success action to add new data from server to current state
 * If there is an error, it dispatches an error obj to state
 * *@param {{}}
 */
export const getMostRecentResources = num => dispatch => {
  dispatch(resource_loading());
  api.resources
    .recent(num)
    .then(data => {
      dispatch(recent_resource_success(data));
    })
    .catch(err => {
      console.log(err);
      dispatch(resource_error(err));
    });
};

/**
 * Adds resources belonging to a topic.
 * First dispatches a loading function to change state to loading
 * Second: Sends post request to the server using api.resources
 * Third: Dispatches add_resource() action new data from server to current state
 * If there is an error, it dispatches an error obj to state
 * This function does not make a request to the server for all of the resources again.
 * Only a single item is added to pre-existing state
 * * @param {{parent: integer, title:string, url:string}}
 */
export const addResource = (parent, title, uri, type) => dispatch => {
  dispatch(resource_loading());
  const body = { parent, title, uri, type };
  api.resources
    .post(body)
    .then(data => dispatch(add_resource(data)))
    .catch(err => {
      console.log(err);
      dispatch(resource_error(err));
    });
};

/**
 * Updates a single resource
 * First: Sends PUT request to the server using api.resources
 *Second: disptaches action update_resources that saves updated resources array in state
 * If there is an error, it dispatches an error obj to state and console.log error
 *  This function does not make a request to the server for all of the resources again.
 * * @param {{id: integer}, {body:object}}
 */
//TODO: remove console.logs
export const update_single_resource = (id, body) => dispatch => {
  api.resources
    .put(body)
    .then(data => {
      dispatch(update_resource(data, id));
    })
    .catch(error => dispatch(resource_error(error)));
};

/**
 * Deletes a single resource
 * First sends DELETE request to server
 * Second: On delete success dispatches action to remove item from state
 * If there is an error, it dispatches an error obj to state and console.log error
 * * @param {{id: integer}}
 */

export const delete_resource = id => dispatch => {
  api.resources
    .delete(id)
    .then(() => dispatch(del_resource(Number(id))))
    .catch(error => dispatch(resource_error(error)));
};
