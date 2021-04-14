import axios from 'axios';

export const apiUrl =  axios.create({
    baseURL: 'http://localhost:4000/movies'
});

export const getRequestWithParams = (id, options) => {
    if (id) {
        return apiUrl.get(`/${id}`);
    }

    return apiUrl.get('/?' + Object.keys(options)
        .filter(key => Boolean(options[key]))
        .map(key => `${key}=${options[key]}`).join('&'))
};
