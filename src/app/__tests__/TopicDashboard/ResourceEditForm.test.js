import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';
import ResourceEditForm from '../../TopicDasboard/ResourceEditForm';
import resourcesData from '../../../dummyDB/resourcesData';

const FirstResource = resourcesData[0];

describe('<ResourceEditForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ResourceEditForm resource={FirstResource} />);
  });
  it('renders without crash', () => {});

  it('renders a form', () => {
    expect(wrapper.find('form')).toBeTruthy();
  });

  it('renders a text input', () => {
    expect(wrapper.find('form input')).toBeTruthy();
    expect(wrapper.find('form input').type()).toEqual('input');
  });

  it('renders an update button', () => {
    expect(wrapper.find('button')).toBeTruthy();
    expect(wrapper.find('button').text()).toEqual('update');
  });

  it('form button triggers submit', () => {
    let wrapper;
    const mockFn = jest.fn();
    const fakeEvent = {
      preventDefault: () => {
        console.log('preventDefault');
      },
      target: {
        getAttribute: () => {
          console.log('I am a fake attribute');
          return 'fake Attribute';
        }
      },
      currentTarget: {
        getElementsByTagName: () => {
          console.log('I am a fake element');
          return ['fake Element'];
        }
      }
    };
    wrapper = shallow(
      <ResourceEditForm handleUpdate={mockFn} resource={FirstResource} />
    );
    wrapper.find('form').simulate('submit', fakeEvent);
    expect(mockFn).toBeCalled();
  });
});
