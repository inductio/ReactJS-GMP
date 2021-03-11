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
                    onClick={() => this.setState({isModalActive: true})}
                >
                    Add movie
                </button>
                {
                    this.state.isModalActive ?
                    <Modal onModalClose={() => this.setState({isModalActive: false})}>
                        <MovieForm data={this.getAddMovieFormData()} form={addMovie} />
                    </Modal> :
                    null
                }
            </>
        )
    }
}

export default AddMovieBtn;
