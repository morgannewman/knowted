import React from 'react';
import { shallow } from 'enzyme';
import AddTopic from '../../Dashboard/AddTopic';

//Component Contract - expect:
//To render

<<<<<<< HEAD
describe('<AddTopic />', () => {
=======
describe('<AllTopicsContainer />', () => {
>>>>>>> added in component logic for Add Topic form as well as some temporary styling:
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AddTopic />);
  });

  it('renders without crashing', () => {});
});
