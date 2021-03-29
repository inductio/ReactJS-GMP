import React from 'react';
import '../../styles/sort.scss';
import { connect } from 'react-redux';
import { sortMovies } from '../../actions';
const sortOptions = ['Release Date', 'Rating', 'Runtime', 'Genre'];

const Sort = (props) => {
    const onSort = (e) => {
        props.sortMovies(e.target.value, props.movies);
    };

    return (
        <div className="sort">
            <label htmlFor="sort__select" className="sort__label">Sort By</label>
            <select name="sort" id="sort__select" className="sort__select" onChange={onSort}>
                {sortOptions.map(function (option, index) {
                    return <option key={index} name={option}>{option}</option>
                })}
            </select>
        </div>
    )
};

const mapState = (state) => {
    return {
        movies: state.movies || []
    }
};

export default connect(mapState, {sortMovies})(Sort)

