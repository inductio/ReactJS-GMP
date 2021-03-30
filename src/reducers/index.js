import { combineReducers } from 'redux';
import setMovies from './setMovies';
import setActiveMovies from './setActiveMovies';
import addMovieRequest from './addMovieRequest';
import editMovieRequest from './editMovieRequest';
import showModal from './showModal';
import movieDetails from './movieDetails';
import setGenres from './setGenres';
import setFilter from './setFilter';

export default combineReducers({
    movies: setMovies,
    activeMovies: setActiveMovies,
    genres: setGenres,
    filter: setFilter,
    addMovieRequest,
    editMovieRequest,
    showModal,
    movieDetails
});
