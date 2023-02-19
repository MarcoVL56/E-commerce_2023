import React from "react";
import "./Encabezado.css"

function Encabezado(props) {
    return (
        <header className="encabezado">

            <div className="contenedor-logo">
                <div className="contenedor-logo__elementos">
                    <img className="contenedor-logo__img" src={props.logoPrincipal.direccion} alt={props.logoPrincipal.nombre}></img>
                </div>
            </div>

            <div className="contenedor-busqueda">
                <div className="contenedor-busqueda__elementos">
                    <input className="contenedor-busqueda__input" placeholder="Ingrese el nombre del producto"></input> 
                    <button className="contenedor-busqueda__button">
                        <img className="contenedor-busqueda__img" src={props.logoBusqueda.direccion} alt = {props.logoBusqueda.nombre}></img>
                    </button>
                </div>
            </div>

        </header>
    )
}


export default Encabezado