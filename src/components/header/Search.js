import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useHistory } from 'react-router-dom';
import '../../styles/search.scss';

const Search = () => {
    const browserHistory = useHistory();

    return <Formik
        initialValues={{query: ''}}
        onSubmit={(values) => {
            const query = values.query;

            if (query) {
                browserHistory.push(`/search/${query}`)
            }
        }}
    >
        <Form className="search">
            <Field type="text" className="search__input" name="query" placeholder="What do you want to watch?"/>
            <button type="submit" className="search__submit">Search</button>
        </Form>
    </Formik>
};

export default Search;
