import React from 'react';

const FormFields = ({fields}) => {
    return fields.map(({label, placeholder, defaultValue, inputType}, index) => {
        return (
            <React.Fragment key={index}>
                <label
                    key={`label-${index}`}
                    htmlFor={`movie-form-id-${index}`}
                    className="movie-form__label"
                >
                    {label}
                </label>
                {inputType === 'select' ?
                    <select
                        key={`select-${index}`}
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
                    </select> :
                    <input
                        key={`input-${index}`}
                        type={inputType}
                        id={`movie-form-id-${index}`}
                        defaultValue={defaultValue}
                        placeholder={placeholder}
                        className="movie-form__input"
                    />
                }
            </React.Fragment>
        )
    })
};

export default FormFields;