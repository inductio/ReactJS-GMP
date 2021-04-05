import apiUrl from '../apis/apiUrl';
import _ from 'lodash';
import { byDate, byRating, byRuntime, byGenre } from './../components/utils/sortUtils';
import { getFilterValues, getFilteredMovies } from './../components/utils/filterUtils';

export const fetchMovies = () => async dispatch => {
    const response = await apiUrl.get('/');
    const movies = response.data.data;
    const genres = getFilterValues([...movies]);
    dispatch({type: 'SET_MOVIES', payload: movies});
    dispatch({type: 'SET_GENRES', payload: genres});
};

export const addMovieRequest = data => async dispatch => {
    await apiUrl.post('/', data);
};

export const editMovieRequest = (id, data) => async dispatch => {
    data = _.extend(data, {id});
    await apiUrl.put('/', data);
};

export const deleteMovieRequest = id => async dispatch => {
    await apiUrl.delete(`/${id}`);
};

export const showModal = (modalType, modalMovieId) => {
    return {type: 'SHOW_MODAL', payload: {modalType, modalMovieId}}
};

export const showMovieDetails = (movieDetails) => {
    return {type: 'SHOW_MOVIE_DETAILS', payload: movieDetails}
};

export const sortMovies = (type, movies) => {
    const sortMovies = [...movies];
    const sortMapStrategy = new Map([
        ['Release Date', () => sortMovies.sort(byDate)],
        ['Rating', () => sortMovies.sort(byRating)],
        ['Runtime', () => sortMovies.sort(byRuntime)],
        ['Genre', () => sortMovies.sort(byGenre)]
    ]);

    return {type: 'SET_ACTIVE_MOVIES', payload: sortMapStrategy.get(type)()}
};

export const setFilter = filter => {
    return {type: 'SET_FILTER', payload: filter};
};

export const filterMovies = (movies, filter) => {
    if (!filter) {
        return {type: 'SET_ACTIVE_MOVIES', payload: movies};
    }

    const filteredMovies = getFilteredMovies([...movies], filter);
    return {type: 'SET_ACTIVE_MOVIES', payload: [...filteredMovies]};
};
