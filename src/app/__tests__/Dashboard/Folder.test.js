import React from 'react';
import { shallow } from 'enzyme';
import Folder from '../../Dashboard/Folder';

describe('<Folder />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Folder />);
  });

  it('renders without crashing', () => {});
});
