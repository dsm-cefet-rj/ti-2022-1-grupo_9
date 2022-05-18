
import './App.css';
import './shared/styles/materialize.css'
import Topbar from './layout/topbar/Topbar';

import Registrar from './routes/usuario/Registrar';
import ListarReservasAdmin from './routes/admin/ListarReservasAdmin';
import ListarQuartos from './routes/admin/ListarQuartos';

function App() {
  return (

    <div className="App">
      <Topbar>
      </Topbar>

      <ListarQuartos></ListarQuartos>
    </div>
  );
}

export default App;
