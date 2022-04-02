import React from "react";
import "../assets/css/style.css";
import Logo from '../assets/img/BlackedinLogo.svg';

export default function Login() {
    return (
        <>

<div className="bg-login">

<div className="container-login">
    <img src={Logo} alt="Blackedin logo"/>
    <h2>Acesse sua conta</h2>
    <form>
        <div className="mb-3 mt-3">
          <label for="email">Email:</label>
          <input type="email" className="form-control" id="email" name="email" />
        </div>
        <div className="mb-3">
          <label for="senha">Senha:</label>
          <input type="password" className="form-control" id="senha" name="senha" required autocomplete="" />
        </div>
        <div className="btn-login-container">
        <button type="submit" className="btn-acessar">Acessar</button>
        </div>
        {/*<h6>Não possui cadastro? &nbsp;<a href="/" style="color: #fff;"><u>Cadastre-se</u></a></h6>*/}
      </form>

    </div>

    </div>

        </>
    );
}

