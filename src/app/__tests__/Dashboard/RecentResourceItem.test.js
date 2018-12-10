import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import RecentResourceItem from '../../Dashboard/RecentResourceItem';
import topicsData from '../../../dummyDB/topicsData';
import resourcesData from '../../../dummyDB/resourcesData';

const [first, second, third] = resourcesData;
const data = [first, second, third];
describe('<RecentResourceItem />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <RecentResourceItem topics={topicsData} resources={data} />
    );
  });

  it('renders without crashing', () => {});

  it('renders ul section', () => {
    let wrapper;
    wrapper = mount(
      <RecentResourceItem topics={topicsData} resources={data} />
    );
    expect(wrapper.find('ul').children()).toHaveLength(data.length);
  });
});
