import React from 'react';
import { connect } from 'react-redux';

import classes from './MovieSummary.module.css';
import { formatDate } from '../../shared/dateFormatter';

import { Modal } from 'react-bootstrap';

const MovieSummary = (props) => {
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

						<p>
							<span style={{ fontWeight: 'bold', color: 'grey' }}>
								Rating:{' '}
							</span>
							{props.movie.vote_average}/10
						</p>
					</div>
				</div>
			</Modal.Body>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		movie: state.movie.singleMovie,
	};
};

export default connect(mapStateToProps)(MovieSummary);
