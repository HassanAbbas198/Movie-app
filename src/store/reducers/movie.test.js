import reducer from './movie';
import * as actionTypes from '../actions/actionTypes';

describe('movie reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			actionMovies: [],
			comedyMovies: [],
			crimeMovies: [],
			singleMovie: null,
			error: null,
			loading: false,
		});
	});

	it('should store movies arrays when fetched successfully from API', () => {
		expect(
			reducer(
				{
					actionMovies: [],
					comedyMovies: [],
					crimeMovies: [],
					singleMovie: null,
					error: null,
					loading: false,
				},
				{
					type: actionTypes.FETCH_MOVIES_SUCCESS,
					action: [{ name: 'some movie' }],
					comedy: [{ name: 'some movie' }],
					crime: [{ name: 'some movie' }],
				}
			)
		).toEqual({
			actionMovies: [{ name: 'some movie' }],
			comedyMovies: [{ name: 'some movie' }],
			crimeMovies: [{ name: 'some movie' }],
			singleMovie: null,
			error: null,
			loading: false,
		});
	});

	it('should store a single movie upon clicking on it', () => {
		expect(
			reducer(
				{
					actionMovies: [],
					comedyMovies: [],
					crimeMovies: [],
					singleMovie: null,
					error: null,
					loading: false,
				},
				{
					type: actionTypes.FETCH_SINGLE_MOVIE,
					movie: { name: 'harry potter' },
				}
			)
		).toEqual({
			actionMovies: [],
			comedyMovies: [],
			crimeMovies: [],
			singleMovie: { name: 'harry potter' },
			error: null,
			loading: false,
		});
	});
});
