import React from 'react';
import { shallow } from 'enzyme';
import AddTopicForm from '../../Dashboard/AddTopicForm';

//Component Contract - expect:
//To render

describe('<AllTopicsContainer />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AddTopicForm />);
  });

  it('renders without crashing', () => {});
});
