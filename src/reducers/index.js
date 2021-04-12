import { combineReducers } from 'redux';
import movies from './movies';
import modal from './modal';
import movieDetails from './movieDetails';
import genres from './genres';
import filter from './filter';

export default combineReducers({
    movies,
    genres,
    filter,
    modal,
    movieDetails
});
