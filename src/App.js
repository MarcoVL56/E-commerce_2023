import React from 'react';
import './App.css';
import Encabezado from "./componentes/Encabezado/Encabezado"
import Navegacion from "./componentes/Navegacion/Navegacion"
import Principal from "./componentes/Principal/Principal"   
import Productos from "./componentes/Productos/Productos"
import PiePagina from "./componentes/PiePagina/PiePagina"


function App() {
  return (
    <div>
      <header>
        <Encabezado/>
      </header>

      <nav>
        <Navegacion/>
      </nav>

      <section>
        <Principal/>
      </section>

      <section>
        <Productos/>
      </section>

      <footer>
        <PiePagina/>
      </footer>
    </div>
  );
}

export default App;
