import React, {useState} from 'react';
import '../../styles/filter.scss';
import {genres} from '../../data';

const Filter = () => {
    const [activeFilter, setFilter] = useState(genres[0]);
    const regularClassName = 'filter-bar__item';
    const activeClassName = `${regularClassName} active`;

    return (
        <ul className="filter-bar">
            {genres.map((genre, index) => (
                <li
                    key={index}
                    className={genre === activeFilter ? activeClassName : regularClassName}
                    onClick={() => setFilter(genre)}
                >
                    {genre}
                </li>
            ))}
        </ul>
    )
};

export default Filter;
