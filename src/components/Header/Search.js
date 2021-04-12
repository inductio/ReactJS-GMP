import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';
import '../../styles/search.scss';

const Search = () => {
    const browserHistory = useHistory();

    return <Formik
        initialValues={{searchMovie: ''}}
        onSubmit={(values) => {
            const query = values.searchMovie;
            if (query) {
                browserHistory.push({
                    pathname: `/search/${values.searchMovie}`,
                })
            }
        }}
    >
        <Form className="search">
            <Field type="text" className="search__input" name="searchMovie" placeholder="What do you want to watch?"/>
            <button type="submit" className="search__submit">Search</button>
        </Form>
    </Formik>
};

export default Search;
