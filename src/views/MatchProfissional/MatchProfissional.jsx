import React from "react";
import "./assets/css/styles.css";

const MatchProfissional = () => {
  return (

<main className="pag-match">
    <div className="row">
        <div className="container-card col">
            <div id="match-foto" className="justify-content-center empresa-img"></div>
            
            <div id="buttons" className="d-flex justify-content-center mb-3">
                <a href="/"><div id="x" className="all-btn"><i className="bi bi-x-circle"></i>&nbsp; Desconsiderar</div></a>
                <a href="/"><div id="heart" className="all-btn"><i className="bi bi-heart-fill"></i>&nbsp; Gostei</div></a>
                <a href="/"><div id="star" className="all-btn"><i className="bi bi-star"></i>&nbsp; Favoritar</div></a>
            </div>

            <div className="container-descricao">
                <h1 id="match-nome">Itaú</h1>
                <h5>Busca-se: <span id="match-qualificacao"> Desenvolvedor full-stack jr </span> </h5>
                <h6>Sobre a vaga </h6>
                <p id="match-texto">
                    Desenvolver códigos elegantes, estáveis, confiáveis e, não menos importante, fáceis de manter. Queremos código limpo e que funcione bem, Desenvolver códigos e soluções sempre pensando em eficiência, escalabilidade e estabilidade.
                </p>
            </div>
        </div>

        <div className="col-md-auto">
        <aside id="match-aside" className="ml-4 mt-4 p-4">
        <h1>Filtros</h1>

        <label className="d-block label-form">Cargo desejado</label>
        <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
            <option selected>Selecione</option>
            <option value="1">Tecnologia</option>
            <option value="2">Letras/Idioma</option>
            <option value="3">Humanas</option>
            <option value="4">Exatas</option>
            <option value="5">Biologia</option>
            <option value="6">Engenharia</option>
        </select>

        <label className="d-block label-form" >Modelo de trabalho</label>
        <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
            <option selected>Selecione</option>
            <option value="1">Presencial</option>
            <option value="2">Remoto</option>
            <option value="3">Hibrido</option>
        </select>

        <label className="d-block label-form" >Distância</label>
        <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
            <option selected>Selecione</option>
            <option value="1">Até 2 km</option>
            <option value="2">Até 5 km</option>
            <option value="3">Até 10 km</option>
            <option value="4">Qualquer distância</option>
        </select>

        <label className="d-block label-form" >Nivel do profissional</label>
        <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
            <option selected>Selecione</option>
            <option value="1">Junior</option>
            <option value="2">Pleno</option>
            <option value="3">Sênior</option>
        </select>
        
        <label className="d-block label-form" >Aceita PCD</label>
        <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
            <option selected>Selecione</option>
            <option value="1">Sim</option>
            <option value="2">Não</option>
        </select>

        <label className="d-block label-form" >Tipo de Tipo de contrato</label>
        <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
            <option selected>Selecione</option>
            <option value="1">CLT</option>
            <option value="2">PJ</option>
            <option value="3">Freelancer</option>
        </select>
    </aside>
    </div>
</div>
</main>

    );
};

export default MatchProfissional;