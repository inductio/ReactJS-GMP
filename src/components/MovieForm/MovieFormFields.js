import React from 'react';

const MovieFormFields = ({movie}) => {
    const {title, release_date, poster_path, genres, overview, runtime} = movie;
    const formFields = {title, release_date, poster_path, genres, overview, runtime};
    const formLabels = [
        {
            label: 'Title',
            placeholder: 'Add Movie\'s Name Here',
        }, {
            label: 'Release date',
            placeholder: 'Select Date',
        }, {
            label: 'Movie URL',
            placeholder: 'Movie URL here',
        }, {
            label: 'Genre',
            placeholder: 'Select Genre'
        }, {
            label: 'Overview',
            placeholder: 'Overview here'
        }, {
            label: 'Runtime',
            placeholder: 'Runtime here'
        }];

    const alignedMovie = Object.keys(formFields).map((field, index) => {
        let inputType;
        let typeOf = typeof formFields[field];

        if (!isNaN(parseInt(formFields[field])) && typeOf === 'string') {
            inputType = 'date';
        } else if (typeOf === 'object') {
            inputType = 'select';
        } else {
            inputType = 'text';
        }

        return {
            label: formLabels[index].label,
            placeholder: formLabels[index].placeholder,
            defaultValue: formFields[field],
            inputType,
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