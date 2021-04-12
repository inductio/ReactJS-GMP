import _ from 'lodash';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case  'SET_MOVIES':
            return [...action.payload];
        case  'UPDATE_MOVIES':
            const movies = [...state].map(
                movie => movie.id === action.payload.id ? _.extend(movie, action.payload) : movie
            );
            return [...movies];
        case  'UPDATE_WITH_NEW_MOVIE':
            return [...state, action.payload];
        default:
            return state;
    }
}
