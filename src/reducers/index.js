import { combineReducers } from 'redux';
import setMovies from './setMovies';
import addMovieRequest from './addMovieRequest';
import editMovieRequest from './editMovieRequest';
import showModal from './showModal';
import showMovieDetails from './showMovieDetails';

export default combineReducers({
    movies: setMovies,
    addMovieRequest,
    editMovieRequest,
    showModal,
    showMovieDetails,
});
