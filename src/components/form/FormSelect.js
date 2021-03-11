import React from 'react';

const FormSelect = ({field, index}) => {
    const {label, placeholder, defaultValue} = field;
    return (
        <select
            name={label}
            id={`movie-form-id-${index}`}
            className="movie-form__input"
            defaultValue={placeholder}
        >
            <option defaultValue={placeholder} disabled>{placeholder}</option>
            {defaultValue.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
};

export default FormSelect;