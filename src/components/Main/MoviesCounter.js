import React from 'react';
import { connect } from "react-redux";

const MoviesCounter = ({counter}) => (
    <div className="movies__results-counter"><b>{counter}</b> movies found</div>
);

const mapState = (state) => {
    return {
        counter: state.movies.length
    }
};

export default connect(mapState)(MoviesCounter)
