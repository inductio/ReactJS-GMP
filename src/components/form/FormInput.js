import React from 'react';

const FormInput = ({field, index}) => {
    const {placeholder, defaultValue, inputType} = field;
    return (
        <input
            type={inputType}
            id={`movie-form-id-${index}`}
            defaultValue={defaultValue}
            placeholder={placeholder}
            className="movie-form__input"
        />
    )
 };

export default FormInput;