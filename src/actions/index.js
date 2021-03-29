import jsonPlaceholder from '../apis/jsonPlaceholder';
import {byDate, byRating, byRuntime, byGenre} from './../components/utils/sortUtils';

export const fetchMovies = () => async dispatch => {
    const response = await jsonPlaceholder.get('/');
    dispatch({type: 'SET_MOVIES', payload: response.data});
};

export const addMovieRequest = data => async dispatch => {
    const response = await jsonPlaceholder.post(`/`, data);
    dispatch({type: 'ADD_MOVIE_REQUEST', payload: response.data})
};

export const editMovieRequest = (id, data) => async dispatch => {
    const response = await jsonPlaceholder.patch(`/${id}`, data);
    dispatch({type: 'EDIT_MOVIE_REQUEST', payload: response.data})
};

export const deleteMovieRequest = id => async dispatch => {
    const response = await jsonPlaceholder.delete(`/${id}`);
    dispatch({type: 'DELETE_MOVIE_REQUEST', payload: response.data})
};

export const showModal = (modalType, modalMovieId) => {
    return {type: 'SHOW_MODAL', payload: {modalType, modalMovieId}}
};

export const showMovieDetails = (movieDetails) => {
    return {type: 'SHOW_MOVIE_DETAILS', payload: {movieDetails}}
};

export const sortMovies = (type, movies) => {
    const sortMapStrategy = new Map([
        ['Release Date', () => movies.sort(byDate)],
        ['Rating', () => movies.sort(byRating)],
        ['Runtime', () => movies.sort(byRuntime)],
        ['Genre', () => movies.sort(byGenre)]
    ]);

    return {type: 'SET_MOVIES', payload: sortMapStrategy.get(type)()}
};
