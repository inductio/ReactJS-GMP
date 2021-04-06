import React from 'react';
import { Formik, Form, Field } from 'formik';
import { addMovieRequest } from '../../actions';
import TextFieldFormik from './TextFieldFormik';
import { connect } from 'react-redux';
import * as Yup from 'yup';

const AddMovieFormik = (props) => {
    const addFormConfig = {
        buttons: [
            {
                type: 'reset',
                title: 'Reset',
            },
            {
                type: 'submit',
                title: 'Submit'
            }],
        formTitle: 'Add Movie',
        onSubmit: (values) => {
            props.addMovieRequest(values);
        },
        initialValues: {
            title: '',
            release_date: 0,
            poster_path : '',
            genres: props.genres,
            overview : '',
            runtime: 0
        }
    };

    return (
        <div className="movie-form">
            <h3 className="movie-form__header">
                {addFormConfig.formTitle}
            </h3>

            <Formik
                initialValues = {addFormConfig.initialValues}
                onSubmit={async values => addFormConfig.onSubmit(values)}
                validationSchema={Yup.object().shape({
                    title: Yup.string().required("Required"),
                    poster_path: Yup.string().required("Required"),
                    overview: Yup.string().required("Required"),
                    runtime: Yup.number().required("Required")
                })}
            >
                {(props) => {
                    const {
                        values,
                        touched,
                        errors
                    } = props;
                    return (
                        <Form className="movie-form__form">
                            <TextFieldFormik id="movieTitle" name="title" type="text" placeholder="Add Movie\'s Name Here" label="Title"/>
                            <TextFieldFormik id="movieDate" name="release_date" type="date" placeholder="Select Date" label="Release date"/>
                            <TextFieldFormik id="movieUrl" name="poster_path" type="text" placeholder="Add Movie\'s Url Here" label="Movie URL"/>

                            <div id="checkbox-group">Select Genre</div>
                            <div role="group" aria-labelledby="checkbox-group">
                                {values.genres.map((genre, idx) =>
                                    (
                                        <label key={idx}>
                                            <Field type="checkbox" name="genres" value={genre}/>
                                            {genre}
                                        </label>
                                    )
                                )}
                            </div>

                            <TextFieldFormik id="movieOverview" name="overview" type="text" placeholder="Overview here" label="Overview"/>
                            <TextFieldFormik id="movieRuntime" name="runtime" type="number" placeholder="Runtime here" label="Runtime"/>

                            <div className="movie-form__buttons">
                                {addFormConfig.buttons.map(button => (
                                    <button
                                        key={`${button.title}`}
                                        type={button.type}
                                        className={`movie-form__btn movie-form__${button.type}`}
                                    >
                                        {button.title}
                                    </button>
                                ))}
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    )
};

const mapState = (state) => {
    return {
        genres: state.genres
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMovieRequest: (formData) => dispatch(addMovieRequest(formData))
    }
};

export default connect(mapState, mapDispatchToProps)(AddMovieFormik);
