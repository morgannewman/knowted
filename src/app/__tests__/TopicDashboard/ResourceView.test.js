import React from 'react';
import { shallow } from 'enzyme';
import ResourceView from '../../TopicDashboard/ResourceView';

const initialState = {
  resourceOrder: [1, 2],
  resources: {
    1: {
      completed: false,
      id: 1,
      lastOpened: '2018-12-16T04:05:27.094Z',
      title: 'Resource #3',
      type: 'youtube',
      uri: 'B7hVxCmfPtM'
    },
    2: {
      completed: false,
      id: 2,
      lastOpened: '2018-12-17T07:09:32.817Z',
      title: 'Now Playin: Using Spotify’s Awesome API with React',
      type: 'other',
      uri:
        'https://medium.com/@jonnykalambay/now-playing-using-spotifys-awesome-api-with-react-7db8173a7b13'
    }
  },
  dispatch: jest.fn()
};

const SecondResource = initialState.resources[2];
describe('<ResourceView/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ResourceView resource={SecondResource} />);
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
    ).toEqual(SecondResource.uri);
  });

  it('renders last link as the resource uri', () => {
    expect(
      wrapper
        .find('a')
        .last()
        .text()
    ).toEqual(SecondResource.uri);
  });

  it('contains an edit button', () => {
    expect(
      wrapper
        .find('button')
        .first()
        .text()
    ).toEqual('edit');
  });
  it('contains a delete button', () => {
    expect(
      wrapper
        .find('button')
        .last()
        .text()
    ).toEqual('delete');
  });

  it('edit triggers an edit function', () => {
    let wrapper;
    const mockFn = jest.fn();
    wrapper = shallow(
      <ResourceView handleEdit={mockFn} resource={SecondResource} />
    );
    wrapper
      .find('button')
      .first()
      .simulate('click');
    expect(mockFn).toBeCalled();
  });

  it('delete triggers a delete function', () => {
    let wrapper;
    const mockFn = jest.fn();
    wrapper = shallow(
      <ResourceView handleDelete={mockFn} resource={SecondResource} />
    );
    wrapper
      .find('button')
      .last()
      .simulate('click');
    expect(mockFn).toBeCalled();
  });
});
