import * as actionTypes from '../actions/actionTypes';

const initialState = {
	actionMovies: [],
	comedyMovies: [],
	crimeMovies: [],
	erorr: null,
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
			};

		case actionTypes.FETCH_MOVIES_FAIL:
			return {
				...state,
				error: action.erorr,
				loading: false,
			};

		default:
			return state;
	}
};

export default reducer;
