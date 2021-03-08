import React from 'react';
import '../../styles/sort.scss';

class Sort extends React.Component {
    constructor(props) {
        super(props);
        this.onSort = this.onSort.bind(this);

        //Default sorting
        this.props.sort(this.sortByDate(this.props.movies));
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

        if (value === 'Runtime') {
            movies = this.sortByRuntime(this.props.movies)
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
            return b.vote_average - a.vote_average;
        })
    }

    sortByRuntime(movies) {
        return movies.sort((a, b) => {
            return b.runtime - a.runtime;
        })
    }

    render() {
        const options = ['Release Date', 'Rating', 'Runtime'];
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
