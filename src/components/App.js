import React from 'react';
import '../styles/common.scss';
import Header from "./header";
import Main from './main';
import Footer from './Footer';
import ErrorBoundary from './common/ErrorBoundary';

class App extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <ErrorBoundary>
                    <Header/>
                    <Main/>
                    <Footer/>
                </ErrorBoundary>
            </React.Fragment>
        )
    }
}

export default App;
