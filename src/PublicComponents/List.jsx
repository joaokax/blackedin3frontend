import React, { Component } from 'react';
import EmpresaService from '../services/EmpresaService';


class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            empresas: []
        }
    }

    componentDidMount(){
        EmpresaService.getEmpresas().then((res) => {
            this.setState({empresas: res.data})
        });
    }

    render() {

        return (
            <div className='container'>

                <h2 className='text-center'>Lista de empresas</h2>

                <table className="table table-dark table-striped">

                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nome da empresa</th>
                            <th scope="col">CNPJ</th>
                            <th scope="col">Email</th>
                            <th scope="col">Senha</th>
                            <th scope="col">Razão social</th>
                            <th scope="col">Porte</th>
                            <th scope="col">Area de atuação</th>
                            <th scope="col">Modelo de trabalho</th>
                            <th scope="col">Descrição</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.empresas.map(
                                empresa =>
                                <tr key = {empresa.id}>
                                    <td>{ empresa.id }</td>
                                    <td>{ empresa.nome_empresa }</td>
                                    <td>{ empresa.cnpj }</td>
                                    <td>{ empresa.email }</td>
                                    <td>{ empresa.senha }</td>
                                    <td>{ empresa.razao_social }</td>
                                    <td>{ empresa.porte }</td>
                                    <td>{ empresa.area_atuacao }</td>
                                    <td>{ empresa.modelo_trabalho }</td>
                                    <td>{ empresa.descricao }</td>                                
                                </tr>
                            )
                        }

                    </tbody>
                </table>
                {
                    this.state.empresas.map(
                        empresa =>
                        <h1>{empresa.nome_empresa}</h1>
                    )
                }
                
            </div>
        );
    }
}

export default List;