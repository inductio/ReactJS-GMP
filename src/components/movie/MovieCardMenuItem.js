import React from 'react';

const MovieCardMenuItem = ({onClick, title}) => {
    return (
        <li className="movie-card__menu-popup-list-item" onClick={onClick}>
            {title}
        </li>
    )
};

export default MovieCardMenuItem;
