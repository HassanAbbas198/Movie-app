import React from 'react';
import PropTypes from 'prop-types';

import classes from './Slider.module.css';

import SliderItem from './SliderItem/SliderItem';

const Slider = (props) => {
	const movieItems = props.movies.map((movie) => {
		return <SliderItem key={movie.id} movie={movie} />;
	});

	return <div className={classes.Slider}>{movieItems}</div>;
};

Slider.propTypes = {
	movies: PropTypes.array.isRequired,
};

export default Slider;
