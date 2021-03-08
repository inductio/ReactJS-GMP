import React from 'react';

const MovieFormFields = ({movie}) => {
    const {title, release_date, poster_path, genres, overview, runtime} = movie;
    const formFields = {title, release_date, poster_path, genres, overview, runtime};
    const editLabels = ['Title', 'Release date', 'Movie URL', 'Genre', 'Overview', 'Runtime'];
    const alignedMovie = Object.keys(formFields).map((field, index) => {
        let inputType;
        let typeOf = typeof formFields[field];

        if (!isNaN(parseInt(formFields[field])) && typeOf === 'string' ) {
            inputType = 'date';
        } else if (typeOf === 'object') {
            inputType = 'select';
        } else {
            inputType = 'text';
        }

        return {
            label: editLabels[index],
            defaultValue: formFields[field],
            inputType,
        }
    });

    return alignedMovie.map(( { label, defaultValue, inputType }, index) => {
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
                    >
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
                        className="movie-form__input"
                    />
                }
            </React.Fragment>
        )
    })
};

export default MovieFormFields;