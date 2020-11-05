import React from 'react';
import PropTypes from 'prop-types';

import classes from './Slider.module.css';

import SliderItem from './SliderItem/SliderItem';

const Slider = (props) => {
	const movieItems = props.movies.map((movie) => {
		return (
			<SliderItem key={movie.id} movie={movie} showMovie={props.onShowMovie} />
		);
	});

	return (
		<React.Fragment>
			<div className={classes.Label}>
				<div className={classes.Label__item}>
					<p className={classes.Label__item__text}>{props.label} movies</p>
				</div>
			</div>
			<div className={classes.Slider}>{movieItems}</div>
		</React.Fragment>
	);
};

Slider.propTypes = {
	movies: PropTypes.array.isRequired,
	onShowMovie: PropTypes.func.isRequired,
};

export default Slider;
