import React from 'react';
import MovieCard from '../movie/MovieCard';

const MoviesGrid = (props) => {
    const moviesGrid = props.movies.map((movie) => {
        return (
            <MovieCard key={movie.id} movie={movie}/>
        );
    });

    return (
        <div className="movies__grid">
            {moviesGrid}
        </div>
    )

};

export default MoviesGrid;
