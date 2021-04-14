import apiUrl from '../apis/apiUrl';
import _ from 'lodash';
import { byDate, byRating, byRuntime, byGenre } from './../components/utils/sortUtils';
import { getFilterValues, getFilteredMovies } from './../components/utils/filterUtils';

export const fetchMoviesByQuery = query => async dispatch => {
    const response = await apiUrl.get(`/?search=${query}&searchBy=title`);
    const movies = response.data.data;
    const genres = getFilterValues([...movies]);
    dispatch({type: 'SET_MOVIES', payload: movies});
    dispatch({type: 'SET_GENRES', payload: genres});
};

export const fetchMovieDetails = id => async dispatch => {
    const response = await apiUrl.get(`/${id}`);
    dispatch({type: 'SHOW_MOVIE_DETAILS', payload: response.data});
};

export const addMovieRequest = data => async dispatch => {
    const response = await apiUrl.post('/', data);
    dispatch({type: 'UPDATE_WITH_NEW_MOVIE', payload: response.data});
    dispatch(showModal(null, null))
};

export const editMovieRequest = (id, data) => async (dispatch) => {
    data = _.extend(data, {id});
    await apiUrl.put('/', data);
    dispatch({type: 'SET_FILTER', payload: {type: null, movies: []}});
    dispatch({type: 'UPDATE_MOVIES', payload: data});
    dispatch(showModal(null, null))
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

export const sortMovies = (type, movies) => dispatch => {
    const sortMovies = [...movies];
    const sortMapStrategy = new Map([
        ['Release Date', () => sortMovies.sort(byDate)],
        ['Rating', () => sortMovies.sort(byRating)],
        ['Runtime', () => sortMovies.sort(byRuntime)],
        ['Genre', () => sortMovies.sort(byGenre)]
    ]);

    dispatch({type: 'SET_FILTER', payload: {type: null, movies: []}});
    dispatch({type: 'SET_MOVIES', payload: sortMapStrategy.get(type)()});
};

export const setFilter = (filter, movies) => {
    const filteredMovies = getFilteredMovies([...movies], filter);

    return {type: 'SET_FILTER', payload: {type: filter, movies: filteredMovies}};
};
