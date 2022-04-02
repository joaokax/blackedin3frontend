import React from 'react';

import Phone from './assets/img/phone.png'

import './assets/css/styles.css'

const SecHighlight = () => {
    return (
        <section class="highlight-phone pt-5">
            <div class="container d-flex justify-content-lg-between align-items-center">

                <div className="highlight-text text-justify col-6">
                    <h2>Encontre as melhores vagas pro seu perfil no BlackdIn!</h2>
                    <ul className="list">
                        <li>Inovação no sistema de busca</li>
                        <li>Qualificação especializada para os profissionais</li>
                        <li>Garantia de contratação segura para contratantes e contratados.</li>
                    </ul>
                    <button className="btn btn-saibamais">SAIBA MAIS!</button>
                </div>

                <div className="phone-img">
                    <img src={Phone} alt="Celular" className="phone"/>
                </div>
            </div>
        </section>
    );
}

export default SecHighlight;