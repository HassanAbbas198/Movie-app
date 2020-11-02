import React, { useEffect } from 'react';

import classes from './Slider.module.css';
import * as actions from '../../store/actions/index';

import SliderItem from './SliderItem/SliderItem';
import { connect } from 'react-redux';

const Slider = (props) => {
	console.log(props);
	const { onFetchMovies } = props;

	useEffect(() => {
		onFetchMovies();
	}, [onFetchMovies]);

	return (
		<div className={classes.Slider}>
			<SliderItem></SliderItem>
			<SliderItem></SliderItem>
			<SliderItem></SliderItem>
			<SliderItem></SliderItem>
			<SliderItem></SliderItem>
			<SliderItem></SliderItem>
			<SliderItem></SliderItem>
			<SliderItem></SliderItem>
			<SliderItem></SliderItem>
			<SliderItem></SliderItem>
			<SliderItem></SliderItem>
			<SliderItem></SliderItem>
			<SliderItem></SliderItem>
			<SliderItem></SliderItem>
			<SliderItem></SliderItem>
			<SliderItem></SliderItem>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		actionMovies: state.movie.actionMovies,
		comedyMovies: state.movie.comedyMovies,
		crimeMovies: state.movie.crimeMovies,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onFetchMovies: () => dispatch(actions.fetchMovies()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
