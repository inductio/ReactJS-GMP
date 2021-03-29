import React from 'react';
import Logo from './../common/Logo';
import HeaderTitle from './HeaderTitle';
import AddMovie from './AddMovie';
import Search from './Search';
import MovieDetails from '../movie/MovieDetails';
import '../../styles/header.scss'
import { connect } from 'react-redux';

const Header = (props) => {
    return (
        <header className="header">
            <Logo/>
            {props.selectedMovie ?
                <MovieDetails selectedMovie={props.selectedMovie}/> :
                <>
                    <HeaderTitle title={'Find your movie'}/>
                    <AddMovie/>
                    <Search/>
                </>
            }
        </header>
    )
};

const mapState = (state) => {
    return {
        selectedMovie: state.showMovieDetails.movieDetails
    }
};

export default connect(mapState)(Header);
