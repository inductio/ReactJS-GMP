import React, {useState} from 'react';
import Modal from '../Modal';
import AddMovieForm from '../movie/AddMovieForm';

const AddMovie = () => {
    const [isModalVisible, setModalVisibility] = useState(false);
    const useToggleModal = () => setModalVisibility(!isModalVisible);
    return (
        <>
            <button
                className="header__add-movie"
                onClick={useToggleModal}
            >
                Add movie
            </button>
            {isModalVisible &&
                <Modal onModalClose={useToggleModal}>
                    <AddMovieForm/>
                </Modal>
            }
        </>
    )
};

export default AddMovie;
