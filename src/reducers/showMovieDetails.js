export default (state = {}, action) => {
    switch (action.type) {
        case  'SHOW_MOVIE_DETAILS':
            return {...state, ...action.payload};
        default:
            return state;
    }
}
