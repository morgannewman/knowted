import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';
import ResourceItem from '../../TopicDasboard/ResourceItem';
import resourcesData from '../../../dummyDB/resourcesData';

const FirstResource = resourcesData[0].resource;

const initialState = {
  editing: false
};
describe('ResourceItem', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ResourceItem {...initialState} resource={FirstResource} />
    );
  });

  it('renders without crashing', () => {});
});
