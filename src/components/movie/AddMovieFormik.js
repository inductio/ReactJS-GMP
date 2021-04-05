import React from 'react';
import { Formik, Form, Field } from 'formik';
import { addMovieRequest } from '../../actions';
import { connect } from 'react-redux';

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
            >
                <Form className="movie-form__form">
                    <label htmlFor="movieTitle" className="movie-form__label">Title</label>
                    <Field id="movieTitle" name="title" type="text" placeholder="Add Movie\'s Name Here" className="movie-form__input"/>

                    <label htmlFor="movieDate" className="movie-form__label">Release date</label>
                    <Field id="movieDate" name="release_date" type="date" placeholder="Select Date" className="movie-form__input"/>

                    <label htmlFor="movieUrl" className="movie-form__label">Movie URL</label>
                    <Field id="movieUrl" name="poster_path" type="text" placeholder="Add Movie\'s Name Here" className="movie-form__input"/>

                    <div id="checkbox-group">Select Genre</div>

                    <div role="group" aria-labelledby="checkbox-group">
                        {props.genres.map(genre =>
                            (
                                <label>
                                    <Field type="checkbox" name="genres" value={genre}/>
                                    {genre}
                                </label>
                            )
                        )}
                    </div>

                    <label htmlFor="movieOverview" className="movie-form__label">Overview</label>
                    <Field id="movieOverview" name="overview" type="text" placeholder="Overview here" className="movie-form__input"/>

                    <label htmlFor="movieRuntime" className="movie-form__label">Runtime</label>
                    <Field id="movieRuntime" name="runtime" type="number" placeholder="Runtime here" className="movie-form__input"/>

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
