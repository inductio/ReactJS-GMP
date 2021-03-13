export default function (movies, id) {
    return movies.filter(movie => movie.id === id)[0];
};
