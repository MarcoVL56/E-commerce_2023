import React from "react";
import "./Encabezado.css"

function Encabezado(props) {
    return (
        <header className="encabezado">

            <div className="contenedor-logo">
                <div className="contenedor-logo__elementos">
                    <img className="contenedor-logo__img" 
                        src={props.imagenesEncabezado[0].direccion} 
                        alt={props.imagenesEncabezado[0].nombre}>
                    </img>
                </div>
            </div>

            <div className="contenedor-busqueda">
                <div className="contenedor-busqueda__elementos">
                    <input className="contenedor-busqueda__input" 
                        placeholder="Ingrese el nombre del producto">
                    </input> 

                    <button className="contenedor-busqueda__button">
                        <img className="contenedor-busqueda__img" 
                            src={props.imagenesEncabezado[1].direccion} 
                            alt = {props.imagenesEncabezado[1].nombre}>
                        </img>
                    </button>
                </div>
            </div>

        </header>
    )
}


export default Encabezado