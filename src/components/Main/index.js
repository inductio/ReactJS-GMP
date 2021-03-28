import React from 'react';
import Filter from './Filter';
import Sort from './Sort';
import MoviesGrid from './MoviesGrid';
import MoviesCounter from './MoviesCounter';
import { fetchMovies } from '../../actions';
import { connect } from 'react-redux';
import '../../styles/main.scss';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        return (
            <main className="main">
                <div className="menu">
                    <Filter/>
                    <Sort sort={movies => this.setState({movies})} movies={this.props.movies}/>
                </div>
                <div className="movies">
                    <MoviesCounter counter={this.props.movies.length} />
                    <MoviesGrid movies={this.props.movies} onCardClick={this.props.onCardClick}/>
                </div>
            </main>
        )
    }
}


const mapState = (state) => {
    return {
        movies: state.fetchMovies.movies || []
    }
};

export default connect( mapState, { fetchMovies })(Main)
