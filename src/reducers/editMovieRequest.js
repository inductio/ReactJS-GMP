export default (state = [], action) => {
    switch (action.type) {
        case  'EDIT_MOVIE_REQUEST':
            return [...action.payload];
        default:
            return state;
    }
}
