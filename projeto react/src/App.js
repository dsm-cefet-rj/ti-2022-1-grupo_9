
import './App.css';
import './shared/styles/materialize.css'
import Topbar from './layout/topbar/Topbar';

import CriarReserva from './routes/cliente/CriarReserva';

function App() {
  return (

    <div className="App">
      <Topbar>
      </Topbar>

      <CriarReserva></CriarReserva>
    </div>
  );
}

export default App;
