//Mudar funcionalidades para as empresas, adicionar diversificação do quadro de profissionais
import React from 'react';

import { BsFillGeoAltFill } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";
import { BsBarChartFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";

import './assets/css/styles.css'
import  {FeatureBox, FeatureBoxRed } from './Components/FeatureBox';

const SecFeatures = () => {
    return (
        <section className="features">
            <div className="container">

                <div className="d-flex justify-content-center">
                    <div className="title w-50 p-3 mt-4 d-flex justify-content-center flex-column">
                        <h2 className="font-weight-bold pb-3">Funcionalidades</h2>
                        <p className="p-color">
                            Trouxemos algumas funcionalidades já conhecidas em redes de relacionamentos,
                            mas que ganharam um novo propósito aqui no BlackedIn.
                        </p>
                    </div>
                </div>

                <h2 className="text-center font-weight-bold pb-5">Profissionais</h2>

                <div className="row">
                    <div className="col">
                        <FeatureBox
                            icon={<BsFillGeoAltFill />}
                            boxTitle="Busca por localidade"
                            desc="Faça buscas personalizadas por empresas na sua região ou ainda aplique para trabalhos remotos."
                        />
                    </div>

                    <div className="col">
                        <FeatureBox
                            icon={<BsFillHeartFill />}
                            boxTitle="Sistema de match"
                            desc="A plataforma traz a inovação do sistema de match entre os profissionais e as empresas. Aproximando os contratantes e contratados"
                        />
                    </div>

                    <div className="col">
                        <FeatureBox
                            icon={<BsBarChartFill />}
                            boxTitle="Aprimore-se"
                            desc="Conheça também nossa gama de cursos profissionalizantes com certificado, melhore tanto suas hard-skills como suas soft-skills."
                        />
                    </div>
                </div>

                <h2 className="text-center font-weight-bold py-5">Empresas</h2>

                <div className="row ">
                    <div className="col">
                        <FeatureBoxRed
                            icon={<BsFillPeopleFill />}
                            boxTitle="Banco de talentos"
                            desc="Realize buscas personalizadas em nosso bancos de talentos que estão esperando para fazer a diferença na sua empresa."
                        />
                    </div>

                    <div className="col">
                        <FeatureBoxRed
                            icon={<BsHeart />}
                            boxTitle="Sistema de match"
                            desc="Ache o profissional ideal pra sua vaga! Experimente nosso sistema de match que coloca sua empresa diretamente em contato com os profissionais da sua escolha."
                        />
                    </div>

                    <div className="col">
                        <FeatureBoxRed
                            icon={<BsTelephoneFill />}
                            boxTitle="Suporte 24/7"
                            desc="Temos suporte 24 horas por dia, 7 dias na semana, contate-nos sempre que precisar de algo."
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default SecFeatures;