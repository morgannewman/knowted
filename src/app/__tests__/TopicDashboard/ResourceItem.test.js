import React from 'react';
import { shallow } from 'enzyme';
import { ResourceItem } from '../../TopicDashboard/ResourceItem';
import resourcesData from '../../../dummyDB/resourcesData';

const FirstResource = resourcesData[0];

const initialState = {
	editing: false
};
describe('ResourceItem', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<ResourceItem {...initialState} resource={FirstResource} />);
	});

	it('renders without crashing', () => {});
});
