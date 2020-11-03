import axios from '../../axios-orders';
import * as actionTypes from './actionTypes';

const fetchMoviesSuccess = (action, comedy, crime) => {
	return {
		type: actionTypes.FETCH_MOVIES_SUCCESS,
		action,
		comedy,
		crime,
	};
};

const fetchMoviesFail = (error) => {
	return {
		type: actionTypes.FETCH_MOVIES_FAIL,
		error,
	};
};

const fetchMoviesStart = () => {
	return {
		type: actionTypes.FETCH_MOVIES_START,
	};
};

export const fetchMovies = () => {
	return async (dispatch) => {
		try {
			dispatch(fetchMoviesStart());
			const action = await axios.get(
				`tv?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&with_genres=28`
			);

			const comedy = await axios.get(
				`tv?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&with_genres=35`
			);

			const crime = await axios.get(
				`tv?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&with_genres=80`
			);

			dispatch(
				fetchMoviesSuccess(
					action.data.results,
					comedy.data.results,
					crime.data.results
				)
			);
		} catch (error) {
			dispatch(fetchMoviesFail('Something went wrong'));
		}
	};
};
