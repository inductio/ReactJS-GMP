export default (state = [], action) => {
    switch (action.type) {
        case  'DELETE_MOVIE_REQUEST':
            return [...state, action.payload];
        default:
            return state;
    }
}
