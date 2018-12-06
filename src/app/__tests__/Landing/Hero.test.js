import React from 'react';
import { shallow } from 'enzyme';
import Hero from '../../Landing/Hero';

describe('<Hero />', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Hero submitting={false} />);
	});

	it('renders without crashing', () => {});
});
