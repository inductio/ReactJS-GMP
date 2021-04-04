import React from 'react';
import '../styles/common.scss';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Modal from './Modal';

const App = () => {
    return (
        <React.Fragment>
            <Header/>
            <Main/>
            <Footer/>
            <Modal/>
        </React.Fragment>
    )
};

export default App;
