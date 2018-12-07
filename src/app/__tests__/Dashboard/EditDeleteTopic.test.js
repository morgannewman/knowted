import React from 'react';
import { shallow } from 'enzyme';
import EditDeleteTopic from '../../Dashboard/EditDeleteTopic';

//Component Contract - expect:
//To render

describe('<AllTopicsContainer />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EditDeleteTopic />);
  });

  it('renders without crashing', () => {});
});
