import React from "react";
import "./Productos.css"

const categoriasProductos = [
    { id: "0", categoria: "Tendencias" },
    { id: "1", categoria: "Nuevos Productos" },
    { id: "2", categoria: "Te podría gustar" },
    { id: "3", categoria: "Gaming" }
]

const etiquetasProductos = [
    { id: "0", nombre: "Producto Referencia", precio: "₡65000", informacion: "Producto para referenciar", imagen: "./img/productos/productoReferencia.jpg" },
]

const gruposProductos = [
    { id: "0", categoria: categoriasProductos[0], producto: etiquetasProductos[0] },
    { id: "1", categoria: categoriasProductos[0], producto: etiquetasProductos[0] },
    { id: "2", categoria: categoriasProductos[0], producto: etiquetasProductos[0] },
    { id: "3", categoria: categoriasProductos[0], producto: etiquetasProductos[0] },
    { id: "4", categoria: categoriasProductos[0], producto: etiquetasProductos[0] },
    { id: "5", categoria: categoriasProductos[1], producto: etiquetasProductos[0] },
    { id: "6", categoria: categoriasProductos[1], producto: etiquetasProductos[0] },
    { id: "7", categoria: categoriasProductos[1], producto: etiquetasProductos[0] },
    { id: "8", categoria: categoriasProductos[1], producto: etiquetasProductos[0] },
    { id: "9", categoria: categoriasProductos[1], producto: etiquetasProductos[0] },
    { id: "10", categoria: categoriasProductos[2], producto: etiquetasProductos[0] },
    { id: "11", categoria: categoriasProductos[2], producto: etiquetasProductos[0] },
    { id: "12", categoria: categoriasProductos[2], producto: etiquetasProductos[0] },
    { id: "13", categoria: categoriasProductos[2], producto: etiquetasProductos[0] },
    { id: "14", categoria: categoriasProductos[2], producto: etiquetasProductos[0] },
    { id: "15", categoria: categoriasProductos[3], producto: etiquetasProductos[0] },
    { id: "16", categoria: categoriasProductos[3], producto: etiquetasProductos[0] },
    { id: "17", categoria: categoriasProductos[3], producto: etiquetasProductos[0] },
    { id: "18", categoria: categoriasProductos[3], producto: etiquetasProductos[0] },
    { id: "19", categoria: categoriasProductos[3], producto: etiquetasProductos[0] },
]



function Productos(props) {

    return (
        <div className="seccion-productos">
            <GruposProductos categoriasProductos={categoriasProductos} gruposProductos={gruposProductos} />
        </div>
    )
}

export default Productos



function GruposProductos(props) {
    const grupos = props.gruposProductos
    const categorias = props.categoriasProductos

    const componentesProductos = categorias.map((componenteProducto) =>
        <div key={componenteProducto.id} className="contenedor-grupo-productos">
            <div className="contenedor-categoria-producto">
                <div className="contenedor-categoria-producto__titulo">
                    <h2 className="contenedor-categoria-producto__h2">
                        {componenteProducto.categoria}
                    </h2>
                </div>
            </div>
            <div className="contenedor-producto">
                {grupos.filter((grupo) => grupo.categoria.id === componenteProducto.id).map(
                    (grupo) =><EtiquetaProducto key={grupo.id} nombre={grupo.producto.nombre} 
                    precio={grupo.producto.precio} img={grupo.producto.imagen} />)
                }
            </div>
        </div>
    )

    return componentesProductos
}




function EtiquetaProducto(props) {

    return (
        <div className="contenedor-etiqueta-producto">
            <div className="contenedor-etiqueta-producto__imagen">
                <img className="contenedor-etiqueta-producto__img"
                    src={props.img}
                    alt={props.nombre}>
                </img>
            </div>

            <div className="contenedor-etiqueta-producto__informacion">
                <h3 className="contenedor-etiqueta-producto__h3">
                    {props.precio}
                </h3>
                <h2 className="contenedor-etiqueta-producto__h2">
                    {props.nombre}
                </h2>
                <button className="contenedor-etiqueta-producto__button">
                    Más información
                </button>
            </div>
        </div>
    )
}