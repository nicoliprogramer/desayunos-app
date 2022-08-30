import './estilo.css';
import 'core-js/actual';
import Header from './components/Header';
import Destacado from './components/Destacado';
import Servicio from './components/Servicio';
import Clientes from './components/Clientes';
import Footer from './components/Footer';


function App() {

  return (
    <div className='container-fluid fondo_rojo'>
      <Header />
      <hr />
      <Destacado />
      <Servicio />
      <Clientes />
      <hr />
      <Footer />

    </div>
  );
}

export default App;
