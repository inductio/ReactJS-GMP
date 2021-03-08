import React from 'react';
import Modal from '../Modal';
import MovieForm from '../MovieForm';
import MovieFormFields from '../MovieForm/MovieFormFields';

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

    getAddMovieFormFields() {
        return {
            title: '',
            release_date: new Date().toLocaleDateString(),
            poster_path: '',
            overview: '',
            genres: [
                'Action',
                'Adventure',
                'Comedy',
                'Crime',
                'Documentary',
                'Family',
                'Horror'
            ],
            runtime: ''
        }
    }

    getAddMovieFormData() {
        return {
            buttons: [
                {
                    type: 'reset',
                    title: 'Reset',
                },
                {
                    type: 'submit',
                    title: 'Submit'
                }],
            formTitle: 'Add Movie',
            action: 'add',
            formFields: <MovieFormFields movie={this.getAddMovieFormFields()}/>,
            descriptions: []
        }
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
                        <MovieForm data={this.getAddMovieFormData()}/>
                    </Modal> :
                    null
                }
            </>
        )
    }
}

export default AddMovieBtn;
