import React from 'react';

import classes from './SliderItem.module.css';

import { Card } from 'react-bootstrap';

const SliderItem = (props) => {
	return (
		<React.Fragment>
			<div className={classes.SliderItem}>
				<Card className="bg-dark text-white">
					<Card.Img
						src={`https://image.tmdb.org/t/p/w185/${props.movie.poster_path}`}
						alt="Card image"
						style={{ maxWidth: '100%' }}
					/>
					<Card.ImgOverlay>
						<Card.Title>{props.movie.name}</Card.Title>
					</Card.ImgOverlay>
				</Card>
			</div>
		</React.Fragment>
	);
};

export default SliderItem;
