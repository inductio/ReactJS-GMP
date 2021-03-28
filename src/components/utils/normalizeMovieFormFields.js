export const normalizeMovieFormFields = (movie, formInputs) => {
    const {title, release_date, poster_path, genres, overview, runtime} = movie;
    const formFields = {title, release_date, poster_path, genres, overview, runtime};
    return Object.keys(formFields).map((field, index) => (
        {
            id: formInputs[index].id,
            label: formInputs[index].label,
            placeholder: formInputs[index].placeholder,
            defaultValue: formFields[field],
            inputType: formInputs[index].inputType
        }
    ));
};
