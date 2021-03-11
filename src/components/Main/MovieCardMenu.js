import React from 'react';
import Modal from '../Modal';
import MovieFormFields from '../MovieForm/MovieFormFields';
import MovieForm from '../MovieForm';

class MovieCardMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuActive: false,
            formData: null,
            modalType: null
        };
    }

    toggleMenuPopup = (isMenuActive) => {
        this.setState({isMenuActive});
    };

    showModal = (formData) => {
        this.setState({
            showModal: true,
            formData
        });
    };

    onModalClose = () => {
        this.setState({
            modalType: null,
            showModal: false
        });
    };

    getEditFormData() {
        return {
            buttons: [
                {
                    type: 'reset',
                    title: 'Reset',
                },
                {
                    type: 'submit',
                    title: 'Save'
                }],
            formTitle: 'Edit Movie',
            action: 'edit',
            formFields: <MovieFormFields movie={this.props.movie}/>,
            descriptions: [
                {text: 'Movie Id', className: 'movie-form__id-title'},
                {text: this.props.movie.id, className: 'movie-form__id-value'}
            ]
        }
    };

    getDeleteFormData() {
        return {
            formTitle: 'Delete Movie',
            buttons: [
                {
                    type: 'submit',
                    title: 'Confirm'
                }
            ],
            formFields: null,
            action: 'delete',
            descriptions: [
                {text: 'Are you sure you want to delete this movie?', className: ''}
            ]
        }
    }

    render() {
        return (
            <div className={this.state.isMenuActive ? 'movie-card__menu active' : 'movie-card__menu'}>
                <button className="movie-card__menu-open-btn" onClick={() => this.toggleMenuPopup( true)}/>
                <div className={this.state.isMenuActive ? 'movie-card__menu-popup active' : 'movie-card__menu-popup'}>
                    <ul className="movie-card__menu-popup-list">
                        <li className="movie-card__menu-popup-list-item"
                            onClick={() => this.showModal(this.getEditFormData())}
                        >
                            Edit
                        </li>
                        <li className="movie-card__menu-popup-list-item"
                            onClick={() => this.showModal(this.getDeleteFormData())}
                        >
                            Delete
                        </li>
                    </ul>
                    <button className="movie-card__menu-close-btn" onClick={() => this.toggleMenuPopup(false)}/>
                </div>
                {this.state.showModal ?
                    <Modal onModalClose={this.onModalClose}>
                        <MovieForm data={this.state.formData}/>
                    </Modal> :
                    null
                }
            </div>
        )
    }
}

export default MovieCardMenu;
