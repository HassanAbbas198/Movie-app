import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Toolbar from './Toolbar';
import Logo from '../../Logo/Logo';

configure({ adapter: new Adapter() });

describe('<Toolbar />', () => {
	it('should render <Logo /> component', () => {
		const wrapper = shallow(<Toolbar />);

		expect(wrapper.find(Logo)).toHaveLength(1);
	});
});
