import React from 'react';
import PropTypes from 'prop-types';
import MovieCardMenu from './MovieCardMenu';
import '../../styles/movieCard.scss';
import { useHistory } from 'react-router-dom';

const MovieCard = (props) => {
    const {title, release_date, genres, poster_path, id} = props.movie;
    const browserHistory = useHistory();

    const onCardClick = () => {
        browserHistory.push(`/film/${id}`);
        //props.showMovieDetails(props.movie);
    };

    return (
        <div className="movie-card" onClick={onCardClick}>
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

export default MovieCard;
