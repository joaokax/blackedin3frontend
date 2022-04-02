import React from 'react';
import Perfil from './components/Perfil';
import PerfilData from './components/PerfilData';
import './assets/css/styles.css'

const PerfilProfissional = () => {
    return ( 
        <div>
            <div className="pag-perfil">
                 <div className="card-perfil">
                    <div className="container-fluid container-dados-perfil">
                    <div className=" flex-column">
                        <Perfil />
                        <PerfilData />
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PerfilProfissional;

