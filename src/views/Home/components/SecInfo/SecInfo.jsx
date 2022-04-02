import React from 'react';

import ImageArticle1 from './assets/img/article-img-1.jpg'
import ImageArticle2 from './assets/img/article-img-2.jpg'

import './assets/css/styles.css'
const SecInfo = () => {
    return (
        <section className="features-boxed">
            <section className="article-clean">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
                            <div className="intro">
                                <h1 className="text-center">Qual a nossa dor?</h1>
                            </div>
                            <div className="text">
                                <p>
                                    Por mais que as leis garantam a igualdade entre os povos, o racismo é um processo histórico que modela a sociedade até hoje.
                                    Uma prova disso é o contraste explícito entre o perfil da população brasileira e sua representatividade nos cargos mais
                                    rentáveis e de maiores reconhecimento.
                                </p>
                                <img className="img-fluid article-img" src={ImageArticle1} alt="Gráficos mostrando dados sobre a distribuição de profissionais negros e brancos nas empresas" />
                                <h2>Pensando nisso...</h2>
                                <p>
                                    A BlackdIn criou uma plataforma que visa impulsionar pessoas negras nas mais diversas áreas do mercado de trabalho.
                                    Colocando-as em contato com grandes empresas e startup que estejam procurando profissionais, além de oferecer qualificações
                                    e suporte para as suas jornadas.
                                </p>
                                {/*Tentar remover o figure */}
                                <figure className="figure d-block"><img className="figure-img" src={ImageArticle2} alt="Mulheres negras trabalahando na liderança de uma empresa" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default SecInfo;