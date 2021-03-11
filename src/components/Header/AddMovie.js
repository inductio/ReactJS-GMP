import React from 'react';
import Modal from '../Modal';
import AddMovieForm from '../movie/AddMovieForm';

class AddMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalActive: false
        };
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
                        <AddMovieForm/>
                    </Modal> :
                    null
                }
            </>
        )
    }
}

export default AddMovie;
