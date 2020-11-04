import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Slider from './Slider';
import SliderItem from './SliderItem/SliderItem';

configure({ adapter: new Adapter() });

describe('<Slider />', () => {
	it('should render <SliderItem /> component', () => {
		const wrapper = shallow(<Slider movies={[{ name: 'random movie' }]} />);

		expect(wrapper.find(SliderItem)).toHaveLength(1);
	});
});
