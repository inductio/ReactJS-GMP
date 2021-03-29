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
                    <Sort/>
                </div>
                <div className="movies">
                    <MoviesCounter counter={this.props.movies.length} />
                    <MoviesGrid/>
                </div>
            </main>
        )
    }
}

const mapState = (state) => {
    return {
        movies: state.movies || []
    }
};

export default connect( mapState, { fetchMovies })(Main)
