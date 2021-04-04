import React from 'react';
import '../../styles/modal.scss';
import { connect } from 'react-redux';
import AddMovieForm from '../movie/AddMovieForm';
import EditMovieForm from '../movie/EditMovieForm';
import DeleteMovieForm from '../movie/DeleteMovieForm';
import { showModal } from '../../actions';

const Modal = (props) => (
    props.modalType ?
        <div className="modal">
            <div className="modal__container">
                <button className="modal__close-btn" onClick={() => props.closeModal()}/>
                <div className="modal__content">
                    {props.modalType === 'ADD_MOVIE_TYPE' && <AddMovieForm/>}
                    {props.modalType === 'EDIT_MOVIE_TYPE' && <EditMovieForm/>}
                    {props.modalType === 'DELETE_MOVIE_TYPE' && <DeleteMovieForm/>}
                </div>
            </div>
        </div> : null
);

function mapStateToProps(state) {
    return {
        modalType: state.modal.modalType
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(showModal(null, null))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
