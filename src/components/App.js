import React, {useEffect, useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../styles/common.scss';
import {movies} from '../data';
import getMovieById from './utils/getMovieById';

const App = () => {
    const [selectedMovie, setMovie] = useState(null);

    useEffect(() => {
        document.querySelector('.movies__grid').addEventListener('click', handleMovieClick);
    }, []);

    const handleMovieClick = (e) => {
        const movieCard = e.target.closest('.movie-card');

        if (movieCard) {
            setMovie(getMovieById(movies, +movieCard.dataset['id']));
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        }
    };

    const backToSearch = () => {
        setMovie(null);
    };

    return (
        <React.Fragment>
            <Header selectedMovie={selectedMovie} backToSearch={backToSearch}/>
            <Main movies={movies}/>
            <Footer/>
        </React.Fragment>
    )
};

export default App;
