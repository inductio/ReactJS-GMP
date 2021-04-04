export default (state = null, action) => {
    switch (action.type) {
        case  'SHOW_MOVIE_DETAILS':
            return action.payload ? {...action.payload} : null;
        default:
            return state;
    }
}
