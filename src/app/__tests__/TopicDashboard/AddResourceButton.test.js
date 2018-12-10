import React from 'react';
import reactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AddResourceButton from '../../TopicDasboard/';

describe('AddResourceButton', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AddResourceButton />);
  });

  it('renders without crashing', () => {});
});
