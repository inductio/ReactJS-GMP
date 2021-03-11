import React from 'react';
import FormFields from '../form/FormFields';

const MovieFormFields = ({movie}) => {
    const {title, release_date, poster_path, genres, overview, runtime} = movie;
    const formFields = {title, release_date, poster_path, genres, overview, runtime};
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

    const normalizedMovie = Object.keys(formFields).map((field, index) => {
        return {
            label: formInputs[index].label,
            placeholder: formInputs[index].placeholder,
            defaultValue: formFields[field],
            inputType: formInputs[index].inputType
        }
    });

    return <FormFields fields={normalizedMovie} />
};

export default MovieFormFields;