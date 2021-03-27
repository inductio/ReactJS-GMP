import React, {useEffect} from 'react';
import {byDate, byRating, byRuntime} from './../utils/sortUtils';
import '../../styles/sort.scss';

const sortOptions = ['Release Date', 'Rating', 'Runtime'];

const Sort = ({movies, sort}) => {
    useEffect(() => {
        //Default Sorting
        sort(movies.sort(byDate));
    }, []);

    const onSort = (e) => {
        const value = e.target.value;
        const sortMapStrategy = new Map([
            ['Release Date', () => movies.sort(byDate)],
            ['Rating', () => movies.sort(byRating)],
            ['Runtime', () => movies.sort(byRuntime)]
        ]);
        sort(sortMapStrategy.get(value)());
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

export default Sort;
