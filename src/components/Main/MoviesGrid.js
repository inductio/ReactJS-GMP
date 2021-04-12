import React, { useEffect } from 'react';
import MovieCard from '../movie/MovieCard';
import { connect } from 'react-redux';
import { fetchMoviesByQuery } from '../../actions';
import { showMovieDetails } from '../../actions';
import { useParams } from "react-router";

const MoviesGrid = (props) => {
    const { movies, fetchMoviesByQuery, showMovieDetails } = props;
    const { SearchQuery } = useParams();

    useEffect(() => {
        if (SearchQuery) {
            fetchMoviesByQuery(SearchQuery);
        }
    }, [SearchQuery]);

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
        fetchMoviesByQuery: query => dispatch(fetchMoviesByQuery(query)),
        showMovieDetails: movieDetails => dispatch(showMovieDetails(movieDetails))
    }
};

export default connect(mapState, mapDispatchToProps)(MoviesGrid)
