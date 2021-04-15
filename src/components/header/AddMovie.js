import React from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../actions';

const AddMovie = (props) => {
    return (
        <>
            <button
                className="header__add-movie"
                onClick={() => props.showModal('ADD_MOVIE_TYPE')}
            >
                Add movie
            </button>
        </>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        showModal: (modalType) => dispatch(showModal(modalType))
    }
};

export default connect(null, mapDispatchToProps)(AddMovie);
