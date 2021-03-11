import React from 'react';
import Form from '../form/Form';
import MovieFormFields from './MovieFormFields';

const AddMovieForm = () => {
    const movieFields = {
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
    };

    const addFormConfig = {
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
        descriptions: []
    };

    return (
        <Form config={addFormConfig}>
            <MovieFormFields movie={movieFields}/>
        </Form>
    )
};

export default AddMovieForm;
