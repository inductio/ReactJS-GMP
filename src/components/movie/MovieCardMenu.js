import React from 'react';
import Modal from '../Modal';
import EditMovieForm from './EditMovieForm';
import DeleteMovieForm from './DeleteMovieForm';

class MovieCardMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuActive: false,
            formType: ''
        };
    }

    showModal = (formType) => {
        this.setState({
            showModal: true,
            formType
        });
    };

    onModalClose = () => {
        this.setState({
            showModal: false
        });
    };

    getForm = () => {
     const typesMap = {};
        typesMap['edit'] = <EditMovieForm movie={this.props.movie}/>;
        typesMap['delete'] = <DeleteMovieForm movie={this.props.movie}/>;
        return typesMap[this.state.formType];
    };

    render() {
        return (
            <div className={this.state.isMenuActive ? 'movie-card__menu active' : 'movie-card__menu'}>
                <button className="movie-card__menu-open-btn" onClick={() => this.setState({isMenuActive: true})}/>
                <div className={this.state.isMenuActive ? 'movie-card__menu-popup active' : 'movie-card__menu-popup'}>
                    <ul className="movie-card__menu-popup-list">
                        <li className="movie-card__menu-popup-list-item"
                            onClick={() => this.showModal('edit')}
                        >
                            Edit
                        </li>
                        <li className="movie-card__menu-popup-list-item"
                            onClick={() => this.showModal('delete')}
                        >
                            Delete
                        </li>
                    </ul>
                    <button className="movie-card__menu-close-btn" onClick={() => this.setState({isMenuActive: false})}/>
                </div>
                {this.state.showModal ?
                    <Modal onModalClose={this.onModalClose}>
                        {this.getForm()}
                    </Modal> :
                    null
                }
            </div>
        )
    }
}

export default MovieCardMenu;
