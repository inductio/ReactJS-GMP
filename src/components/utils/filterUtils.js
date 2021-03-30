import _ from 'lodash';

export const getFilterValues = movies => _.chain([...movies]).map('genres').flatten().union().value();

export const getFilteredMovies = (movies, filter) => {
    return _.chain([...movies]).filter(movie => movie.genres && movie.genres.indexOf(filter) > -1).value();
};
