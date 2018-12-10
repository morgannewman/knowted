import {
  TOPIC_SUBMIT,
  TOPIC_SUCCESS,
  TOPIC_ERROR,
  TOPIC_DELETE
} from '../actions/topic';
import produce from 'immer';

export const initialState = {
  topics: [],
  loading: false,
  error: null,
  topicId: null
};

export default produce((state, action) => {
  switch (action.type) {
    case TOPIC_SUBMIT:
      state.loading = true;
      state.error = null;
      return;

    case TOPIC_SUCCESS:
      state.loading = false;
      state.error = null;
      state.topics = action.payload;
      return;

    case TOPIC_ERROR:
      return { ...initialState, error: action.payload };

    case TOPIC_DELETE:
      return { ...initialState };

    default:
      return;
  }
}, initialState);
