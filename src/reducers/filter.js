const initialState = {
    type: '',
    movies: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case  'SET_FILTER':
            return {type: action.payload.type, movies: [...action.payload.movies]};
        default:
            return state;
    }
}
