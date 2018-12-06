import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import RecentResourceItem from '../../Dashboard/RecentResourceItem';
import topicsData from '../../../dummyDB/topicsData';
import resourcesData from '../../../dummyDB/resourcesData';

describe('<RecentResourceItem />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <RecentResourceItem topics={topicsData} resources={resourcesData} />
    );
  });

  it('renders without crashing', () => {});

  it('renders ul section', () => {
    let wrapper;
    wrapper = mount(
      <RecentResourceItem topics={topicsData} resources={resourcesData} />
    );
    expect(wrapper.find('ul').children()).toHaveLength(resourcesData.length);
  });
});
