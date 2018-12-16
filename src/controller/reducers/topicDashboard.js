import {
  RESOURCE_LOADING,
  RESOURCE_SUCCESS,
  ADD_RESOURCE,
  UPDATE_RESOURCE,
  DELETE_RESOURCE,
  RESOURCE_ERROR,
  UPDATE_RESC
} from '../actions/topicDashboard';

import produce from 'immer';

export const initialState = {
  resources: {},
  loading: false,
  error: null,
  topic: {},
  resourceOrder: []
};

export default produce((state, action) => {
  switch (action.type) {
    case RESOURCE_LOADING:
      state.loading = true;
      state.error = null;

      return;

    case RESOURCE_SUCCESS:
      state.loading = false;
      state.error = null;

      /**This function takes in an array
       * The accumulator for the reduce function starts as an empty object
       * For every iteration, the object is "built up" with the resource's id as the key
       * and the resource data(an object) as the value
       */
      function mapResourcesToObject(resources) {
        return resources.reduce((obj, resource) => {
          obj[resource.id] = resource;
          return obj;
        }, {});
      }

      state.resourceOrder = action.payload.resourceOrder;

      state.resources = mapResourcesToObject(action.payload.resources);
      // state.resources = action.payload.resources;
      // since we don't
      delete action.payload.resources;
      //add all information relating to that topic, minus the resources which were deleted above
      state.topic = action.payload;
      return;

    case RESOURCE_ERROR:
      state.loading = false;
      state.error = action.payload;

      return;
    case ADD_RESOURCE:
      state.resources.push(action.resource);
      state.loading = false;
      return;

    case UPDATE_RESOURCE:
      const updateIndex = state.resources.findIndex(
        item => item.id === action.id
      );

      if (updateIndex > -1) {
        state.resources[updateIndex] = action.resource;
      }

      return;
    case DELETE_RESOURCE:
      state.resources = action.payload;
      state.resourceOrder = action.resourceOrder;

      return;

    // case UPDATE_RESC:
    // state.resources = action.payload;

    // return;

    default:
      return;
  }
}, initialState);
