import React from 'react';
import SearchLayout from './layouts/SearchLayout';
import MovieDetailsLayout from './layouts/MovieDetailsLayout';
import Footer from './Footer';
import Modal from './Modal';
import PageNotFound from './PageNotFound';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import '../styles/common.scss';

const App = () => {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path="/" component={SearchLayout} />
                    <Route path="/search/:query" component={SearchLayout} />
                    <Route path="/film/:id" component={MovieDetailsLayout} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </Router>
            <Footer/>
            <Modal/>
        </React.Fragment>
    )
};

export default App;
