//import List from './Components/List';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CadastroEmpresa from './views/CadastroEmpresa/CadastroEmpresa';
import CadastroVaga from './views/CadastroVaga/CadastroVaga';
import CadastroProfissional from './views/CadastroProfissional/CadastroProfissional';
import CadastroCurriculo from './views/CadastroCurriculo/CadastroCurriculo';
import HomePage from './views/Home/HomePage';
import Login from './views/Login/Login';
import MatchEmpresa from './views/MatchEmpresa/MatchEmpresa';
import MatchProfissional from './views/MatchProfissional/MatchProfissional';
import PerfilEmpresa from './views/PerfilEmpresa/PerfilEmpresa';
import PerfilProfissional from './views/PerfilProfissional/PerfilProfissional';
import Menu from './views/Shared/Menu';
import Footer from './views/Shared/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastroProfissional" element={<CadastroProfissional />} />
          <Route path="/cadastroCurriculo" element={<CadastroCurriculo />} />
          <Route path="/cadastroEmpresa" element={<CadastroEmpresa />} />
          <Route path="/cadastroVaga" element={<CadastroVaga />} />
          <Route path="/perfilProfissional" element={<PerfilProfissional />} />
          <Route path="/perfilEmpresa" element={<PerfilEmpresa />} />
          <Route path="/matchProfissional" element={<MatchProfissional />} />
          <Route path="/matchEmpresa" element={<MatchEmpresa />} />
          <Route path="/empresas/edit/:id" element={<CadastroEmpresa />} />
          <Route path="/profissionais/edit/:id" element={<CadastroProfissional />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
