import { formInputsConfig } from '../form/formInputsConfig';

const serializeFormData = (target) => {
    const data = {};

    formInputsConfig.map((config) => {
        return  data[config.serverName] = target.querySelector(`#${config.id}`).value;

    });

    return data;
};


export default serializeFormData;
