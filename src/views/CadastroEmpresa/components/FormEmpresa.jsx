import React from 'react';
import empresaService from '../../../services/empresa.service';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FormEmpresa = () => {

    const [area_atuacao, setArea_atuacao] = useState('');
    const [email, setEmail] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [descricao, setDescricao] = useState('');
    const [modelo_trabalho, setModelo_trabalho] = useState('');
    const [nome_empresa, setNome_empresa] = useState('');
    const [porte, setPorte] = useState('');
    const [razao_social, setRazao_social] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const saveEmpresa = (c) => {
        c.preventDefault();

        const empresa = { area_atuacao, email, cnpj, descricao, modelo_trabalho, nome_empresa, porte, razao_social, senha, id };
        if (id) {
            //update
            empresaService.update(empresa)
                .then(response => {
                    alert('Empresa editada', response.data);
                    navigate('/perfilEmpresa');
                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                });
        }
        else {
            //create
            empresaService.create(empresa)
                .then(response => {
                    alert('Empresa adicionada', response.data);
                    navigate('/perfilEmpresa');
                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                });
        }
    }

    useEffect(() => {
        if (id) {
            empresaService.get(id)
                .then(empresa => {
                    setArea_atuacao(empresa.data.area_atuacao);
                    setEmail(empresa.data.email);
                    setCnpj(empresa.data.cnpj);
                    setDescricao(empresa.data.descricao);
                    setModelo_trabalho(empresa.data.modelo_trabalho);
                    setNome_empresa(empresa.data.nome_empresa);
                    setPorte(empresa.data.porte);
                    setRazao_social(empresa.data.razao_social);
                    setSenha(empresa.data.senha);
                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                })
        }
    }, [])


    return (
        <main id="bg-cad-empresa">
            <div id="container-cadastro" className="container d-flex justify-content-center align-items-center p-4">
                <div id="form-container" className="row">
                    <div id="cad-img-empresa" className="col-md-6"></div>
                    <div id="border-cadastro" className="col d-flex flex-column justify-content-center">
                        <form>
                            <h2>Cadastro empresa</h2>

                            <label>Nome da Empresa</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nome"
                                value={nome_empresa}
                                onChange={(c) => setNome_empresa(c.target.value)}
                                required
                            />

                            <label>CNPJ (somente números)</label>
                            <input
                                type="text"
                                className="form-control"
                                id="cnpj"
                                value={cnpj}
                                onChange={(c) => setCnpj(c.target.value)}
                                required
                            />

                            <label>E-mail da Empresa</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(c) => setEmail(c.target.value)}
                                required
                            />

                            <label>Razão Social</label>
                            <input
                                type="text"
                                className="form-control"
                                id="razaoSocial"
                                value={razao_social}
                                onChange={(c) => setRazao_social(c.target.value)}
                                required
                            />

                            <label>Porte da Empresa</label>
                            <select
                                id="porte"
                                className="form-select form-select-md mb-3"
                                aria-label=".form-select-lg example"
                                required
                                value={porte}
                                onChange={(c) => setPorte(c.target.value)}
                            >
                                <option selected>Selecione</option>
                                <option value="Micro/Pequena">Micro / Pequena</option>
                                <option value="Media">Média</option>
                                <option value="Grande">Grande</option>
                            </select>

                            <label>Área de atuação</label>
                            <select
                                id="areaAtuacao"
                                className="form-select form-select-md mb-3"
                                aria-label=".form-select-lg example"
                                value={area_atuacao}
                                onChange={(c) => setArea_atuacao(c.target.value)}
                                required
                            >
                                <option selected>Selecione</option>
                                <option value="Tecnologia">Tecnologia</option>
                                <option value="Letras/Idioma">Letras/Idioma</option>
                                <option value="Humanas">Humanas</option>
                                <option value="Exatas">Exatas</option>
                                <option value="Biologia">Biologia</option>
                                <option value="Engenharia">Engenharia</option>
                            </select>

                            <label>Qual modelo de trabalho oferece?</label>
                            <select
                                id="modeloTrabalho"
                                className="form-select form-select-md mb-3"
                                aria-label=".form-select-lg example"
                                value={modelo_trabalho}
                                onChange={(c) => setModelo_trabalho(c.target.value)}
                                required
                            >
                                <option selected>Selecione</option>
                                <option value="Presencial">Presencial</option>
                                <option value="Remoto">Remoto</option>
                                <option value="Hibrido">Hibrido</option>
                            </select>

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

                            <label>Descrição</label>
                            <textarea
                                id="descricao"
                                className="form-control"
                                placeholder="Escreva aqui uma breve descrição sobre a empresa"
                                value={descricao}
                                onChange={(c) => setDescricao(c.target.value)}
                                required
                            >
                            </textarea>
                            
                            <div id="btn-form" class="d-flex">
                            <button id="btn-cadastrar" className="btn-save px-4 py-2" onClick={(c) => saveEmpresa(c)}>Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default FormEmpresa;