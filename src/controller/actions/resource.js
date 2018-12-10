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

export const RESOURCE_ERROR = 'RESOURCE_ERROR';
export const resource_error = error => ({
  type: RESOURCE_ERROR,
  payload: error
});

export const SET_TOPICID = 'SET_TOPICID';
export const set_topicId = id => ({
  type: SET_TOPICID,
  id
});

/**
 * Components can consume this function to get resources belonging to a topic.
 * First dispatches a loading function to change state to loading
 * Second: Sends request to the server using api.resources
 * Third: Dispatches resource success that changes loading back to false
 * If there is an error, it dispatches an error obj to state
 * * @param {{id: integer}}
 */
export const get_resources = id => dispatch => {
  dispatch(resource_loading());
  api.resources
    .get(id)
    .then(data => dispatch(resource_success(data)))
    .catch(err => {
      console.log(err);
      dispatch(resource_error(err));
    });
};

// export const add_resources = body => dispatch => {
//   dispatch(resource_loading());
//   api.resources
//     .get(id)
//     .then(data => dispatch(resource_success(data)))
//     .catch(err => {
//       console.log(err);
//       dispatch(resource_error(err));
//     });
// };
