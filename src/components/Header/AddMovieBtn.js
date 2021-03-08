import React from 'react';
import Modal from '../Modal';
import MovieForm from '../MovieForm';

class AddMovieBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalActive: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(isModalActive) {
        this.setState({isModalActive});
    }

    render () {
        return (
            <>
                <button
                    className="header__add-movie"
                    onClick={this.toggleModal.bind(this, true)}
                >Add movie</button>
                {this.state.isModalActive ?
                    <Modal show={true} onModalClose={this.toggleModal.bind(this, false)}>
                        <MovieForm type={{isAdd: true}} movie={{}}/>
                    </Modal> :
                    null
                }
            </>
        )
    }
}

export default AddMovieBtn;
