import React from 'react';
import renderer from "react-test-renderer";
import Modal from '../../src/components/Modal';

it('renders correctly', () => {
    const tree = renderer
        .create(<Modal modalType="ADD_MOVIE_TYPE"/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
