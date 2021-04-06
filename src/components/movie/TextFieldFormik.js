import React from 'react';
import { Field, useField } from 'formik';

const TextFieldFormik = ({id, label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={id} className="movie-form__label">{label}</label>
            <Field
                id={id}
                {...props}
                {...field}
                className={meta.touched && meta.error ? "movie-form__input error" : "movie-form__input"}
            />
        </>
    );
};

export default TextFieldFormik;
