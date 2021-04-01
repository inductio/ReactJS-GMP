import React, { useEffect } from 'react';
import MovieCard from '../movie/MovieCard';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions';

const MoviesGrid = (props) => {
    useEffect(() => {
        props.fetchMovies();
        }, []);

    if (!props.movies.length) {
        return null;
    }

    const movies = props.activeMovies && props.activeMovies.length ? props.activeMovies : props.movies;
    return (
        <div className="movies__grid">
            {movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    )

};

const mapState = (state) => {
    return {
        movies: state.movies || [],
        activeMovies: state.activeMovies,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => dispatch(fetchMovies())
    }
};

export default connect(mapState, mapDispatchToProps)(MoviesGrid)
