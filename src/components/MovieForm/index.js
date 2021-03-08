import React from 'react';
import EditFields from './EditFields';
import '../../styles/movieForm.scss';

const Index = (props) => {
    const {type, movie} = props;
    return (
        <div className={`movie-form ${props.modalType}`}>
            <h3 className="movie-form__header">{type.isEdit ? 'Edit movie' : 'Delete movie'}</h3>
            <form action="" className="movie-form__form">
                {type.isEdit &&
                    <>
                        <p className="movie-form__id-title">Movie Id</p>
                        <p className="movie-form__id-value">{movie.id}</p>
                        <EditFields movie={movie}/>
                        <div className="movie-form__buttons">
                            <button type="reset" className="movie-form__btn movie-form__decline">Reset</button>
                            <button type="submit" className="movie-form__btn movie-form__submit">Save</button>
                        </div>
                    </>
                }
                {type.isDelete &&
                    <>
                        <p>Are you sure you want to delete this movie?</p>
                        <div className="movie-form__buttons">
                            <button type="submit" className="movie-form__btn movie-form__submit">Delete</button>
                        </div>
                    </>
                }
            </form>
        </div>
    )
};

export default Index;