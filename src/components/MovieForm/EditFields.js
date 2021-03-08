import React from 'react';

const EditFields = ({movie}) => {
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
        return (
            <React.Fragment key={index}>
                <label htmlFor={`movie-form-id-${movie.id}-${index}`} className="movie-form__label">{label}</label>
                {inputType === 'select' ?
                    <select name={label} id={`movie-form-id-${movie.id}-${index}`} className="movie-form__input">
                        {defaultValue.map((option) => (
                            <option value={option}>{option}</option>
                        ))}
                    </select> :
                    <input type={inputType} id={`movie-form-id-${movie.id}-${index}`} defaultValue={defaultValue} className="movie-form__input"/>
                }
            </React.Fragment>
        )
    })
};

export default EditFields;