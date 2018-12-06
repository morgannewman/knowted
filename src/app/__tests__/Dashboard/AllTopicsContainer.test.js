import React from 'react';
import { shallow } from 'enzyme';
import AllTopicsContainer from '../../Dashboard/AllTopicsContainer';

//Component Contract - expect:
//To render
//If I have any Folders for them to render
//If I have any parentless Topics for them to render

describe('<AllTopicsContainer />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AllTopicsContainer />);
  });

  it('renders without crashing', () => {});

  //FIXME: should expect to render only if you have topics and folders
  it('to render any folders', () => {
    wrapper = shallow(<AllTopicsContainer />);
    expect(wrapper.find('.folder-btn'));
  });

  it('to render any topics', () => {
    wrapper = shallow(<AllTopicsContainer />);
    expect(wrapper.find('.topic-btn'));
  });
});
