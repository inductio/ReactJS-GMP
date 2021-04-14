import React from 'react';
import '../../styles/sort.scss';
import { connect } from 'react-redux';
import { sortMovies } from '../../actions';
const sortOptions = [
    {title: 'Release Date', value: 'release_date'},
    {title: 'Rating', value: 'vote_average'},
    {title: 'Runtime', value: 'runtime'},
    {title: 'Genre', value: 'genres'}
];

const Sort = (props) => {
    const onSort = (e) => {
        props.sortMovies(e.target.value);
    };

    return (
        <div className="sort">
            <label htmlFor="sort__select" className="sort__label">Sort By</label>
            <select name="sort" id="sort__select" className="sort__select" onChange={onSort}>
                {sortOptions.map(function (option, index) {
                    return <option key={index} value={option.value}>{option.title}</option>
                })}
            </select>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        sortMovies: sortType => dispatch(sortMovies(sortType))
    }
};

export default connect(null, mapDispatchToProps)(Sort)
