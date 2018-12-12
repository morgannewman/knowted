import React from 'react';
import { shallow } from 'enzyme';
import { TopicDashboard } from '../../TopicDasboard';

const initialState = {
  resources: [],
  loading: false,
  error: null,
  topicId: null,
  feedback: null,
  newURI: null,
  dispatch: jest.fn()
};

describe('<TopicDashboard />', () => {
  it('renders without crashing', () => {
    shallow(<TopicDashboard {...initialState} />);
  });
});
