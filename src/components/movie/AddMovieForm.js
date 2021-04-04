import React from 'react';
import Form from '../form/Form';
import MovieFormFields from './MovieFormFields';
import { addMovieRequest } from '../../actions';
import { connect } from 'react-redux';
import serializeFormData from '../utils/serializeFormData';

const AddMovieForm = (props) => {
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
        onSubmit: (e) => {
            props.addMovieRequest(serializeFormData(e.target));
            e.preventDefault();
            return false;
        },
        descriptions: []
    };

    return (
        <Form config={addFormConfig}>
            <MovieFormFields movie={movieFields}/>
        </Form>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMovieRequest: (formData) => dispatch(addMovieRequest(formData))
    }
};

export default connect(null, mapDispatchToProps)(AddMovieForm);
