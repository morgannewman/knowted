import React from 'react';
import { shallow, mount } from 'enzyme';
import AllTopicsContainer from '../../Dashboard/AllTopicsContainer';

describe('<AllTopicsContainer />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AllTopicsContainer />);
  });

  it('renders without crashing', () => {});
});
