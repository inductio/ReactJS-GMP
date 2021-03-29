import React from 'react';
import MovieCard from '../movie/MovieCard';

const MoviesGrid = ({movies}) => (
    <div className="movies__grid">
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
);

export default MoviesGrid;
