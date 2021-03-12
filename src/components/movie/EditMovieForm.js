import React from 'react';
import Form from '../form/Form';
import MovieFormFields from './MovieFormFields';

const EditMovieForm = ({movie}) => {
    const editFormConfig = {
        buttons: [
            {
                type: 'reset',
                title: 'Reset',
            },
            {
                type: 'submit',
                title: 'Save'
            }],
        formTitle: 'Edit Movie',
        action: 'edit',
        descriptions: [
            {text: 'Movie Id', className: 'movie-form__id-title'},
            {text: movie.id, className: 'movie-form__id-value'}
        ]
    };

    return (
        <Form config={editFormConfig}>
            <MovieFormFields movie={movie}/>
        </Form>
    )
};

export default EditMovieForm;
