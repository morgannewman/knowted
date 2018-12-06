import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../../Landing/Login';

describe('<Login />', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Login submitting={false} />);
	});

	it('renders without crashing', () => {});
});
