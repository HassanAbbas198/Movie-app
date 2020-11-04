import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SliderItem from './SliderItem';
import { Card } from 'react-bootstrap';

configure({ adapter: new Adapter() });

describe('<SliderItem />', () => {
	it('should render <Card /> component', () => {
		const wrapper = shallow(
			<SliderItem
				key="15"
				movie={{ name: 'harry potter', poster_path: 'xyx' }}
			/>
		);

		expect(wrapper.find(Card)).toHaveLength(1);
	});
});
