import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import empresaService from '../../../services/empresa.service';
import ImgEmpresa from '../assets/img/perfil-empresa.png';

const Perfil = () => {

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

    const handleDelete = (id) => {
        console.log('imprimindo id', id);
        empresaService.remove(id)
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
                <div className="col-sm p-4">
                    <div key={empresa.id} id="cor-perfil-empresa" className="container-fluid p-2 d-flex flex-column align-items-center head-perfil">
                        <img src={ImgEmpresa} alt="Foto Perfil Empresa" />
                        <h1 id="nome_empresa">{empresa.nome_empresa}</h1>
                        <p>Perfil da Empresa</p>
                        <div className="buttons d-flex flex-column justify-content-center">
                            <Link className="btn-perfil-editar" to={`/empresas/edit/${empresa.id}`}>Editar empresa</Link>
                            <Link className="btn-perfil-editar" to={`/cadastroVaga`}>Adicionar vaga</Link>
                        </div>   
                        <a href="#deletar">
                            <button className="btn-perfil-deletar" onClick={() => {
                                handleDelete(empresa.id);
                            }}>Deletar</button>
                        </a>
                    </div>
                </div>
            ))
            }
        </>
    );
}

export default Perfil;