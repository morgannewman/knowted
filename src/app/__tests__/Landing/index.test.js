import React from 'react';
import { shallow } from 'enzyme';
import Landing from '../../Landing';

describe('<Landing />', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Landing />);
	});

	it('renders without crashing', () => {});
});
