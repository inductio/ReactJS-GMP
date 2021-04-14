import React from 'react';
import Logo from './../common/Logo';
import HeaderTitle from './HeaderTitle';
import AddMovie from './AddMovie';
import Search from './Search';
import '../../styles/header.scss'

const SearchHeader = () => {
    return (
        <header className="header">
            <Logo/>
            <HeaderTitle title={'Find your movie'}/>
            <AddMovie/>
            <Search/>
        </header>
    )
};

export default SearchHeader;
