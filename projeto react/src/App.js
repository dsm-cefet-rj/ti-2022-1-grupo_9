
import './App.css';
import './shared/styles/materialize.css'
import Topbar from './layout/topbar/Topbar';
import AlterarSenha from './routes/usuario/AlterarSenha';
import Registrar from './routes/usuario/Registrar';
import Login from './routes/usuario/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import ListarReservasAdmin from './routes/admin/ListarReservasAdmin';
import ListarQuartos from './routes/admin/ListarQuartos';
import CriarQuartos from './routes/admin/CriarQuartos';
import ListarReservas from './routes/cliente/ListarReservas';
import CriarReserva from './routes/cliente/CriarReserva';
import BuscarQuartos from './routes/cliente/BuscarQuartos';
import { useParams } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar>
        </Topbar>
        <Routes>
          <Route index path="/" element={<Home />}>
          </Route>
          <Route path="admin/criar-quartos" element={<CriarQuartos />}>
          </Route>
          <Route path="admin/listar-reservas" element={<ListarReservasAdmin />}>
          </Route>
          <Route path="admin/listar-quartos" element={<ListarQuartos />}>
          </Route>
          <Route path="usuario/registrar" element={<Registrar />}>
          </Route>
          <Route path="usuario/login" element={<Login />}>
          </Route>
          <Route path="usuario/alterar-senha" element={<AlterarSenha />}>
          </Route>
          <Route path="cliente/buscar-quartos" element={<BuscarQuartos/>}>
          </Route>
          <Route path="cliente/criar-reserva/:data" element={<CriarReserva/>}>
          </Route>
          <Route path="cliente/listar-reservas" element={<ListarReservas />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
