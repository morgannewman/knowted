import React from 'react';
import { shallow } from 'enzyme';
import JawBone from '../../Dashboard/JawBone';

//Component Contract - expect:
//To render
//To render topics

describe('<JawBone />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<JawBone />);
  });

  it('renders without crashing', () => {});

  it('to render topics', () => {
    wrapper = shallow(<JawBone />);
    expect(wrapper.find('.topic-btn'));
  });
});
