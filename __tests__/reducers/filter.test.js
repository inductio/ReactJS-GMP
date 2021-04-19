import filter, { initialState } from '../../src/reducers/filter';

it('should return initial state when action type doesnt match filter\'s action', () => {
    const action = {
        type: 'ANOTHER_TYPE'
    };

    expect(filter(initialState, action)).toBe(initialState);
});

it('should return new filter type when action type match filter\'s action', () => {
    const filterType = 'genres';
    const action = {
        type: 'SET_FILTER_TYPE',
        payload: filterType
    };

    expect(filter(initialState, action)).toBe(filterType);
});
