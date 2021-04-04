import React from 'react';
import PropTypes from 'prop-types';
import MovieCardMenu from './MovieCardMenu';
import '../../styles/movieCard.scss';
import { showMovieDetails } from '../../actions';
import { connect } from 'react-redux';

const MovieCard = (props) => {
    const {title, release_date, genres, poster_path} = props.movie;
    return (
        <div className="movie-card" onClick={() => props.showMovieDetails(props.movie)}>
            <img
                className="movie-card__img"
                src={poster_path}
                alt={title}
            />
            <div className="movie-card__info">
                <div className="movie-card__title">{title}</div>
                <div className="movie-card__category">{genres}</div>
                <div className="movie-card__year">{parseInt(release_date)}</div>
            </div>
            <MovieCardMenu {...props}/>
        </div>
    )
};

MovieCard.propTypes = {
    movie: PropTypes.object
};

const mapState = (state) => {
    return {
        movieDetails: state.movieDetails,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        showMovieDetails: (movie) => dispatch(showMovieDetails(movie))
    }
};

export default connect(mapState, mapDispatchToProps)(MovieCard);
