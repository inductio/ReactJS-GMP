import React from 'react';

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

    const alignedMovie = Object.keys(formFields).map((field, index) => {
        return {
            label: formInputs[index].label,
            placeholder: formInputs[index].placeholder,
            defaultValue: formFields[field],
            inputType: formInputs[index].inputType
        }
    });

    return alignedMovie.map(({label, placeholder, defaultValue, inputType}, index) => {
        const movieId = movie.id || '';
        return (
            <React.Fragment key={index}>
                <label
                    key={`label-${index}`}
                    htmlFor={`movie-form-id-${movieId}-${index}`}
                    className="movie-form__label"
                >
                    {label}
                </label>
                {inputType === 'select' ?
                    <select
                        key={`select-${index}`}
                        name={label}
                        id={`movie-form-id-${movieId}-${index}`}
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
                        id={`movie-form-id-${movieId}-${index}`}
                        defaultValue={defaultValue}
                        placeholder={placeholder}
                        className="movie-form__input"
                    />
                }
            </React.Fragment>
        )
    })
};

export default MovieFormFields;