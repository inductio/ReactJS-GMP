import React from 'react';
import AddMovieFormik from '../../src/components/movie/AddMovieFormik';
import store from '../../src/store';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
Enzyme.configure({ adapter: new Adapter() });

describe('Add Movie Form', () => {
    it('Should update title field', async () => {
        const tree = mount(
            <Provider store={ store }>
                <AddMovieFormik/>
            </Provider>
        );
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
});
