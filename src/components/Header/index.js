import React from 'react';
import Logo from './../common/Logo';
import HeaderTitle from './HeaderTitle';
import AddMovieBtn from './AddMovieBtn';
import Search from './Search';
import '../../styles/header.scss'

const Header = () => {
    return (
        <header className="header">
            <Logo/>
            <HeaderTitle/>
            <AddMovieBtn/>
            <Search/>
        </header>
    )
};

export default Header;
