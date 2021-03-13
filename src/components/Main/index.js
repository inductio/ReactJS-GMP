import React from 'react';
import Filter from './Filter';
import Sort from './Sort';
import MoviesGrid from './MoviesGrid';
import MoviesCounter from './MoviesCounter';
import '../../styles/main.scss';
import '../../styles/movies.scss';
import '../../styles/menu.scss';

class Main extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            movies: props.movies
        }
    }

    render() {
        return (
            <main className="main">
                <div className="menu">
                    <Filter/>
                    <Sort sort={movies => this.setState({movies})} movies={this.state.movies}/>
                </div>
                <div className="movies">
                    <MoviesCounter counter={this.state.movies.length} />
                    <MoviesGrid movies={this.state.movies}/>
                </div>
            </main>
        )
    }
}

export default Main;
