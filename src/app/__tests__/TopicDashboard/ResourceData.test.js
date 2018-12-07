import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import ResourceData from '../../TopicDasboard/ResourceData';
import topicsData from '../../../dummyDB/topicsData';
import resourcesData from '../../../dummyDB/resourcesData';

const FirstResource = resourcesData[0];

describe('<ResourceData />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ResourceData resource={FirstResource.resource} />);
  });

  it('renders without crashing', () => {});

  it('renders links', () => {
    expect(wrapper.find('resource-view a')).toBeTruthy();
  });

  it('renders first link as the resource title', () => {
    expect(
      wrapper
        .find('a')
        .first()
        .text()
    ).toEqual(FirstResource.resource.title);
  });

  it('renders last link as the resource uri', () => {
    expect(
      wrapper
        .find('a')
        .last()
        .text()
    ).toEqual(FirstResource.resource.uri);
  });
});
