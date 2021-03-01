import React from 'react';
import '../../styles/filter.scss';
import {genres} from '../../data';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: genres[0]
        };

        this.regularClassName = 'filter-bar__item';
        this.activeClassName = `${this.regularClassName} active`;

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(selectedGenre) {
        this.setState({selectedItem: selectedGenre});
    }

    render() {
        return (
            <ul className="filter-bar">
                {genres.map(function (genre, index) {
                    return (
                        <li
                            key={index}
                            className={genre === this.state.selectedItem ? this.activeClassName : this.regularClassName}
                            onClick={this.handleClick.bind(null, genre)}
                        >
                            {genre}
                        </li>
                    )
                }, this)}
            </ul>
        )
    }
}

export default Filter;
