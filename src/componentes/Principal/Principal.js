import React from "react";
import "./Principal.css"

function Principal(props){

    return(
        <section className="seccion-principal">
            <div className="contenedor-titulo">
                <div className="contenedor-titulo__elementos">
                    <h1 className="contenedor-titulo__h1">Todo en tecnología de alto rendimiento</h1>
                </div>
            </div>

            <div className="contenedor-presentacion">
                <div className="contenedor-presentacion__elementos">
                    <img className="contenedor-presentacion__img" src={props.fondoPrincipal.direccion} alt={props.fondoPrincipal.nombre}></img>
                </div>
            </div>
        </section>
    )
}

export default Principal