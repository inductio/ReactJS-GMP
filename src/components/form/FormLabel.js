import React from 'react';

const FormLabel = ({id, label}) => (
    <label
        className="movie-form__label"
        htmlFor={id}
    >
        {label}
    </label>
);

export default FormLabel;