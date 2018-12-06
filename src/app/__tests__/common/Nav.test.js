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
});
