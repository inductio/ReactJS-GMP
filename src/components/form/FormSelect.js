import React from 'react';

const FormSelect = ({field}) => {
    const {id, label, placeholder, defaultValue} = field;
    return (
        <select
            id={id}
            name={label}
            className="movie-form__input"
            defaultValue={placeholder}
        >
            <option defaultValue={placeholder} disabled>{placeholder}</option>
            {Array.isArray(defaultValue) ? defaultValue.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                    {option}
                </option>
            )) : <option value={defaultValue}>
                    {defaultValue}
                </option>}
        </select>
    )
};

export default FormSelect;
