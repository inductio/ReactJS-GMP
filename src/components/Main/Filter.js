import React from 'react';
import '../../styles/filter.scss';
import {connect} from 'react-redux';
import {setFilter, filterMovies} from '../../actions';

const Filter = (props) => {
    const regularClassName = 'filter-bar__item';
    const activeClassName = `${regularClassName} active`;

    if (props.filter.length) {
        props.filterMovies([...props.movies], props.filter);
    }

    return (
        <ul className="filter-bar">
            <li className={props.filter === '' ? activeClassName : regularClassName}
                onClick={() => props.setFilter('')}>
                All
            </li>
            {props.genres.map((genre, index) => (
                <li
                    key={index}
                    className={genre === props.filter ? activeClassName : regularClassName}
                    onClick={() => props.setFilter(genre)}
                >
                    {genre}
                </li>
            ))}
        </ul>
    )
};

const mapState = (state) => {
    return {
        movies: state.movies,
        genres: state.genres,
        filter: state.filter || ''
    }
};

export default connect(mapState, {
    setFilter,
    filterMovies,
})(Filter);

