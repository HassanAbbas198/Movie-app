import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import VerticallyCenteredModal from './VerticallyCenteredModal';
import MovieSummary from '../../MovieSummary/MovieSummary';
import { Modal } from 'react-bootstrap';

configure({ adapter: new Adapter() });

describe('<VerticallyCenteredModal />', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<VerticallyCenteredModal show={true} />);
	});

	it('should render <MovieSummary /> component', () => {
		expect(wrapper.find(MovieSummary)).toHaveLength(1);
	});

	it('should render <Modal /> component', () => {
		expect(wrapper.find(Modal)).toHaveLength(1);
	});
});
