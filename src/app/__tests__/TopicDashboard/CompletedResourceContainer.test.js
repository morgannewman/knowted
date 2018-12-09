import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CompletedResourceContainer from '../../TopicDasboard/CompletedResourceContainer';
import resourcesData from '../../../dummyDB/resourcesData';

describe('ActiveResouceContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CompletedResourceContainer resources={resourcesData} />);
  });
  it('renders without crashing', () => {});
});
