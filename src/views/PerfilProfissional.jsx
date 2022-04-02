/*
FALTA COLOCAR O BACKGROUD NO STYLE.CSS
*/

import React from "react";
import "../assets/css/style.css";
import Profissional from '../assets/img/Pessoa desenvolvedora.jpg';

export default function PerfilEmpresa() {
    return (
        <>

    <div className="pag-perfil">
        <div className="card-perfil">
          <div className="container-fluid container-dados-perfil">
            <div className="row">
                <div class="col-sm p-4">
                    <div id="cor-perfil-profissional" className="container-fluid p-2 text-center head-perfil">
                        <img src={Profissional} alt="Foto Profissional"/>
                        <h1 id="nome">Nathália Sobrenome</h1>
                        <p>Perfil do Profissional</p> 
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
                <h6>Nome </h6>
                <p id="nome">Nathália Sobrenome</p>
          
                <h6>Email </h6>
                <p id="email">nathalia_teste@email.com</p>
          
                <h6>Senha </h6>
                <p id="senha">**********</p>
          
                <h6>Data de Nascimento </h6>
                <p id="data_nascimento">31/02/1996</p>
          
                <h6>Endereço </h6>
                <p id="endereco">Rua Tal, 33</p>
          
                <h6>Escolaridade </h6>
                <p id="escolaridade">Ensino médio completo</p>
          
              </div>
              <div className="col-sm p-4">
                <h6>Telefone </h6>
                <p id="telefone">21988887777</p>
          
                <h6>Experiência </h6>
                <p id="experiencia">Não possui</p>
          
                <h6>Competências </h6>
                <p id="competencias">Java, Visual Studio Code, C#, Front-end (HTML e CSS)</p>
          
                <h6>Área de interesse </h6>
                <p id="area_interesse">Tecnologia</p>
          
                <h6>Sobre mim </h6>
                <p id="descricao">Sou Formada como técnica em sistemas da informação, atualmente graduanda em Engenharia de software, tenho conhecimento em ReactJS, NodeJs, postgreeSQL e Git.</p>
                
            </div>
           </div>
          </div>
        </div>
       </div>
</>
    );
}