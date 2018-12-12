import React from 'react';
import { shallow, mount } from 'enzyme';
import RecentResourceItem from '../../Dashboard/RecentResourceItem';

const initialState = {
  topics: [{ id: 1 }, { id: 2 }],
  resources: [
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

describe('<RecentResourceItem />', () => {
  let wrapper;

  it('renders without crashing', () => {
    shallow(
      <RecentResourceItem
        resources={initialState.resources}
        topics={initialState.topics}
      />
    );
  });

  it('renders ul section', () => {
    let wrapper;
    wrapper = mount(
      <RecentResourceItem
        resources={initialState.resources}
        topics={initialState.topics}
      />
    );
    expect(wrapper.find('ul').children()).toHaveLength(
      initialState.resources.length
    );
  });
});
