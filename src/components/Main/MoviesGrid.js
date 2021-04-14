import React, { useEffect } from 'react';
import MovieCard from '../movie/MovieCard';
import { connect } from 'react-redux';
import { fetchMoviesByQuery, showMovieDetails} from '../../actions';
import { useParams } from "react-router";

const MoviesGrid = (props) => {
    const { movies, fetchMoviesByQuery, showMovieDetails } = props;
    const { query } = useParams();

    useEffect(() => {
        if (query) {
            fetchMoviesByQuery(query);
        }
    }, [query]);

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
        movies: state.movies || []
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMoviesByQuery: query => dispatch(fetchMoviesByQuery(query)),
        showMovieDetails: movieDetails => dispatch(showMovieDetails(movieDetails))
    }
};

export default connect(mapState, mapDispatchToProps)(MoviesGrid)
