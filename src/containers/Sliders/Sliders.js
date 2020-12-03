import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import axios from '../../axios-orders';
import * as actions from '../../store/actions/index';

import { Spinner } from 'react-bootstrap';
import Slider from '../../components/Slider/Slider';
import VerticallyCenteredModal from '../../components/UI/VerticallyCenteredModal/VerticallyCenteredModal';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const Sliders = () => {
	const [modalShow, setModalShow] = useState(false);

	const dispatch = useDispatch();

	const actionMovies = useSelector((state) => state.movie.actionMovies);
	const comedyMovies = useSelector((state) => state.movie.comedyMovies);
	const crimeMovies = useSelector((state) => state.movie.crimeMovies);
	const loading = useSelector((state) => state.movie.loading);
	const selectedMovie = useSelector((state) => state.movie.singleMovie);

	useEffect(() => {
		dispatch(actions.fetchMovies());
	}, [dispatch]);

	const onShowMovie = (selectedMovie) => {
		dispatch(actions.fetchSingleMovie(selectedMovie));
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

	if (!loading) {
		sliders = (
			<div>
				<Slider
					movies={actionMovies}
					onShowMovie={onShowMovie}
					label="Action"
				/>
				<Slider
					movies={comedyMovies}
					onShowMovie={onShowMovie}
					label="Comedy"
				/>
				<Slider movies={crimeMovies} onShowMovie={onShowMovie} label="Crime" />
			</div>
		);
	}

	let modal = null;
	if (selectedMovie) {
		modal = <VerticallyCenteredModal show={modalShow} onHide={onHideMovie} />;
	}

	return (
		<React.Fragment>
			{modal}
			{sliders}
		</React.Fragment>
	);
};

export default withErrorHandler(Sliders, axios);
