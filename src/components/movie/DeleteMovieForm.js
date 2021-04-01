import React from 'react';
import Form from '../form/Form';
import { deleteMovieRequest } from '../../actions';
import { connect } from 'react-redux';

const DeleteMovieForm = (props) => {
    const deleteFormConfig = {
        formTitle: 'Delete Movie',
        buttons: [
            {
                type: 'submit',
                title: 'Confirm'
            }
        ],
        onSubmit: () => {props.deleteMovieRequest(props.movieId)},
        descriptions: [
            {text: 'Are you sure you want to delete this movie?', className: ''}
        ]
    };

    return <Form config={deleteFormConfig}/>
};

const mapState = (state) => {
    return {
        movieId: state.modal.modalMovieId
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteMovieRequest: (movieId) => dispatch(deleteMovieRequest(movieId))
    }
};

export default connect(mapState, mapDispatchToProps)(DeleteMovieForm);
