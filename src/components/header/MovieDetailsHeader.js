import React from 'react';
import Logo from './../common/Logo';
import MovieDetails from '../movie/MovieDetails';
import '../../styles/header.scss'

const MovieDetailsHeader = () => {
    return (
        <header className="header">
            <Logo/>
            <MovieDetails/>
        </header>
    )
};

export default MovieDetailsHeader;
