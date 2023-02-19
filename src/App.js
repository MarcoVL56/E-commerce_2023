import React from 'react';
import './App.css';
import Encabezado from "./componentes/Encabezado/Encabezado"
import Navegacion from "./componentes/Navegacion/Navegacion"
import Principal from "./componentes/Principal/Principal"
import Productos from "./componentes/Productos/Productos"
import PiePagina from "./componentes/PiePagina/PiePagina"


const imagenesEncabezado = [
  {nombre: "Logo Principal", direccion: "./img/logos/logoPrincipal.png"},
  {nombre: "Logo Busqueda", direccion: "./img/logos/logoBusqueda.png"}
];

const imagenesPrincipales = [
  {nombre: "Fondo Principal", direccion: "./img/fondos/fondoPrincipal.jpg"}
];

function App() {
  return (
    <div className='contenedor-disposicion'>
      <Encabezado logoPrincipal = {imagenesEncabezado[0]} logoBusqueda = {imagenesEncabezado[1]}/>
      <Navegacion />
      <Principal fondoPrincipal = {imagenesPrincipales[0]}/>
      <Productos />
      <PiePagina />
    </div>
  );
}

export default App;
