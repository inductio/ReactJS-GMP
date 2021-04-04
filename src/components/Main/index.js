import React from 'react';
import Filter from './Filter';
import Sort from './Sort';
import MoviesGrid from './MoviesGrid';
import MoviesCounter from './MoviesCounter';
import '../../styles/main.scss';

const Main = () => {
    return (
        <main className="main">
            <div className="menu">
                <Filter/>
                <Sort/>
            </div>
            <div className="movies">
                <MoviesCounter/>
                <MoviesGrid/>
            </div>
        </main>
    )
};

export default Main
