export default (state = [], action) => {
    switch (action.type) {
        case  'SET_ACTIVE_MOVIES':
            return [...action.payload];
        default:
            return state;
    }
}
