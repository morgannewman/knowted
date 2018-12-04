import React from 'react';
import { shallow } from 'enzyme';
import Landing from './';

describe('<Landing />', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Landing />);
	});

	it('renders without crashing', () => {});
});
