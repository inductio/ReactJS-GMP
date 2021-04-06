import React from 'react';
import { Formik, Form, Field } from 'formik';
import { editMovieRequest } from '../../actions';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as Yup from "yup";
import TextFieldFormik from "./TextFieldFormik";

const EditMovieFormik = (props) => {
    if (!props.movie) {
        return null;
    }

    const editFormConfig = {
        buttons: [
            {
                type: 'reset',
                title: 'Reset',
            },
            {
                type: 'submit',
                title: 'Save',
            }],
        formTitle: 'Edit Movie',
        onSubmit: (values) => {
            props.editMovieRequest(props.movie.id, values);
            return false;
        },
        descriptions: [
            {text: 'Movie Id', className: 'movie-form__id-title'},
            {text: props.movie.id, className: 'movie-form__id-value'}
        ],
        initialValues: _.pick(props.movie, ['title', 'release_date', 'poster_path', 'genres', 'overview', 'runtime'])
    };

    return (
        <div className="movie-form">
            <h3 className="movie-form__header">
                {editFormConfig.formTitle}
            </h3>

            <Formik
                initialValues={editFormConfig.initialValues}
                onSubmit={async values => editFormConfig.onSubmit(values)}
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
                            {editFormConfig.descriptions.map((description, index) => (
                                <p key={index} className={description.className}>
                                    {description.text}
                                </p>
                            ))}

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
                                {editFormConfig.buttons.map(button => (
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
                    )
                }}
            </Formik>
        </div>
    )
};

const mapState = (state) => {
    return {
        movie: state.movies.filter(movie => movie.id === state.modal.modalMovieId)[0]
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        editMovieRequest: (movieId, formData) => dispatch(editMovieRequest(movieId, formData))
    }
};

export default connect(mapState, mapDispatchToProps)(EditMovieFormik);
