import React from 'react';
import '../../styles/logo.scss';

class MovieCardMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuActive: false
        };

        this.toggleMenuPopup = this.toggleMenuPopup.bind(this);
    }

    toggleMenuPopup(isMenuActive) {
        this.setState({isMenuActive});
    }

    render() {
        return (
            <div className={this.state.isMenuActive ? 'movie-card__menu active' : 'movie-card__menu'}>
                <button className="movie-card__menu-open-btn" onClick={this.toggleMenuPopup.bind(this, true)}/>
                <div className={this.state.isMenuActive ? 'movie-card__menu-popup active' : 'movie-card__menu-popup'}>
                    <ul className="movie-card__menu-popup-list">
                        <li className="movie-card__menu-popup-list-item">Edit</li>
                        <li className="movie-card__menu-popup-list-item">Delete</li>
                    </ul>
                    <button className="movie-card__menu-close-btn" onClick={this.toggleMenuPopup.bind(this, false)}/>
                </div>
            </div>
        )
    }
}

export default MovieCardMenu;
