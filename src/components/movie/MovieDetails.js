import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchMovieDetails } from '../../actions';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import '../../styles/movieDetails.scss';

const MovieDetails = (props) => {
    const { id } = useParams();
    const browserHistory = useHistory();

    useEffect(() => {
        props.fetchMovieDetails(id);
    }, [id]);

    if (!props.selectedMovie) {
        return null;
    }

    const {title, tagline, overview, runtime, vote_average, release_date, poster_path} = props.selectedMovie;

    return (
        <div className="movie-details">
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
            <button className="movie-details__back" onClick={() => browserHistory.push('/')} title="Back to Search"/>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        selectedMovie: state.movieDetails
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieDetails: id => dispatch(fetchMovieDetails(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
