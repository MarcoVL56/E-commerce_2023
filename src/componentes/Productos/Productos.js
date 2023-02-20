import React from "react";
import "./Productos.css"

function Productos(props) {

    return (
        <div className="seccion-productos">
            <Tendencias />
            <ImagenesProductos />
            <Gaming />
            <Nuevos />
        </div>
    )

}


export default Productos


function Tendencias(props) {

    return (
        <div className="contenedor-tendencias">
            <div className="contenedor-tendencias__elementos">
                <div className="contenedor-tendencias__subtitulo">
                    <h2 className="contenedor-tendencias__h2">Tendencias</h2>
                </div>
            </div>

            <div className="contenedor-tendencias__elementos">
                <div className="contenedor-tendencias__etiquetas">
                    
                </div>
            </div>
        </div>
    )

}


function ImagenesProductos(props) {

    return (
        <div className="contenedor-productos">
       
        </div>
    )
}


function Gaming(props) {
    return (
        <div className="contenedor-gaming">
   
        </div>
    )

}

function Nuevos(props) {
    return (
        <div className="contenedor-nuevos">
    
        </div>
    )

}