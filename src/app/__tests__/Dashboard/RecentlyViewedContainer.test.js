import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import RecentlyViewedContainer from '../../Dashboard/RecentlyViewedContainer';
import topicsData from '../../../dummyDB/topicsData';
import resourcesData from '../../../dummyDB/resourcesData';


describe('<RecentResourceItem />', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<RecentlyViewedContainer/>);
	});

  it('renders without crashing', () => {});
  
 

});