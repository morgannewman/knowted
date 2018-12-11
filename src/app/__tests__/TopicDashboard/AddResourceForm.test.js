import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { AddResourceForm } from '../../TopicDasboard/AddResourceForm';

describe('AddResourceForm', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AddResourceForm />);
  });

  it('renders without crashing', () => {});
});
