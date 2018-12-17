import api from '../../controller/api';

export const RESOURCE_LOADING = 'RESOURCE_LOADING';
export const resourceLoading = () => ({
  type: RESOURCE_LOADING
});

export const RESOURCE_SUCCESS = 'RESOURCE_SUCCESS';
export const resourceSuccess = data => ({
  type: RESOURCE_SUCCESS,
  payload: data
});

export const RESOURCE_ERROR = 'RESOURCE_ERROR';
export const resourceError = error => ({
  type: RESOURCE_ERROR,
  payload: error
});

export const ADD_RESOURCE = 'ADD_RESOURCE';
export const addResource = resource => ({
  type: ADD_RESOURCE,
  payload: resource
});

export const UPDATE_RESOURCE = 'UPDATE_RESOURCE';
export const updateResource = resource => ({
  type: UPDATE_RESOURCE,
  payload: resource
});

/**
 *Gets all resources belonging to a parent
 *First dispatches a loading function to change state to loading
 *Second: Sends GET request to the server using api.resources
 * Third: Dispatches resource_success action to add new data from server to current state
 * If there is an error, it dispatches an error obj to state
 * *@param {{id:integer}}} id
 */
export const initializeTopicDasbhoard = id => dispatch => {
  dispatch(resourceLoading());
  api.topics
    .getOne(id)
    .then(data => {
      dispatch(resourceSuccess(data));
    })
    .catch(err => {
      console.log(err);
      dispatch(resourceError(err));
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
export const submitResource = (parent, title, uri, type) => (
  dispatch,
  getState
) => {
  const body = { parent, title, uri, type };

  console.log(body);
  api.resources
    .post(body)
    .then(data => {
      dispatch(addResource(data));
    })
    .then(() => {
      const resourceOrder = getState().topicDashReducer.resourceOrder;
      console.log(resourceOrder);
      api.topics.put({
        id: body.parent,
        resourceOrder: JSON.stringify(resourceOrder)
      });
    })
    .catch(err => {
      console.log(err);
      dispatch(resourceError(err));
    });
};

/**
 * Updates a single resource
 * First: Sends PUT request to the server using api.resources
 *  Second: disptaches action update_resources that saves updated resources object in state
 * If there is an error, it dispatches an error obj to state and console.log error
 *  This function does not make a request to the server for all of the resources again.
 * * @param {{id: integer}, {body:object}}
 */
//TODO: remove console.logs
export const updateSingleResource = (id, body) => dispatch => {
  api.resources
    .put(body)
    .then(data => {
      dispatch(updateResource(data));
    })
    .catch(error => dispatch(resourceError(error)));
};

export const UPDATE_RESC_ORDER = 'UPDATE_RESC_ORDER';
export const updateRescourceOrder = rescOrder => ({
  type: UPDATE_RESC_ORDER,
  payload: rescOrder
});
export const DELETE_RESOURCE = 'DELETE_RESOURCE';
export const delResource = id => ({
  type: DELETE_RESOURCE,
  id
});
/**
 * Deletes a single resource
 * First sends DELETE request to server
 * Second: On delete success dispatches action to remove item from state
 * If there is an error, it dispatches an error obj to state and console.log error
 * * @param {{id: integer}}
 */

export const deleteResource = (resourceId, topicId) => (dispatch, getState) => {
  console.log(resourceId);

  api.resources
    .delete(resourceId)
    .then(res => {
      const newOrder = getState().topicDashReducer.resourceOrder.filter(
        item => {
          console.log(item, resourceId);
          return item !== Number(resourceId);
        }
      );
      console.log(newOrder);
      return api.topics.put({
        id: topicId,
        resourceOrder: JSON.stringify(newOrder)
      });
    })
    .then(res => {
      console.log(res);
      dispatch(delResource(Number(resourceId)));
      dispatch(updateRescourceOrder(res.resourceOrder));
    })
    .catch(error => dispatch(resourceError(error)));
};
