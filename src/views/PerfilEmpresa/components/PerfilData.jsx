import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import empresaService from '../../../services/empresa.service';
import vagaService from '../../../services/vaga.service';



const PerfilData = () => {

    //Recebe as empresas
    const [empresas, setEmpresas] = useState([]);

    useEffect(() => {
        empresaService.getAll()
            .then(response => {
                console.log('mostrando as empresas', response.data);
                setEmpresas(response.data);
            })
            .catch(error => {
                console.log('erro', error);
            })
    }, [])

    //Recebe as vagas
    const [vagas, setVagas] = useState([]);

    useEffect(() => {
        vagaService.getAll()
            .then(response => {
                console.log('mostrando as vagas', response.data);
                setVagas(response.data);
            })
            .catch(error => {
                console.log('erro', error);
            })
    }, [])

    //deleta vagas
    const handleDelete = (id) => {
        console.log('imprimindo id', id);
        vagaService.remove(id)
            .then(response => {
                alert('Empresa deletado', response.data);
                window.location.reload();
            })
            .catch(error => {
                console.log('Algo deu errado', error);
            })
    }

    return (
        <>
            {empresas.map(empresa => (
                <div className="d-flex flex-wrap">
                    <div className="col-sm p-4 perfil-data" key={empresa.id}>
                        <h6>Nome da Empresa</h6>
                        <p id="nome_empresa">{empresa.nome_empresa}</p>

                        <h6>CNPJ</h6>
                        <p id="CNPJ">{empresa.cnpj}</p>

                        <h6>Email</h6>
                        <p id="email_empresa">{empresa.email}</p>

                        <h6>Razão Social</h6>
                        <p id="razão_social">{empresa.razao_social}</p>

                        <h6>Porte da Empresa</h6>
                        <p id="porte_empresa">{empresa.porte}</p>

                        <h6>Área de Atuação</h6>
                        <p id="area_atuacao">{empresa.area_atuacao}</p>

                        <h6>Modelo de Trabalho</h6>
                        <p id="modelo_trabalho">{empresa.razao_social}</p>


                    </div>
                    <div className="col-sm p-4 perfil-data">
                        <h6>Descrição</h6>
                        <p id="descricao">{empresa.descricao}</p>
                    </div>
                </div>

            ))

            }
            {vagas.map(vaga => (
                <div className="d-flex flex-wrap">
                    <div className="col-sm p-4 perfil-data" key={vaga.id}>
                        <h6>Titulo da vaga</h6>
                        <p id="nome_empresa">{vaga.titulo_vaga}</p>
                        <h6>Descrição</h6>
                        <p id="nome_empresa">{vaga.descricao_vaga}</p>
                        <h6>Salário</h6>
                        <p id="nome_empresa">{`R$${vaga.salario}.00`}</p>
                        <h6>Contrato</h6>
                        <p id="nome_empresa">{vaga.contrato}</p>
                    </div>
                    <div className="vagas-btn">
                        <Link className="btn-perfil-editar" to={`/vagas/edit/${vagas.id}`}>Editar empresa</Link>
                        <button className="btn-vaga-deletar mt-4" onClick={() => {
                            handleDelete(vaga.id);
                        }}>Deletar</button>

                    </div>
                </div>
            ))}
        </>
    );
}

export default PerfilData;


