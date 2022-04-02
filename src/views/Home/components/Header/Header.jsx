import React from 'react';

import HeaderImg from './assets/img/header-img.svg'

const Header = () => {
    return ( 
        <header class="header-blue">
            <div class="container hero">
                <div class="row">
                    <div class="col-12 col-lg-6 col-xl-5 offset-xl-1">
                        <h1 id="h">Inserindo negros no mercado</h1>
                        <p>Ajudando pessoas negras a se qualificarem e se sentirem prontas para enfrentar todos os desafios do mercado de trabalho.</p><button class="btn btn-light btn-lg action-button" type="button">Veja mais</button>
                    </div>
                    <div class="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                        <img src={HeaderImg} alt="Svg de dois garotos negros trabalhando sendo que um é PCD"/>
                            <div class="phone-mockup">
                                <div class="screen"></div>
                            </div>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;