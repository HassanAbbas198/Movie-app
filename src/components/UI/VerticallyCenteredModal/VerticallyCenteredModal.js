import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Modal, Button } from 'react-bootstrap';
import MovieSummary from '../../MovieSummary/MovieSummary';

const VerticallyCenteredModal = (props) => {
	console.log(props.selectedMovie);

	return (
		<Modal
			show={props.show}
			onHide={props.onHide}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<MovieSummary movie={props.selectedMovie} />
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
};

VerticallyCenteredModal.prototype = {
	show: PropTypes.bool.isRequired,
	onHide: PropTypes.func.isRequired,
	selectedMovie: PropTypes.object,
};

const mapStateToProps = (state) => {
	return {
		selectedMovie: state.movie.singleMovie,
	};
};

export default connect(mapStateToProps)(
	React.memo(
		VerticallyCenteredModal,
		(prevProps, nextProps) => nextProps.show === prevProps.show
	)
);
