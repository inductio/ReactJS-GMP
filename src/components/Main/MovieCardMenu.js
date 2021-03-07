import React from 'react';
import Modal from '../Modal';

class MovieCardMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuActive: false,
            showModal: false,
            modalType: null
        };

        this.toggleMenuPopup = this.toggleMenuPopup.bind(this);
        this.showModal = this.showModal.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
    }

    toggleMenuPopup(isMenuActive) {
        this.setState({isMenuActive});
    }

    showModal({modalType}) {
        this.setState({
            modalType,
            showModal: true
        });
    }

    onModalClose() {
        this.setState({
            modalType: null,
            showModal: false
        });
    }

    render() {
        return (
            <div className={this.state.isMenuActive ? 'movie-card__menu active' : 'movie-card__menu'}>
                <button className="movie-card__menu-open-btn" onClick={this.toggleMenuPopup.bind(this, true)}/>
                <div className={this.state.isMenuActive ? 'movie-card__menu-popup active' : 'movie-card__menu-popup'}>
                    <ul className="movie-card__menu-popup-list">
                        <li className="movie-card__menu-popup-list-item"
                            onClick={this.showModal.bind(this, {modalType: {isEdit: true}})}
                        >
                            Edit
                        </li>
                        <li className="movie-card__menu-popup-list-item"
                            onClick={this.showModal.bind(this, {modalType: {isDelete: true}})}
                        >
                            Delete
                        </li>
                    </ul>
                    <button className="movie-card__menu-close-btn" onClick={this.toggleMenuPopup.bind(this, false)}/>
                </div>
                {this.state.showModal ?
                    <Modal show={true}
                           onModalClose={this.onModalClose.bind(this)}
                           movie={this.props.movie}
                           type={this.state.modalType}
                    >
                        {this.state.modalType}
                    </Modal> :
                    null
                }
            </div>
        )
    }
}

export default MovieCardMenu;
