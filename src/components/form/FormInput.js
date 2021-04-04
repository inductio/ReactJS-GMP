import React from 'react';

const FormInput = ({field}) => {
    const {id, placeholder, defaultValue, inputType} = field;
    return (
        <input
            id={id}
            type={inputType}
            defaultValue={defaultValue}
            placeholder={placeholder}
            className="movie-form__input"
        />
    )
 };

export default FormInput;
