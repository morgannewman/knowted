import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import ResourceData from '../../TopicDasboard/ResourceData';
import topicsData from '../../../dummyDB/topicsData';
import resourcesData from '../../../dummyDB/resourcesData';

describe('<ResourceData />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ResourceData resource={resourcesData[0].resource} />);
  });

  it('renders without crashing', () => {});

  // it('renders ul section', () => {
  //   let wrapper;
  //   wrapper = mount(
  //     <RecentResourceItem topics={topicsData} resources={resourcesData} />
  //   );
  //   expect(wrapper.find('ul').children()).toHaveLength(resourcesData.length);
  // });
});
