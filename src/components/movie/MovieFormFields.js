import React from 'react';
import { normalizeMovieFormFields } from '../utils/normalizeMovieFormFields';
import FormFields from '../form/FormFields';

const MovieFormFields = ({movie}) => {
    const formInputs = [
        {
            label: 'Title',
            placeholder: 'Add Movie\'s Name Here',
            inputType: 'text',
        }, {
            label: 'Release date',
            placeholder: 'Select Date',
            inputType: 'date',
        }, {
            label: 'Movie URL',
            placeholder: 'Movie URL here',
            inputType: 'text',
        }, {
            label: 'Genre',
            placeholder: 'Select Genre',
            inputType: 'select',
        }, {
            label: 'Overview',
            placeholder: 'Overview here',
            inputType: 'text',
        }, {
            label: 'Runtime',
            placeholder: 'Runtime here',
            inputType: 'number',
        }];

    return <FormFields fields={normalizeMovieFormFields(movie, formInputs)} />
};

export default MovieFormFields;