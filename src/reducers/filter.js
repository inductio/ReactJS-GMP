const initialState = '';

export default (state = initialState, action) => {
    switch (action.type) {
        case  'SET_FILTER_TYPE':
            return action.payload;
        default:
            return state;
    }
}
