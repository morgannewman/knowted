import React from 'react';
import ReactDom from 'react-dom';
import { shallow, mount } from 'enzyme';
import ResourceEditForm from '../../TopicDasboard/ResourceEditForm';
import resourcesData from '../../../dummyDB/resourcesData';

const FirstResource = resourcesData[0];

describe('<ResourceEditForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ResourceEditForm resource={FirstResource.resource} />);
  });
  it('renders without crash', () => {});
});
