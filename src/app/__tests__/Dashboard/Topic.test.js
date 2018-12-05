import React from 'react';
import { shallow } from 'enzyme';
import Topic from '../../Dashboard/Topic';

describe('<Topic />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Topic />);
  });

  it('renders without crashing', () => {});
});
