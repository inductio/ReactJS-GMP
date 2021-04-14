import _ from 'lodash';

export const getGenres = movies => _.chain([...movies]).map('genres').flatten().union().value();
