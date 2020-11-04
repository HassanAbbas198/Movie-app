import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import { Spinner } from 'react-bootstrap';
import Slider from '../../components/Slider/Slider';
import VerticallyCenteredModal from '../../components/UI/VerticallyCenteredModal/VerticallyCenteredModal';

const Sliders = (props) => {
	const [modalShow, setModalShow] = useState(false);

	const { onFetchMovies } = props;

	useEffect(() => {
		onFetchMovies();
	}, [onFetchMovies]);

	const onShowMovie = (selectedMovie) => {
		props.onFetchSingleMovie(selectedMovie);
		setModalShow(true);
	};

	const onHideMovie = () => {
		setModalShow(false);
	};

	let sliders = (
		<div style={{ paddingLeft: '50%', paddingTop: '20%' }}>
			<Spinner animation="border" />;
		</div>
	);

	if (!props.loading) {
		sliders = (
			<div>
				<Slider movies={props.actionMovies} onShowMovie={onShowMovie} />
				<Slider movies={props.comedyMovies} onShowMovie={onShowMovie} />
				<Slider movies={props.crimeMovies} onShowMovie={onShowMovie} />
			</div>
		);
	}

	let modal = null;
	if (props.selectedMovie) {
		modal = <VerticallyCenteredModal show={modalShow} onHide={onHideMovie} />;
	}

	return (
		<React.Fragment>
			{modal}
			{sliders}
		</React.Fragment>
	);
};

Sliders.propTypes = {
	actionMovies: PropTypes.array.isRequired,
	comedyMovies: PropTypes.array.isRequired,
	crimeMovies: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
	selectedMovie: PropTypes.object.isRequired,
	onFetchMovies: PropTypes.func.isRequired,
	onFetchSingleMovie: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	return {
		actionMovies: state.movie.actionMovies,
		comedyMovies: state.movie.comedyMovies,
		crimeMovies: state.movie.crimeMovies,
		loading: state.movie.loading,
		selectedMovie: state.movie.singleMovie,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onFetchMovies: () => dispatch(actions.fetchMovies()),
		onFetchSingleMovie: (movie) => dispatch(actions.fetchSingleMovie(movie)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Sliders);
