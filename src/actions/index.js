import { apiUrl, getRequestWithParams } from '../apis/apiUrl';
import _ from 'lodash';
import { getGenres } from './../components/utils/filterUtils';

export const fetchMoviesByQuery = search => async dispatch => {
    const response = await getRequestWithParams(null,{
        search,
        searchBy: 'title'
    });
    const movies = response.data.data;
    dispatch({type: 'SET_MOVIES', payload: movies});
    dispatch({type: 'SET_GENRES', payload: getGenres(movies)});
};

export const fetchMovieDetails = id => async dispatch => {
    const response = await getRequestWithParams(id, null);
    dispatch({type: 'SHOW_MOVIE_DETAILS', payload: response.data});
};

export const sortMovies = sortBy => async dispatch => {
    const response = await getRequestWithParams(null,{
        sortBy,
        sortOrder: 'desc'
    });
    const movies = response.data.data;
    dispatch({type: 'SET_MOVIES', payload: movies});
};

export const setFilter = filter => async dispatch => {
    const response = await getRequestWithParams(null,{ filter });
    const movies = response.data.data;
    dispatch({type: 'SET_MOVIES', payload: movies});
    dispatch({type: 'SET_FILTER_TYPE', payload: filter});
};

export const addMovieRequest = data => async dispatch => {
    const response = await apiUrl.post('/', data);
    dispatch({type: 'UPDATE_WITH_NEW_MOVIE', payload: response.data});
    dispatch(showModal(null, null))
};

export const editMovieRequest = (id, data) => async (dispatch) => {
    data = _.extend(data, {id});
    await apiUrl.put('/', data);
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

