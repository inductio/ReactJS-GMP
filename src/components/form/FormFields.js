import React from 'react';
import FormLabel from './FormLabel';
import FormSelect from './FormSelect';
import FormInput from './FormInput';

const FormFields = ({fields}) => {
    return fields.map((field, index) => (
        <React.Fragment key={index}>
            <FormLabel
                key={`label-${index}`}
                index={index}
                label={field.label}
            />
            {field.inputType === 'select' ?
                <FormSelect
                    key={`select-${index}`}
                    index={index}
                    field={field}
                /> :
                <FormInput
                    key={`input-${index}`}
                    index={index}
                    field={field}
                />
            }
        </React.Fragment>
    ))
};

export default FormFields;