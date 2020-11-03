import React from 'react';

import classes from './SliderItem.module.css';

const SliderItem = (props) => {
	return (
		<React.Fragment>
			<div className={classes.SliderItem}>{props.movie.name}</div>
		</React.Fragment>
	);
};

export default SliderItem;
