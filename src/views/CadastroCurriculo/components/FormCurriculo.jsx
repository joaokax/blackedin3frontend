import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import curriculoService from '../../../services/curriculo.service';

const FormCurriculo = () => {
    const [cep, setCep] = useState('');
    const [telefone, setTelefone] = useState('');
    const [escolaridade, setEscolaridade] = useState('');
    const [area_interesse, setArea_interesse] = useState('');
    const [experiencia, setExperiencia] = useState('');
    const [competencias, setCompetencias] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const saveCurriculo = (c) => {
        c.preventDefault();

        const curriculo = { cep, telefone, escolaridade, area_interesse, experiencia, competencias, id };
        if (id) {
            //update
            curriculoService.update(curriculo)
                .then(response => {
                    alert('Curriculo editado', response.data);
                    navigate('/Curriculo');
                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                });
        }
        else {
            //create
            curriculoService.create(curriculo)
                .then(response => {
                    //trocar por alert
                    alert('Curriculo adicionado', response.data);
                    navigate('/Curriculo');
                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                });
        }
    }

    useEffect(() => {
        if (id) {
            curriculoService.get(id)
                .then(curriculo => {
                    setCep(curriculo.data.cep);
                    setTelefone(curriculo.data.telefone);
                    setEscolaridade(curriculo.data.escolaridade);
                    setArea_interesse(curriculo.data.area_interesse);
                    setExperiencia(curriculo.data.experiencia);
                    setCompetencias(curriculo.data.competencias);
                })
                .catch(error => {
                    console.log('Algo deu errado', error);
                })
        }
    }, [])

    return (
        <main id="bg-cad-curriculo">
            <div id="container-cadastro" className="container d-flex justify-content-center align-items-center p-4">
                <div id="form-container" className="row">
                    <div id="cad-img-curriculo" className="col-md-6"></div>
                    <div id="border-cadastro" className="col d-flex flex-column justify-content-justify">
                        <form>
                            <h2>Cadastro Currículo</h2>

                            <label>Endereço</label>
                            <input
                                type="text"
                                className="form-control"
                                id="cep"
                                value={cep}
                                onChange={(c) => setCep(c.target.value)}
                                required
                            />

                            <label>Telefone com DDD</label>
                            <input
                                type="number"
                                className="form-control"
                                id="telefone"
                                minlength="11"
                                value={telefone}
                                onChange={(c) => setTelefone(c.target.value)}
                                required
                            />

                            <label>Escolaridade</label>
                            <input
                                type="text"
                                className="form-control"
                                id="escolaridade"
                                value={escolaridade}
                                onChange={(c) => setEscolaridade(c.target.value)}
                                required
                            />

                            <label>Área de interesse</label>
                            <input
                                type="text"
                                className="form-control"
                                id="area_interesse"
                                value={area_interesse}
                                onChange={(c) => setArea_interesse(c.target.value)}
                                required
                            />

                            <label>Experiência</label>
                            <input
                                type="text"
                                className="form-control"
                                id="experiencia"
                                value={experiencia}
                                onChange={(c) => setExperiencia(c.target.value)}
                                required
                            />

                            <label>Competências</label>
                            <input
                                type="text"
                                className="form-control"
                                id="competencias"
                                value={competencias}
                                onChange={(c) => setCompetencias(c.target.value)}
                                required
                            />

                            <div id="btn-form" class="d-flex">
                            <button id="btn-cadastrar" className="btn-save px-4 py-2" onClick={(c) => saveCurriculo(c)}>Salvar</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default FormCurriculo;