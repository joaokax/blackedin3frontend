import React from 'react';
import { useEffect, useState } from 'react';
import profissionalService from '../../../services/profissional.service';
import { Link } from 'react-router-dom';

import ImgProfissional from '../assets/img/img-prof.png';

const Perfil = () => {

    const [profissionais, setProfissionais] = useState([]);


    useEffect(() => {
        profissionalService.getAll()
            .then(response => {
                console.log('mostrando os profissionais', response.data);
                setProfissionais(response.data);
            })
            .catch(error => {
                console.log('erro', error);
            })
    }, [])

    const handleDelete = (id) => {
        console.log('imprimindo id', id);
        profissionalService.remove(id)
            .then(response => {
                alert('Perfil deletado', response.data);
                window.location.reload();
            })
            .catch(error => {
                console.log('Algo deu errado', error);
            })
    }

    return (
        <>
            {profissionais.map(profissional => (
                <div class="col-sm p-4">
                    <div key={profissional.id} id="cor-perfil-profissional" class="container-fluid p-2 text-center head-perfil">
                        <img src={ImgProfissional} alt="Foto Perfil Profissional" />
                        <h1 id="nome">{profissional.nome}</h1>
                        <Link
                            className="btn-perfil-editar"
                            to={`/profissionais/edit/${profissional.id}`}>
                            Editar perfil
                        </Link>
                        <a href="#deletar">
                            <button className="btn-perfil-deletar" onClick={() => {
                                handleDelete(profissional.id);
                            }}
                            >
                                Deletar
                            </button>
                        </a>
                    </div>
                </div>
            ))
            }
        </>
    );
}

export default Perfil;