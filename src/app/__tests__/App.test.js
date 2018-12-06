import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TopicDashboard from '../TopicDasboard';

it('renders without crashing', () => {
  shallow(<TopicDashboard />);
});
