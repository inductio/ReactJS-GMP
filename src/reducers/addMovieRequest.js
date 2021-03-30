export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_MOVIE_REQUEST':
            return [...action.payload];
        default:
            return state;
    }
}
