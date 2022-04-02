import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('/profissionais');
}

const create = (data) => {
    return httpClient.post("/profissionais", data);
}

const get = (id) => {
    return httpClient.get(`/profissionais/${id}`);
}

const update = (data) => {
    return httpClient.put('/profissionais', data);
}

const remove = id => {
    return httpClient.delete(`/profissionais/${id}`);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, get, update, remove };