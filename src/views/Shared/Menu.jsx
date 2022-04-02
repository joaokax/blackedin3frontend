import React from "react";
import { Link } from "react-router-dom";
import "./assets/css/menustyles.css";

import BlackedinLogo from "./assets/img/BlackedinLogo.svg";

const Menu = () => {
  return (
    <>
      <nav class="navbar navbar-dark navbar-expand-md navigation-clean-search">
        <div class="container">
          <Link to="/">
            <a class="navbar-brand" href="/">
              <img src={BlackedinLogo} alt="Logo BlackedIn" />
            </a>
          </Link>

          <div class="collapse navbar-collapse" id="navcol-2">
            
          </div>

          <Link to="/cadastroProfissional">
            <a class="btn btn-menu" role="button" href="/">
              Profissional
            </a>
          </Link>

          <Link to="/cadastroEmpresa">
            <a class="btn btn-menu" role="button" href="/">
              Empresa
            </a>
          </Link>

          <Link to="/login">
            <a class="btn action-button" role="button" href="/">
              Login
            </a>
          </Link>
          
        </div>
      </nav>
    </>
  );
};
export default Menu;
