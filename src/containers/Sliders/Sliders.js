import React, { useEffect, useState } from 'react';
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

	const onShowMovie = (movieId) => {
		props.onFetchSingleMovie(movieId);
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

	return (
		<React.Fragment>
			<VerticallyCenteredModal show={modalShow} onHide={onHideMovie} />
			{sliders}
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		actionMovies: state.movie.actionMovies,
		comedyMovies: state.movie.comedyMovies,
		crimeMovies: state.movie.crimeMovies,
		loading: state.movie.loading,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onFetchMovies: () => dispatch(actions.fetchMovies()),
		onFetchSingleMovie: (id) => dispatch(actions.fetchSingleMovie(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Sliders);
