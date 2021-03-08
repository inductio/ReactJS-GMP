import React from 'react';
import '../../styles/sort.scss';

class Sort extends React.Component {
    constructor(props) {
        super(props);
        this.onSort = this.onSort.bind(this);
    }

    onSort(e) {
        let movies;
        const value = e.target.value;

        if (value === 'Release Date') {
            movies = this.sortByDate(this.props.movies)
        }

        if (value === 'Rating') {
            movies = this.sortByRating(this.props.movies)
        }

        this.props.sort(movies)
    }

    sortByDate(movies) {
        return movies.sort((a, b) => {
            return new Date(a.release_date) - new Date(b.release_date);
        })
    }

    sortByRating(movies) {
        return movies.sort((a, b) => {
            return new Date(b.vote_average) - new Date(a.vote_average);
        })
    }

    render() {
        const options = ['Release Date', 'Rating'];
        return (
            <div className="sort">
                <label htmlFor="sort__select" className="sort__label">Sort By</label>
                <select name="sort" id="sort__select" className="sort__select" onChange={this.onSort}>
                    {options.map(function (option, index) {
                        return <option key={index} name={option}>{option}</option>
                    })}
                </select>
            </div>
        )
    }
}

export default Sort;
