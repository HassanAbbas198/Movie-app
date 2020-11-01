import React from 'react';

import classes from './Slider.module.css';
import SliderItem from './SliderItem/SliderItem';

const Slider = (props) => {
	return (
		<div className={classes.Slider}>
			<SliderItem></SliderItem>
			<SliderItem></SliderItem>
			<SliderItem></SliderItem>
			<SliderItem></SliderItem>
		</div>
	);
};

export default Slider;
