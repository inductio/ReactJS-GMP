import React from 'react';
import '../../styles/filter.scss';


class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 'All'
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(item) {
        this.setState({selectedItem: item});
    }

    render() {
        const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
        const regularItemClassName = 'filter-bar__item';
        const activeItemClassName = `${regularItemClassName} active`;
        return (
            <ul className="filter-bar">
                {genres.map(function (genre, index) {
                    return (
                        <li
                            key={index}
                            className={genre === this.state.selectedItem ? activeItemClassName : regularItemClassName}
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
