import React from 'react';
import Modal from '../Modal';
import EditMovieForm from './EditMovieForm';
import DeleteMovieForm from './DeleteMovieForm';

class MovieCardMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuActive: false,
            form: null
        };
    }

    showModal = (form) => {
        this.setState({
            showModal: true,
            form
        });
    };

    onModalClose = () => {
        this.setState({
            showModal: false
        });
    };

    render() {
        return (
            <div className={this.state.isMenuActive ? 'movie-card__menu active' : 'movie-card__menu'}>
                <button className="movie-card__menu-open-btn" onClick={() => this.setState({isMenuActive: true})}/>
                <div className={this.state.isMenuActive ? 'movie-card__menu-popup active' : 'movie-card__menu-popup'}>
                    <ul className="movie-card__menu-popup-list">
                        <li className="movie-card__menu-popup-list-item"
                            onClick={() => this.showModal(<EditMovieForm movie={this.props.movie}/>)}
                        >
                            Edit
                        </li>
                        <li className="movie-card__menu-popup-list-item"
                            onClick={() => this.showModal(<DeleteMovieForm movie={this.props.movie}/>)}
                        >
                            Delete
                        </li>
                    </ul>
                    <button className="movie-card__menu-close-btn" onClick={() => this.setState({isMenuActive: false})}/>
                </div>
                {this.state.showModal ?
                    <Modal onModalClose={this.onModalClose}>
                        {this.state.form}
                    </Modal> :
                    null
                }
            </div>
        )
    }
}

export default MovieCardMenu;
