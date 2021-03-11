import React from 'react';
import '../../styles/sort.scss';

class Sort extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //Default sorting
        this.props.sort(this.sortByDate(this.props.movies));
    }

    onSort = (e) => {
        const value = e.target.value;
        const sortMapStrategy = new Map([
            ['Release Date', () => this.sortByDate(this.props.movies)],
            ['Rating', () => this.sortByRating(this.props.movies)],
            ['Runtime', () => this.sortByRuntime(this.props.movies)]
        ]);

        const movies = sortMapStrategy.get(value)();
        this.props.sort(movies);
    };

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

    getOptions = () => ['Release Date', 'Rating', 'Runtime'];

    render() {
        return (
            <div className="sort">
                <label htmlFor="sort__select" className="sort__label">Sort By</label>
                <select name="sort" id="sort__select" className="sort__select" onChange={this.onSort}>
                    {this.getOptions().map(function (option, index) {
                        return <option key={index} name={option}>{option}</option>
                    })}
                </select>
            </div>
        )
    }
}

export default Sort;
