import React, { useEffect } from 'react';
import '../../styles/filter.scss';
import { connect } from 'react-redux';
import { setFilter } from '../../actions';

const Filter = (props) => {
    const regularClassName = 'filter-bar__item';
    const activeClassName = `${regularClassName} active`;

    return (
        <ul className="filter-bar">
            <li className={props.filter === '' ? activeClassName : regularClassName}
                onClick={() => props.setFilter('', props.movies)}>
                All
            </li>
            {props.genres.map((genre, index) => (
                <li
                    key={index}
                    className={genre === props.filter ? activeClassName : regularClassName}
                    onClick={() => props.setFilter(genre, props.movies)}
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

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (filter, movies) => dispatch(setFilter(filter, movies))
    }
};

export default connect(mapState, mapDispatchToProps)(Filter);
