import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import RecentResourceItem from '../../Dashboard/RecentResourceItem';

const resources = [
  {
    resource:{
      id: 12345,
      parent: 54321,
      title: 'needles',
      uri: 'http://something',
      last_opened: new Date().toLocaleString()
    }
  },

  {
    resource:{
      id: 123456,
      parent:102030,
      title: 'Karate',
      uri: 'http://something',
      last_opened: Date.now()
    }
  },
  {
    resource:{
      id: 1234567,
      parent: 10204,
      title: 'Australia',
      uri: 'http://something',
      last_opened: Date.now()
    }
  }
  
  ];

describe('<RecentResourceItem />', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<RecentResourceItem resources={resources} />);
	});

  it('renders without crashing', () => {});
  
  it('renders ul section', ()=>{
    let wrapper;
    wrapper = mount(<RecentResourceItem resources={resources} />);
    expect(wrapper.find('ul').children()).toHaveLength(resources.length);

	});

});