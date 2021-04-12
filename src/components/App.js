import React from 'react';
import '../styles/common.scss';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Modal from './Modal';

import PageNotFound from './PageNotFound';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import MovieDetails from './movie/MovieDetails';

const App = () => {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Header/>
                        <Main/>
                    </Route>
                    <Route path="/search/:SearchQuery">
                        <Header/>
                        <Main/>
                    </Route>
                    <Route path="/film/:MovieId">
                        <MovieDetails/>
                        <Main/>
                    </Route>

                    <Route path="*">
                        <PageNotFound/>
                    </Route>
                </Switch>
            </Router>
            <Footer/>
            <Modal/>
        </React.Fragment>
    )
};

export default App;
