import React from 'react';
import Logo from './../common/Logo';
import HeaderTitle from './HeaderTitle';
import AddMovie from './AddMovie';
import Search from './Search';
import MovieDetails from '../movie/MovieDetails';
import '../../styles/header.scss'

const Header = (props) => {
    return (
        <header className="header">
            <Logo/>
            {props.selectedMovie ?
                <MovieDetails {...props}/> :
                <>
                    <HeaderTitle title={'Find your movie'}/>
                    <AddMovie/>
                    <Search/>
                </>
            }
        </header>
    )
};

export default Header;
