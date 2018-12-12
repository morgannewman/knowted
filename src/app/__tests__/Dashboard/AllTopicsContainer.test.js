import React from 'react';
import { shallow } from 'enzyme';
import { AllTopicsContainer } from '../../Dashboard/AllTopicsContainer';

//Component Contract - expect:
//To render
//If I have any Folders for them to render
//If I have any parentless Topics for them to render

const initialState = {
  dispatch: jest.fn(),
  loading: false
};

describe('<AllTopicsContainer />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AllTopicsContainer {...initialState} />);
  });

  it('renders without crashing', () => {});

  //FIXME: should expect to render only if you have topics and folders
  it('to render any folders', () => {
    wrapper = shallow(<AllTopicsContainer {...initialState} />);
    expect(wrapper.find('.folder-btn'));
  });

  it('to render any topics', () => {
    wrapper = shallow(<AllTopicsContainer {...initialState} />);
    expect(wrapper.find('.topic-btn'));
  });
});
