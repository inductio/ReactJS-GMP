import { combineReducers } from 'redux';
import fetchMovies from './fetchMovies';
import addMovieRequest from './addMovieRequest';
import editMovieRequest from './editMovieRequest';
import showModal from './showModal';

export default combineReducers({
    fetchMovies,
    addMovieRequest,
    editMovieRequest,
    showModal
});
