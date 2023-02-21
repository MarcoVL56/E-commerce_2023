import React from "react";
import "./Productos.css"


function Productos(props) {

    return (
        <div className="seccion-productos">
            <ProductosPaginaPrincipal/>
        </div>
    )

}


export default Productos


function ProductosPaginaPrincipal(props) {

    return(
        <div className="contenedor-grupo-productos">
            <div className="contenedor-categoria-producto">
                <div className="contenedor-categoria-producto__titulo">
                    <h2 className="contenedor-categoria-producto__h2">
                        Tendecias
                    </h2>
                </div>
            </div>

            <div className="contenedor-producto">
                <div className="contenedor-etiqueta-producto">
                    <div className="contenedor-etiqueta-producto__imagen">
                        <img className="contenedor-etiqueta-producto__img" 
                            src="./img/productos/productoReferencia.jpg" 
                            alt="Producto Referencia">
                        </img>
                    </div>

                    <div className="contenedor-etiqueta-producto__informacion">
                        <h3 className="contenedor-etiqueta-producto__h3">
                                ₡65000
                        </h3>
                        <h2 className="contenedor-etiqueta-producto__h2">
                            Titulo del producto
                        </h2>
                        <button className="contenedor-etiqueta-producto__button">
                            Más información
                        </button>
                    </div>
                </div>

                <div className="contenedor-etiqueta-producto">
                    <div className="contenedor-etiqueta-producto__imagen">
                        <img className="contenedor-etiqueta-producto__img" 
                            src="./img/productos/productoReferencia.jpg" 
                            alt="Producto Referencia">
                        </img>
                    </div>

                    <div className="contenedor-etiqueta-producto__informacion">
                        <h3 className="contenedor-etiqueta-producto__h3">
                                ₡65000
                        </h3>
                        <h2 className="contenedor-etiqueta-producto__h2">
                            Titulo del producto
                        </h2>
                        <button className="contenedor-etiqueta-producto__button">
                            Más información
                        </button>
                    </div>
                </div>

                <div className="contenedor-etiqueta-producto">
                    <div className="contenedor-etiqueta-producto__imagen">
                        <img className="contenedor-etiqueta-producto__img" 
                            src="./img/productos/productoReferencia.jpg" 
                            alt="Producto Referencia">
                        </img>
                    </div>

                    <div className="contenedor-etiqueta-producto__informacion">
                        <h3 className="contenedor-etiqueta-producto__h3">
                                ₡65000
                        </h3>
                        <h2 className="contenedor-etiqueta-producto__h2">
                            Titulo del producto
                        </h2>
                        <button className="contenedor-etiqueta-producto__button">
                            Más información
                        </button>
                    </div>
                </div>

                <div className="contenedor-etiqueta-producto">
                    <div className="contenedor-etiqueta-producto__imagen">
                        <img className="contenedor-etiqueta-producto__img" 
                            src="./img/productos/productoReferencia.jpg" 
                            alt="Producto Referencia">
                        </img>
                    </div>

                    <div className="contenedor-etiqueta-producto__informacion">
                        <h3 className="contenedor-etiqueta-producto__h3">
                                ₡65000
                        </h3>
                        <h2 className="contenedor-etiqueta-producto__h2">
                            Titulo del producto
                        </h2>
                        <button className="contenedor-etiqueta-producto__button">
                            Más información
                        </button>
                    </div>
                </div>

                <div className="contenedor-etiqueta-producto">
                    <div className="contenedor-etiqueta-producto__imagen">
                        <img className="contenedor-etiqueta-producto__img" 
                            src="./img/productos/productoReferencia.jpg" 
                            alt="Producto Referencia">
                        </img>
                    </div>

                    <div className="contenedor-etiqueta-producto__informacion">
                        <h3 className="contenedor-etiqueta-producto__h3">
                                ₡65000
                        </h3>
                        <h2 className="contenedor-etiqueta-producto__h2">
                            Titulo del producto
                        </h2>
                        <button className="contenedor-etiqueta-producto__button">
                            Más información
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )

}
