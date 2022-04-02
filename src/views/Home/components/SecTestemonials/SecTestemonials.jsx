import React from 'react';
import TestBox from './components/TestBox';

import photo1 from './assets/img/1.jpg'
import photo2 from './assets/img/2.jpg'
import photo3 from './assets/img/3.jpg'

const SecTestemonials = (props) => {
    return (
        <section className="testemonials ">
            <div className="container d-flex flex-column align-items-center">
                <div className="title col-lg-6 py-3">
                    <h2 className="font-weight-bold py-3">O que nossos usuarios dizem?</h2>
                    <p className="p-3 p-color">
                        Quem utiliza nossos serviços aprendeu a amar! Não perca essa chance única de mudar o seu rumo profissional,
                        ou o quadro de funcionários da sua empresa.
                    </p>
                </div>

                <div className="test-exemple row">
                    <TestBox
                        text="Ótimo site de busca de emprego, informações objetivas e plataforma de fácil acesso, fiz o cadastro e em 7 dias consegui minha primeira oportunidade."
                        photo={photo1}
                        name="Carla de Oliveira"
                        profession="Desenvolvedora full-stack na xyz.inc"
                    />

                    <TestBox
                        text="Excelente plataforma com dicas importantes sobre como destacar o currículo no mercado de trabalho. Envio de vagas de acordo com o perfil selecionado, além de diversas oportunidades disponíveis diariamente."
                        photo={photo2}
                        name="Marcus dos Santos"
                        profession="Designer na Xdesign.inc"
                    />

                    <TestBox
                        text="Certamente será minha recomendação a todos que buscam uma boa colocação no mercado de trabalho. Estou satisfeito com a transparência e com o empenho quanto a minha recolocação profissional."
                        photo={photo3}
                        name="Carlos Santana"
                        profession="Recrutador na milestone.inc"
                    />                
                </div>
            </div>
        </section>
    );
}

export default SecTestemonials;