import React from 'react';
import Form from '../form/Form';
import MovieFormFields from './MovieFormFields';
import { editMovieRequest } from '../../actions';
import { connect } from 'react-redux';
import serializeFormData from '../utils/serializeFormData';

const EditMovieForm = (props) => {
    if (!props.movie) {
        return null;
    }

    const editFormConfig = {
        buttons: [
            {
                type: 'reset',
                title: 'Reset',
            },
            {
                type: 'submit',
                title: 'Save',
            }],
        formTitle: 'Edit Movie',
        onSubmit: (e) => {
            props.editMovieRequest(props.movie.id, serializeFormData(e.target));
            e.preventDefault();
            return false;
            },
        descriptions: [
            {text: 'Movie Id', className: 'movie-form__id-title'},
            {text: props.movie.id, className: 'movie-form__id-value'}
        ]
    };

    return (
        <Form config={editFormConfig}>
            <MovieFormFields movie={props.movie}/>
        </Form>
    )
};

const mapState = (state) => {
    return {
        movie: state.movies.filter(movie => movie.id === state.modal.modalMovieId)[0]
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        editMovieRequest: (movieId, formData) => dispatch(editMovieRequest(movieId, formData))
    }
};

export default connect(mapState, mapDispatchToProps)(EditMovieForm);
