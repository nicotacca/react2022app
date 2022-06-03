/* import logo from './logo.svg'; */
import './App.css';
import Noticia from './components/Noticia';
import Header from './components/Header';
import ClassComponent from './components/ClassComponent';

// Creamos otro componente para mostrar.


// La idea es utilizar app para hacer todo, comunicamos el primer componente.

function App() {
  return (
    /* componente padre en el caso de que queramos tener varios div */
    <>
      <div className="App">

        {/* Le paso mi componente */}

        <Header></Header>
        <Noticia></Noticia>
        <ClassComponent></ClassComponent>

      </div>
    </>
  );
}

export default App;
