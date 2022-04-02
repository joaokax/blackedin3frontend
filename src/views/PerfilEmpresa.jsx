/*
COLOCAR O BACKGROUD NO STYLE.CSS
*/

import React from "react";
import "../assets/css/style.css";
import Empresa from '../assets/img/itau.jpg'

export default function PerfilEmpresa() {
    return (
        <>

    <div className="pag-perfil">
        <div className="card-perfil">
          <div className="container-fluid container-dados-perfil">
            <div className="row">
                <div className="col-sm p-4">
                    <div id="cor-perfil-empresa" className="container-fluid p-2 text-center head-perfil">
                        <img src={Empresa} alt="Logo Itau"/>
                        <h1 id="nome_empresa">Itau</h1>
                        <p>Perfil da Empresa</p> 
                        <a href="#editar">
                            <button className="btn-perfil-editar">Editar perfil</button>
                        </a>

                        <a href="#lista">
                            <button className="btn-perfil-lista">Ver dados em lista</button>
                        </a>

                        <a href="#deletar">
                            <button className="btn-perfil-deletar">Deletar conta</button>
                        </a>
                      </div>
                </div>

              <div className="col-sm p-4">
                <h6>Nome da Empresa </h6>
                <p id="nome_empresa">Itau</p>
          
                <h6>CNPJ </h6>
                <p id="CNPJ">112222345/09765</p>
          
                <h6>Email </h6>
                <p id="email_empresa">empresa@itau.com</p>

                <h6>Senha </h6>
                <p id="senha">**********</p>
          
                <h6>Razão Social </h6>
                <p id="razão_social">Itau S.A</p>
          
          
              </div>
              <div className="col-sm p-4">

                <h6>Porte da Empresa </h6>
                <p id="porte_empresa">Grande</p>
          
                <h6>Área de Atuação </h6>
                <p id="area_atuacao">Tecnologia</p>

                <h6>Modelo de Trabalho </h6>
                <p id="modelo_trabalho">Hibrido</p>
          
                <h6>Descrição </h6>
                <p id="descricao">Itaú Unibanco, também conhecido como Itaú, é o maior banco brasileiro, com sede na cidade de São Paulo, no estado homônimo.</p>
          
              </div>
            </div>
          </div>
         </div>
     </div>
</>
    );
}