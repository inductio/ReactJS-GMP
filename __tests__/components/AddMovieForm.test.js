import React from 'react';
import AddMovieFormik from '../../src/components/movie/AddMovieFormik';
import store from '../../src/store';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
Enzyme.configure({ adapter: new Adapter() });

describe('Add Movie Form', () => {
    const tree = mount(
        <Provider store={ store }>
            <AddMovieFormik/>
        </Provider>
    );

    it('Should update title field', async () => {
        const titleInput = tree.find('input[name="title"]').first();
        await act(async () => {
             titleInput.simulate('change', {
                target: {
                    name: 'title',
                    value: 'Test Title'
                }
            });
        });

        expect(titleInput.html()).toMatch('Test Title');
    });

    it('Should update date field', async () => {
        const dateInput = tree.find('input[name="release_date"]').first();
        await act(async () => {
            dateInput.simulate('change', {
                target: {
                    name: 'release_date',
                    value: '2021-04-01'
                }
            });
        });

        expect(dateInput.html()).toMatch('2021-04-01');
    });

    it('Should update poster path field', async () => {
        const posterPathInput = tree.find('input[name="poster_path"]').first();
        await act(async () => {
            posterPathInput.simulate('change', {
                target: {
                    name: 'poster_path',
                    value: '//test.img'
                }
            });
        });

        expect(posterPathInput.html()).toMatch('//test.img');
    });

    it('Should update overview field', async () => {
        const overviewInput = tree.find('input[name="overview"]').first();
        await act(async () => {
            overviewInput.simulate('change', {
                target: {
                    name: 'overview',
                    value: 'Test Overview'
                }
            });
        });

        expect(overviewInput.html()).toMatch('Test Overview');
    });

    it('Should update runtime field', async () => {
        const runtimeInput = tree.find('input[name="runtime"]').first();
        await act(async () => {
            runtimeInput.simulate('change', {
                target: {
                    name: 'runtime',
                    value: 132
                }
            });
        });

        expect(runtimeInput.html()).toMatch('132');
    });

    it('Should call submit handler on form submit', async () => {
        const dispatch = jest.fn();

        const mountedStore = {
            ...store,
            dispatch
        };

        const tree = mount(
            <Provider store={ mountedStore }>
                <AddMovieFormik/>
            </Provider>
        );

        const runtimeInput = tree.find('input[name="runtime"]').first();
        await act(async () => {
            runtimeInput.simulate('change', {
                target: {
                    name: 'runtime',
                    value: 111
                }
            });
        });

        const overviewInput = tree.find('input[name="overview"]').first();
        await act(async () => {
            overviewInput.simulate('change', {
                target: {
                    name: 'overview',
                    value: 'Test Overview'
                }
            });
        });

        const dateInput = tree.find('input[name="release_date"]').first();
        await act(async () => {
            dateInput.simulate('change', {
                target: {
                    name: 'release_date',
                    value: '2021-04-01'
                }
            });
        });

        const posterPathInput = tree.find('input[name="poster_path"]').first();
        await act(async () => {
            posterPathInput.simulate('change', {
                target: {
                    name: 'poster_path',
                    value: '//test.img'
                }
            });
        });

        const titleInput = tree.find('input[name="title"]').first();
        await act(async () => {
            titleInput.simulate('change', {
                target: {
                    name: 'title',
                    value: 'Test Title'
                }
            });
        });

        await act(async () => tree.find('form').simulate('submit');

        expect(dispatch).toHaveBeenCalled();
    });

    it('Should reset fields on Reset btn click', async () => {
        const runtimeInput = tree.find('input[name="runtime"]').first();
        await act(async () => {
            runtimeInput.simulate('change', {
                target: {
                    name: 'runtime',
                    value: 111
                }
            });
        });
        expect(runtimeInput.html()).toMatch('111');

        await act(async () => tree.find('.movie-form__reset').first().simulate('click'));

        expect(runtimeInput.getDOMNode().value).toMatch('0');
    });
});
