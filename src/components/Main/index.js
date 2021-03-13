import React from 'react';
import Filter from './Filter';
import Sort from './Sort';
import MoviesGrid from './MoviesGrid';
import MoviesCounter from './MoviesCounter';
import {movies} from '../../data';
import '../../styles/main.scss';
import '../../styles/movies.scss';
import '../../styles/menu.scss';

class Main extends React.Component {
    state = {movies};

    render() {
        return (
            <main className="main">
                <div className="menu">
                    <Filter/>
                    <Sort sort={movies => this.setState({movies})} movies={this.state.movies}/>
                </div>
                <div className="movies">
                    <MoviesCounter counter={this.state.movies.length} />
                    <MoviesGrid movies={this.state.movies} onCardClick={this.props.onCardClick}/>
                </div>
            </main>
        )
    }
}

export default Main;
