import React from 'react';
import MovieCard from '../movie/MovieCard';
import { connect } from 'react-redux';

const MoviesGrid = ({movies}) => (
    <div className="movies__grid">
        {movies.length ? movies.map((movie) => <MovieCard key={movie.id} movie={movie} />) : null}
    </div>
);

const mapState = (state) => {
    return {
        movies: state.movies || []
    }
};

export default connect(mapState)(MoviesGrid)

