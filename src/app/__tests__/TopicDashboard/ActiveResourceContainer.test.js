import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { ActiveResourceContainer } from '../../TopicDasboard/ActiveResourceContainer';
import resourcesData from '../../../dummyDB/resourcesData';

describe('ActiveResouceContainer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ActiveResourceContainer resources={resourcesData} />);
  });
  it('renders without crashing', () => {});
});
