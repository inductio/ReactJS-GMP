import React from 'react';
import Filter from './Filter';
import Sort from './Sort';
import MoviesGrid from './MoviesGrid';
import MoviesCounter from './MoviesCounter';
import {movies} from '../../data';
import '../../styles/main.scss';
import '../../styles/movies.scss';
import '../../styles/menu.scss';

class Main extends React.PureComponent {
    render() {
        return (
            <main className="main">
                <div className="menu">
                    <Filter/>
                    <Sort/>
                </div>
                <div className="movies">
                    <MoviesCounter counter={movies.length} />
                    <MoviesGrid movies={movies}/>
                </div>
            </main>
        )
    }
}

export default Main;
