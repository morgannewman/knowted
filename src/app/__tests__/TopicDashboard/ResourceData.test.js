import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ResourceView from '../../TopicDasboard/ResourceView';
import resourcesData from '../../../dummyDB/resourcesData';

const FirstResource = resourcesData[0];

describe('<ResourceData />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ResourceView resource={FirstResource} />);
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
    ).toEqual(FirstResource.title);
  });

  it('renders last link as the resource uri', () => {
    expect(
      wrapper
        .find('a')
        .last()
        .text()
    ).toEqual(FirstResource.uri);
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
      <ResourceView handleEdit={mockFn} resource={FirstResource} />
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
      <ResourceView handleDelete={mockFn} resource={FirstResource} />
    );
    wrapper
      .find('button')
      .last()
      .simulate('click');
    expect(mockFn).toBeCalled();
  });
});
