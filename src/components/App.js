import React from 'react';
import '../styles/common.scss';
import Header from "./Header";
import Main from './Main';
import Footer from './Footer';
import Modal from './Modal';

class App extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Main/>
                <Footer/>
                <Modal show={true}>content</Modal>
            </React.Fragment>
        )
    }
}

export default App;
