import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from '../../common/nav';

describe('<Nav />', () => {
	it('renders without crashing', () => {
		shallow(<Nav loggedIn={false} />);
	});

	it('renders loggedIn options', () => {
		let wrapper = shallow(<Nav loggedIn={true} />);
		expect(wrapper.find('nav').prop('className')).toEqual('nav-loggedIn');
	});

	// it('triggers logout function', () => {
	// 	let wrapper;
	// 	const mockFn = jest.fn();
	// 	wrapper = shallow(<Nav logOut={mockFn} loggedIn={true} />);
	// 	wrapper.find('.navLinks a').simulate('click');
	// 	expect(mockFn).toBeCalled();
	// });
});
