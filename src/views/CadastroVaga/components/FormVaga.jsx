import React from 'react';
import vagaService from '../../../services/vaga.service';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FormVaga = () => {

    const [titulo_vaga, setTitulo_vaga] = useState('');
    const [descricao_vaga, setDescricao_vaga] = useState('');
    const [salario, setSalario] = useState('');
    const [contrato, setContrato] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const saveVaga = (c) => {
        c.preventDefault();

        const vaga = { titulo_vaga, descricao_vaga, salario, contrato, id };
        if (id) {
            //update
            vagaService.update(vaga)
                .then(response => {
                    alert('Vaga editada', response.data);
                    navigate('/PerfilEmpresa');
                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                });
        }
        else {
            //create
            vagaService.create(vaga)
                .then(response => {
                    alert('Vaga adicionada', response.data);
                    navigate('/PerfilEmpresa');
                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                });
        }
    }

    useEffect(() => {
        if (id) {
            vagaService.get(id)
                .then(vaga => {
                    setTitulo_vaga(vaga.data.titulo_vaga);
                    setDescricao_vaga(vaga.data.descricao_vaga);
                    setSalario(vaga.data.salario);
                    setContrato(vaga.data.contrato);                   
                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                })
        }
    }, [])


    return (
        <main id="bg-cad-vaga">
            <div id="container-cadastro" className="container d-flex justify-content-center align-items-center p-4">
                <div id="form-container" className="row">
                    <div id="cad-img-vaga" className="col-md-6"></div>
                    <div id="border-cadastro" className="col d-flex flex-column justify-content-center">
                        <form>
                            <h2>Cadastro Vaga</h2>

                            <label>Título da Vaga</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nome"
                                value={titulo_vaga}
                                onChange={(c) => setTitulo_vaga(c.target.value)}
                                required
                            />

                            <label>Descrição</label>
                            <input
                                type="text"
                                className="form-control"
                                id="cnpj"
                                value={descricao_vaga}
                                onChange={(c) => setDescricao_vaga(c.target.value)}
                                required
                            />

                            <label>Salário</label>
                            <input
                                type="number"
                                className="form-control"
                                id="email"
                                value={salario}
                                onChange={(c) => setSalario(c.target.value)}
                                required
                            />

                            <label>Contrato</label>
                            <input
                                type="text"
                                className="form-control"
                                id="razaoSocial"
                                value={contrato}
                                onChange={(c) => setContrato(c.target.value)}
                                required
                            />
                           
                            <div id="btn-form" class="d-flex">
                            <button id="btn-cadastrar" className="btn-save px-4 py-2" onClick={(c) => saveVaga(c)}>Salvar</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default FormVaga;