import React from 'react';
import { shallow } from 'enzyme';
import { Register } from '../../../Landing/Register';

describe('<Register />', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Register submitting={false} />);
	});

	it('renders without crashing', () => {});
});
