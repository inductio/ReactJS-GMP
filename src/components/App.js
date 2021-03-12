import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../styles/common.scss';

const App = () => (
    <React.Fragment>
        <Header/>
        <Main/>
        <Footer/>
    </React.Fragment>
);

export default App;
