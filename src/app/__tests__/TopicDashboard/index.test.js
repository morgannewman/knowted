import React from 'react';
import { shallow } from 'enzyme';
import TopicDashboard from '../../TopicDasboard';

describe('<TopicDashboard />', () => {
  it('renders without crashing', () => {
    shallow(<TopicDashboard />);
  });
});
