import React from 'react';
import Logo from './../common/Logo';
import '../../styles/movieDetails.scss';

const MovieDetails = (props) => {
    const {title, tagline, overview, runtime, vote_average, release_date, poster_path} = props.selectedMovie;

    return (
        <div className="movie-details">
            <Logo/>
            <img
                className="movie-details__img"
                src={poster_path}
                alt={title}
            />
            <div className="movie-details__description">
                <h2 className="movie-details__title">
                    {title} <span className="movie-details__rating">{vote_average}</span>
                </h2>
                <div className="movie-details__tagline">{tagline}</div>
                <div className="movie-details__numbers">
                    <span className="movie-details__date">{parseInt(release_date)}</span>{runtime} min
                </div>
                <div className="movie-details__overview">
                    {overview}
                </div>

            </div>
            <button className="movie-details__back" onClick={props.backToSearch}></button>
        </div>
    )
};

export default MovieDetails;
