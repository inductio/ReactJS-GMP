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

const mapStateToProps = (state) => {
    return { showModal: state.showModal}
};

export default connect(mapStateToProps, {
    showModal
})(AddMovie);
