import React from 'react';
import Logo from './../common/Logo';
import HeaderTitle from './HeaderTitle';
import AddMovie from './AddMovie';
import Search from './Search';
import '../../styles/header.scss'

const Header = () => {
    return (
        <header className="header">
            <Logo/>
            <HeaderTitle/>
            <AddMovie/>
            <Search/>
        </header>
    )
};

export default Header;
