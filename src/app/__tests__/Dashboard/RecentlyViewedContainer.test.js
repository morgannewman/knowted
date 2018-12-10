import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import RecentlyViewedContainer from '../../Dashboard/RecentlyViewedContainer';
import topicsData from '../../../dummyDB/topicsData';
import resourcesData from '../../../dummyDB/resourcesData';
import RecentResourceItem from '../../Dashboard/RecentResourceItem';

const [first, second, third] = resourcesData;
const recentdata = [first, second, third];

describe('<RecentResourceItem />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<RecentlyViewedContainer />);
  });

  it('renders without crashing', () => {});

  it('renders recently viewed list', () => {
    expect(wrapper.find('recently-viewed')).toBeTruthy();
    expect(
      wrapper.contains(<RecentResourceItem resources={recentdata} />)
    ).toEqual(true);
    expect(
      wrapper
        .find(RecentResourceItem)
        .dive()
        .find('recent-resources')
    ).toBeTruthy();
  });
});
