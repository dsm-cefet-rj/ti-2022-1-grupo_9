
import './App.css';
import './shared/styles/materialize.css'
import Topbar from './layout/topbar/Topbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home';

import ListarReservasAdmin from './routes/admin/ListarReservasAdmin';
import CriarQuartos from './routes/admin/CriarQuartos';
import Registrar from './routes/usuario/Registrar';
import ListarQuartos from './routes/admin/ListarQuartos';
import Login from './routes/usuario/Login';
import AlterarSenha from './routes/usuario/AlterarSenha';
import BuscarQuartos from './routes/cliente/BuscarQuartos';
import CriarReserva from './routes/cliente/CriarReserva';
import ListarReservas from './routes/cliente/ListarReservas';
import { useState } from 'react';
import JwtService from './core/services/jwt.service';
import { AuthGuard } from './core/security/auth.guard';
import { AuthAdminGuard } from './core/security/auth-admin.guard';
import Loading from './shared/components/Loading';

function App() {
  const [isLogged, setLogged] = useState(JwtService.usuarioLogado());

  return (


    <div className="App">
      <Loading></Loading>
      <Topbar isLogged={isLogged} setLogged={setLogged} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin/criar-quarto" element={
          <AuthAdminGuard>
            <CriarQuartos />
          </AuthAdminGuard>
        }>
        </Route>
        <Route path="admin/listar-reservas" element={
          <AuthAdminGuard>
            <ListarReservasAdmin />
          </AuthAdminGuard>

        }>
        </Route>
        <Route path="admin/listar-quartos" element={
          <AuthAdminGuard>
            <ListarQuartos />
          </AuthAdminGuard>
        }>
        </Route>
        <Route path="usuario/registrar" element={
          <Registrar />
        }>
        </Route>
        <Route path="usuario/login" element={<Login setLogged={setLogged} />}>
        </Route>
        <Route path="usuario/alterar-senha" element={
          <AuthGuard>
            <AlterarSenha />
          </AuthGuard>
        }>
        </Route>
        <Route path="cliente/buscar-quartos" element={
          <AuthGuard>
            <BuscarQuartos />
          </AuthGuard>
        }>
        </Route>
        <Route path="cliente/criar-reserva/:dataEntrada/:dataSaida/:quartoId" element={
          <AuthGuard>
            <CriarReserva />
          </AuthGuard>

        }>
        </Route>
        <Route path="cliente/listar-reservas" element={
          <AuthGuard>
            <ListarReservas />
          </AuthGuard>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
