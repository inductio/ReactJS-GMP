import React from 'react';
import MovieCard from '../movie/MovieCard';

const MoviesGrid = ({movies, openMovieDetails}) => (
    <div className="movies__grid">
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} onClick={() => openMovieDetails(movie)} />)}
    </div>
);

export default MoviesGrid;
