import React from 'react';
import Form from '../form/Form';

const DeleteMovieForm = () => {
    const deleteFormConfig = {
        formTitle: 'Delete Movie',
        buttons: [
            {
                type: 'submit',
                title: 'Confirm'
            }
        ],
        action: 'delete',
        descriptions: [
            {text: 'Are you sure you want to delete this movie?', className: ''}
        ]
    };

    return <Form config={deleteFormConfig}/>
};

export default DeleteMovieForm;
