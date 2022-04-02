import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('/curriculos');
}

const create = (data) => {
    return httpClient.post("/curriculos", data);
}

const get = (id) => {
    return httpClient.get(`/curriculos/${id}`);
}

const update = (data) => {
    return httpClient.put('/curriculos', data);
}

const remove = id => {
    return httpClient.delete(`/curriculos/${id}`);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, get, update, remove };