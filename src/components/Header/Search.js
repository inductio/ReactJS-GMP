import React from 'react';
import '../../styles/search.scss';

const Search = () => {
    return (
        <form className="search">
            <input type="text" className="search__input" placeholder="What do you want to watch?"/>
            <button type="submit" className="search__submit">Search</button>
        </form>
    )
};

export default Search;
