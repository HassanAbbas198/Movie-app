import React from 'react';

import classes from './MovieSummary.module.css';

import { Modal } from 'react-bootstrap';

const MovieSummary = (props) => {
	const formatDate = (date) => {
		let day = date.getDate();
		let month = date.getMonth() + 1;
		const year = date.getFullYear();

		if (month.toString().length < 2) {
			month = '0' + month;
		}
		if (day.toString().length < 2) {
			day = '0' + day;
		}

		return [day, month, year].join('-');
	};

	const date = new Date(props.movie.first_air_date);

	return (
		<React.Fragment>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					{props.movie.name}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className={classes.Modal}>
					<figure>
						<img
							src={`https://image.tmdb.org/t/p/w185/${props.movie.poster_path}`}
							alt="movie poster"
						/>
					</figure>
					<div className={classes.Modal__content}>
						<p>
							<span style={{ fontWeight: 'bold', color: 'grey' }}>
								Overview:{' '}
							</span>
							{props.movie.overview}
						</p>
						<p>
							<span style={{ fontWeight: 'bold', color: 'grey' }}>
								Air Date:{' '}
							</span>
							{formatDate(date)}
						</p>
						<p>
							<span style={{ fontWeight: 'bold', color: 'grey' }}>
								Popularity:{' '}
							</span>
							{props.movie.popularity}
						</p>
					</div>
				</div>
			</Modal.Body>
		</React.Fragment>
	);
};

export default MovieSummary;
