import React, { useRef } from 'react';
import '../../styles/movieForm.scss';

const Form = ({config, children}) => {

    return (
        <div className="movie-form">
            <h3 className="movie-form__header">
                {config.formTitle}
            </h3>
            <form className="movie-form__form" onSubmit={config.onSubmit}>
                {config.descriptions.map((description, index) => (
                    <p key={index} className={description.className}>
                        {description.text}
                    </p>
                ))}
                {children}
                <div className="movie-form__buttons">
                    {config.buttons.map(button => (
                        <button
                            key={`${button.title}`}
                            type={button.type}
                            className={`movie-form__btn movie-form__${button.type}`}
                        >
                            {button.title}
                        </button>
                    ))}
                </div>
            </form>
        </div>
    )
};

export default Form;