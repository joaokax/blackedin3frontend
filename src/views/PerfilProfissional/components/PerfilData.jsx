import React from 'react';
import { useEffect, useState } from 'react';

import profissionalService from '../../../services/profissional.service';

const PerfilData = () => {

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


  return (
    <>
      {profissionais.map(profissional => (
        <div className="d-flex flex-wrap">
          <div class="col-sm p-4 perfil-data" key={profissional.id}>
            <h6>Nome</h6>
            <p id="nome">{profissional.nome}</p>

            <h6>Email</h6>
            <p id="email">{profissional.email}</p>

            <h6>Data de Nascimento </h6>
            <p id="data_nascimento">{profissional.data_nascimento}</p>
          </div>
        </div>
      ))
      }
    </>
  );
}

export default PerfilData;

