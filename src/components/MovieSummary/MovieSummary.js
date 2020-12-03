import React from 'react';
import { useSelector } from 'react-redux';

import classes from './MovieSummary.module.css';
import { formatDate } from '../../shared/dateFormatter';

import { Modal } from 'react-bootstrap';

const MovieSummary = (props) => {
	const movie = useSelector((state) => state.movie.singleMovie);

	const date = new Date(movie.first_air_date);

	return (
		<React.Fragment>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					{movie.name}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className={classes.Modal}>
					<figure>
						<img
							src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
							alt="movie poster"
						/>
					</figure>
					<div className={classes.Modal__content}>
						<p>
							<span style={{ fontWeight: 'bold', color: 'grey' }}>
								Overview:{' '}
							</span>
							{movie.overview}
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
							{movie.popularity}
						</p>

						<p>
							<span style={{ fontWeight: 'bold', color: 'grey' }}>
								Rating:{' '}
							</span>
							{movie.vote_average}/10
						</p>
					</div>
				</div>
			</Modal.Body>
		</React.Fragment>
	);
};

export default MovieSummary;
