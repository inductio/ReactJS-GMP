import React from 'react';
import '../styles/common.scss';
import Header from "./Header";
import Main from './Main';
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
