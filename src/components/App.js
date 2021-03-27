import React, {useState, useEffect, useCallback} from 'react';
import '../styles/common.scss';
import Header from "./Header";
import Main from './Main';
import Footer from './Footer';

const App = () => {
    const [selectedMovie, setMovie] = useState(null);
    const useSelectMovie = useCallback(movie => setMovie(movie), [selectedMovie]);

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [selectedMovie]);

    return (
        <React.Fragment>
            <Header selectedMovie={selectedMovie} backToSearch={() => setMovie(null)}/>
            <Main onCardClick={useSelectMovie}/>
            <Footer/>
        </React.Fragment>
    )
};

export default App;
