import React from 'react';
import { shallow } from 'enzyme';
import AddTopic from '../../Dashboard/AddTopic';

//Component Contract - expect:
//To render

describe('<AllTopicsContainer />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AddTopic />);
  });

  it('renders without crashing', () => {});
});
