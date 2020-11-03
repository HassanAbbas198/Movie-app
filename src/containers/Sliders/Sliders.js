import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import Slider from '../../components/Slider/Slider';
import { Spinner } from 'react-bootstrap';

const Sliders = (props) => {
	const { onFetchMovies } = props;

	useEffect(() => {
		onFetchMovies();
	}, [onFetchMovies]);

	let sliders = (
		<div style={{ paddingLeft: '50%', paddingTop: '30%' }}>
			<Spinner animation="border" />;
		</div>
	);

	if (props.loading) {
		sliders = (
			<div>
				<Slider movies={props.actionMovies} />
				<Slider movies={props.comedyMovies} />
				<Slider movies={props.crimeMovies} />
			</div>
		);
	}

	return sliders;
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Sliders);
