import React from 'react';

const MoviesCounter = (props) => {
    return (
        <div className="movies__results-counter"><b>{props.counter}</b> movies found</div>
    )
};

export default MoviesCounter;
