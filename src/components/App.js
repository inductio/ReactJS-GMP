import React, {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../styles/common.scss';

const App = () => {
    const [selectedMovie, setMovie] = useState(null);
    const handleMovieClick = (movie) => {
        setMovie(movie);
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };

    return (
        <React.Fragment>
            <Header selectedMovie={selectedMovie} backToSearch={() => setMovie(null)}/>
            <Main onCardClick={handleMovieClick}/>
            <Footer/>
        </React.Fragment>
    )
};

export default App;
