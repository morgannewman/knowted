import React from 'react';
import { shallow } from 'enzyme';
import Folder from '../../Dashboard/Folder';

//Component Contract - expect:
//To render
//the jawbone to display on false

describe('<Folder />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Folder />);
  });

  it('renders without crashing', () => {});

  it('to display JawBone on state isHidden false', () => {
    wrapper = shallow(<Folder isHidden={false} />);
    expect(wrapper.find('.jaw-bone-container'));
  });
});
