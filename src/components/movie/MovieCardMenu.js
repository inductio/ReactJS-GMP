import React, {useState} from 'react';
import Modal from '../Modal';
import EditMovieForm from './EditMovieForm';
import DeleteMovieForm from './DeleteMovieForm';
import MovieCardMenuItem from './MovieCardMenuItem';
const menu = ['Edit', 'Delete'];

const MovieCardMenu = (props) => {
    const [isModalVisible, setModalVisibility] = useState(false);
    const [isMenuVisible, setMenuVisibility] = useState(false);
    const [formType, setFormType] = useState('');

    const useToggleModal = () => setModalVisibility(!isModalVisible);
    const useToggleMenu = () => setMenuVisibility(!isMenuVisible);

    const useShowModal = (formType) => {
        setFormType(formType);
        useToggleModal();
    };

    const getForm = () => {
        const typesMap = {};
        typesMap['Edit'] = <EditMovieForm {...props}/>;
        typesMap['Delete'] = <DeleteMovieForm {...props}/>;
        return typesMap[formType];
    };

    return (
        <div className="movie-card__menu">
            <button className="movie-card__menu-open-btn" onClick={useToggleMenu}/>
            {isMenuVisible && (
                <div className="movie-card__menu-popup">
                    <ul className="movie-card__menu-popup-list">
                        {menu.map(item => <MovieCardMenuItem key={item} onClick={() => useShowModal(item)} title={item}/>)}
                    </ul>
                    <button className="movie-card__menu-close-btn" onClick={useToggleMenu}/>
                </div>
            )}
            {isModalVisible && (
                <Modal onModalClose={useToggleModal}>
                    {getForm()}
                </Modal>
            )}
        </div>
    )
};

export default MovieCardMenu;
