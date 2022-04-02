import React from "react";
import "./assets/css/styles.css";

const FiltroEmpresa = () => {
  return (

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


);
};

export default FiltroEmpresa;