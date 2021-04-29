import renderer from 'react-test-renderer';
import HeaderTitle from '../../src/components/header/HeaderTitle';
import React from 'react';

it('renders correctly', () => {
    const tree = renderer
        .create(<HeaderTitle title="Testing Title" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
