import React from 'react';
import '../../styles/movieForm.scss';

const MovieForm = ({data}) => {
    return (
        <div className="movie-form">
            <h3 className="movie-form__header">
                {data.formTitle}
            </h3>
            <form action={data.action} className="movie-form__form">
                {
                    data.descriptions.map((description, index) => (
                        <p key={index} className={description.className}>
                            {description.text}
                        </p>
                    ))
                }

                {data.formFields}

                <div className="movie-form__buttons">
                    {
                        data.buttons.map(button => (
                            <button
                                key={`${button.title}`}
                                type={button.type}
                                className={`movie-form__btn movie-form__${button.type}`}
                            >
                                {button.title}
                            </button>
                        ))
                    }
                </div>
            </form>
        </div>
    )
};

export default MovieForm;