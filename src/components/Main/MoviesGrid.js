import React, { useEffect } from 'react';
import MovieCard from '../movie/MovieCard';
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions';
import { showMovieDetails } from '../../actions';

const MoviesGrid = (props) => {
    const {movies, fetchMovies, showMovieDetails} = props;
    useEffect(() => {
        fetchMovies();
        }, []);

    if (!movies.length) {
        return null;
    }

    return (
        <div className="movies__grid">
            {[...movies].map((movie) => <MovieCard
                key={movie.id}
                movie={movie}
                showMovieDetails={showMovieDetails}
            />)}
        </div>
    )

};

const mapState = (state) => {
    return {
        movies: state.filter.type ? state.filter.movies : state.movies || []
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => dispatch(fetchMovies()),
        showMovieDetails: (movieDetails) => dispatch(showMovieDetails(movieDetails))
    }
};

export default connect(mapState, mapDispatchToProps)(MoviesGrid)
