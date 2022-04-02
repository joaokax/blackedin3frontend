import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('/empresas');
}

const create = (data) => {
    return httpClient.post("/empresas", data);
}

const get = (id) => {
    return httpClient.get(`/empresas/${id}`);
}

const update = (data) => {
    return httpClient.put('/empresas', data);
}

const remove = id => {
    return httpClient.delete(`/empresas/${id}`);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, get, update, remove };