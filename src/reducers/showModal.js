export default (state = [], action) => {
    switch (action.type) {
        case  'SHOW_MODAL':
            return {...state, ...action.payload};
        default:
            return state;
    }
}