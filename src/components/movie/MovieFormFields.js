import React from 'react';
import { normalizeMovieFormFields } from '../utils/normalizeMovieFormFields';
import FormFields from '../form/FormFields';
import { formInputsConfig } from '../form/formInputsConfig';

const MovieFormFields = ({movie}) => {
    return <FormFields fields={normalizeMovieFormFields(movie, formInputsConfig)} />
};

export default MovieFormFields;
