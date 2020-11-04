import React from 'react';
import PropTypes from 'prop-types';

import { Modal, Button } from 'react-bootstrap';
import MovieSummary from '../../MovieSummary/MovieSummary';

const VerticallyCenteredModal = (props) => {
	return (
		<Modal
			show={props.show}
			onHide={props.onHide}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<MovieSummary />
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

VerticallyCenteredModal.prototype = {
	show: PropTypes.bool.isRequired,
	onHide: PropTypes.func.isRequired,
};

export default React.memo(
	VerticallyCenteredModal,
	(prevProps, nextProps) => nextProps.show === prevProps.show
);
