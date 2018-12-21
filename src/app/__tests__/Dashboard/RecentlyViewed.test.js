import React from 'react';
import { shallow, mount } from 'enzyme';
import { RecentlyViewed } from '../../Dashboard/RecentlyViewed';

const initialState = {
  recentResources: [
    {
      completed: false,
      id: 2,
      lastOpened: '2018-12-11T16:02:09.784Z',
      parent: { id: 1 },
      title: 'Resource #2',
      uri: 'uri #2'
    },
    {
      completed: false,
      id: 3,
      lastOpened: '2018-12-11T16:02:09.784Z',
      parent: { id: 2 },
      title: 'Resource #3',
      uri: 'uri #3'
    }
  ],
  dispatch: jest.fn()
};

describe('<RecentlyViewed />', () => {
  it('renders without crashing', () => {
    shallow(<RecentlyViewed {...initialState} />);
  });

  it('renders ul section', () => {
    let wrapper;
    wrapper = mount(<RecentlyViewed {...initialState} />);
    expect(wrapper.find('ul').children()).toHaveLength(
      initialState.recentResources.length
    );
  });
});
