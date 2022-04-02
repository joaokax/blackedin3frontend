import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import profissionalService from '../../../services/profissional.service';

import '../assets/css/styles.css';

const FormProfissional = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [data_nascimento, setData_nascimento] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const saveProfissional = (c) => {
        c.preventDefault();

        const profissional = { nome, email, senha, data_nascimento, id };
        if (id) {
            //update
            profissionalService.update(profissional)
                .then(response => {
                    alert('Profissional editado', response.data);
                    navigate('/perfilProfissional');
                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                });
        }
        else {
            //create
            profissionalService.create(profissional)
                .then(response => {
                    //trocar por alert
                    alert('Profissional adicionado', response.data);
                    navigate('/perfilProfissional');
                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                });
        }
    }

    useEffect(() => {
        if (id) {
            profissionalService.get(id)
                .then(profissional => {
                    setNome(profissional.data.nome);
                    setEmail(profissional.data.email);
                    setSenha(profissional.data.senha);
                    setData_nascimento(profissional.data.data_nascimento);
                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                })
        }
    }, [])

    return (
        <main id="bg-cad-profissional">
            <div id="container-cadastro" className="container d-flex justify-content-center align-items-center p-4">
                <div id="form-container" className="row">
                    <div id="cad-img-profissional" className="col-md-6"></div>
                    <div id="border-cadastro" className="col d-flex flex-column justify-content-justify">
                        <form>
                            <h2>Cadastro profissional</h2>

                            <label>Nome</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nome"
                                value={nome}
                                onChange={(c) => setNome(c.target.value)}
                                required
                            />

                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(c) => setEmail(c.target.value)}
                                required
                            />

                            <label>Senha (min. 8 caracteres)</label>
                            <input
                                type="password"
                                className="form-control"
                                id="senha"
                                minlength="8"
                                autocomplete="current-password"
                                value={senha}
                                onChange={(c) => setSenha(c.target.value)}
                                required
                            />

                            <label>Data de nascimento</label>
                            <input
                                type="date"
                                className="form-control"
                                id="dataNascimento"
                                value={data_nascimento}
                                onChange={(c) => setData_nascimento(c.target.value)}
                                required
                            />

                            <div id="btn-form" class="d-flex">
                            <button id="btn-cadastrar" className="btn-save px-4 py-2" onClick={(c) => saveProfissional(c)}>Salvar</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default FormProfissional;