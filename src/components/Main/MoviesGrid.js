import React from 'react';
import MovieCard from '../movie/MovieCard';

const MoviesGrid = ({movies, onCardClick}) => (
    <div className="movies__grid">
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} onCardClick={onCardClick} />)}
    </div>
);

export default MoviesGrid;
