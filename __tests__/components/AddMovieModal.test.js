import React from 'react';
import renderer from 'react-test-renderer';
import Modal from '../../src/components/Modal';
import store from '../../src/store';
import { Provider } from "react-redux";

it('renders correctly Add Movie Modal', () => {
    const tree = renderer
        .create(<Provider store={store}><Modal modalType="ADD_MOVIE_TYPE"/></Provider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
