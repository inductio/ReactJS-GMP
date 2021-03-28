import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchMovies = () => async dispatch => {
    const response = await jsonPlaceholder.get('/');
    dispatch({type: 'FETCH_MOVIES', payload: response.data});
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
