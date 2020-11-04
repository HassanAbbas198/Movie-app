import * as actionTypes from '../actions/actionTypes';

const initialState = {
	actionMovies: [],
	comedyMovies: [],
	crimeMovies: [],
	singleMovie: null,
	error: null,
	loading: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_MOVIES_SUCCESS:
			return {
				...state,
				actionMovies: action.action,
				comedyMovies: action.comedy,
				crimeMovies: action.crime,
				loading: false,
				error: null,
			};

		case actionTypes.FETCH_MOVIES_START:
			return {
				...state,
				loading: true,
				error: null,
			};

		case actionTypes.FETCH_MOVIES_FAIL:
			return {
				...state,
				error: action.error,
				loading: false,
			};

		case actionTypes.FETCH_SINGLE_MOVIE:
			return {
				...state,
				singleMovie: action.movie,
				error: null,
			};

		default:
			return state;
	}
};

export default reducer;
