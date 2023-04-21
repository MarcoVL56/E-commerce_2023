import React from 'react';
import './App.css';
import Encabezado from "./componentes/Encabezado/Encabezado"
import Navegacion from "./componentes/Navegacion/Navegacion"
import Principal from "./componentes/Principal/Principal"
import Productos from "./componentes/Productos/Productos"
import PiePagina from "./componentes/PiePagina/PiePagina"


function App() {
  const imagenesEncabezado = [
    {nombre: "Logo Principal", direccion: "./img/logos/logoPrincipal.png"},
    {nombre: "Logo Busqueda", direccion: "./img/logos/logoBusqueda.png"}
  ];
  
  const imagenesPrincipales = [
    {nombre: "Fondo Principal", direccion: "./img/fondos/fondoPrincipal.jpg"}
  ];

  return (
    <div className='contenedor-disposicion'>
      <Encabezado imagenesEncabezado = {imagenesEncabezado}/>
      <Navegacion />
      <Principal imagenesPrincipales = {imagenesPrincipales}/>
      <Productos />
      <PiePagina />
    </div>
  );
}

export default App;
