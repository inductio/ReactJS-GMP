export default (state = [], action) => {
    switch (action.type) {
        case  'SET_GENRES':
            return [...action.payload.slice(0,10)];
        default:
            return state;
    }
}
