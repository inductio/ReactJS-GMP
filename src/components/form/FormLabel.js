import React from 'react';

const FormLabel = ({label, index}) => (
    <label
        className="movie-form__label"
        htmlFor={`movie-form-id-${index}`}
    >
        {label}
    </label>
);

export default FormLabel;