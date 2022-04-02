import httpClient from '../http-common';

const getAll = () => {
    return httpClient.get('/vagas');
}

const create = (data) => {
    return httpClient.post("/vagas", data);
}

const get = (id) => {
    return httpClient.get(`/vagas/${id}`);
}

const update = (data) => {
    return httpClient.put('/vagas', data);
}

const remove = id => {
    return httpClient.delete(`/vagas/${id}`);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, get, update, remove };