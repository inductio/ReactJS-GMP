import React from 'react';
import '../../styles/movieForm.scss';

const MovieForm = (props) => {
    const {type, movie} = props;
    return (
        <div className={`movie-form ${props.modalType}`}>
            <h3 className="movie-form__header">{type.isEdit ? 'Edit movie' : 'Delete movie'}</h3>
            <p className="movie-form__id-title">Movie Id</p>
            <p className="movie-form__id-value">{movie.id}</p>
            <form action="" className="movie-form__form">
                <label htmlFor="movie-form-title" className="movie-form__label">Title</label>
                <input type="text" id="movie-form-title" defaultValue={movie.title} className="movie-form__input"/>

                <label htmlFor="movie-form-date" className="movie-form__label">Release date</label>
                <input type="date" id="movie-form-date" defaultValue={movie.release_date} className="movie-form__input"/>

                <label htmlFor="movie-form-url" className="movie-form__label">Movie URL</label>
                <input type="text" id="movie-form-url" defaultValue={movie.url} className="movie-form__input"/>

                <label htmlFor="movie-form-genre" className="movie-form__label">Genre</label>
                <select name="genre" id="movie-form-genre" className="movie-form__input">
                    <option value="comedy">comedy</option>
                    <option value="action">action</option>
                </select>

                <label htmlFor="movie-form-overview" className="movie-form__label">Movie overview</label>
                <input type="textarea" id="movie-form-overview" defaultValue={movie.overview} className="movie-form__input"/>

                <label htmlFor="movie-form-runtime" className="movie-form__label">Runtime</label>
                <input type="text" id="movie-form-runtime" defaultValue={movie.runtime} className="movie-form__input"/>

                <div className="movie-form__buttons">
                    <button type="reset" className="movie-form__btn movie-form__reset">Reset</button>
                    <button type="submit" className="movie-form__btn movie-form__save">Save</button>
                </div>
            </form>
        </div>
    )
};

export default MovieForm;