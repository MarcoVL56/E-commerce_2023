import React from "react";
import "./PiePagina.css"

function PiePagina(props) {
    return (
        <footer className="pie-pagina">
            <div className="contenedor-contacto-titulo">
                <div className="contenedor-contacto-titulo__elementos">
                    <h2 className="contenedor-contacto-titulo__h2">
                        ¿Cómo podemos ayudarte?
                    </h2>
                </div>
            </div>

            <div className="contenedor-contacto-informacion">
                <div className="contenedor-contacto-informacion__elementos">
                    <h3 className="contenedor-contacto-informacion__h3">
                        Información de contacto
                    </h3>
                    <p className="contenedor-contacto-informacion__p">
                        <b>Whatsapp:</b> 89564312
                    </p>
                    <p className="contenedor-contacto-informacion__p">
                        <b>Correo:</b> mastermarket@gmail.com
                    </p>
                    <p className="contenedor-contacto-informacion__p">
                        <b>Teléfono:</b> 22240704
                    </p>
                </div>

                <div className="contenedor-contacto-informacion__elementos">
                    <h3 className="contenedor-contacto-informacion__h3">
                        Horario de atención
                    </h3>
                    <p className="contenedor-contacto-informacion__p">
                        Lunes a Viernes
                    </p>
                    <p className="contenedor-contacto-informacion__p">
                        7am a 7pm
                    </p>
                    <p className="contenedor-contacto-informacion__p">
                        Sábados a Domingos
                    </p>
                    <p className="contenedor-contacto-informacion__p">
                        7am a 3pm
                    </p>
                </div>

                <div className="contenedor-contacto-informacion__elementos">
                    <h3 className="contenedor-contacto-informacion__h3">
                        Tiendas
                    </h3>
                    <p className="contenedor-contacto-informacion__p">
                        Alajuela: City Mall tercera planta frente a ICON
                    </p>
                    <p className="contenedor-contacto-informacion__p">
                        Heredia: En el mall paseo de las flores en la planta numero dos
                    </p>
                    <p className="contenedor-contacto-informacion__p">
                        Limon: Ubicados en la plaza moin
                    </p>
                </div>

                <div className="contenedor-contacto-informacion__elementos contenedor-contacto-informacion__elementos--alto">
                    <img className="contenedor-contacto-informacion__img" src="./img/logos/logoPiePagina.png" alt="Logo pie pagina"></img>
                </div>
            </div>

            <div className="contenedor-contacto-redes">
                <div className="contenedor-contacto-redes__elementos">
                    <h2 className="contenedor-contacto-redes__h2">
                        Siguenos
                    </h2>
                </div>

                <div className="contenedor-contacto-redes__elementos contenedor-contacto-redes__elementos--espacio">
                    <a className="contenedor-contacto-redes__link" href="https://es-la.facebook.com/">
                        <img className="contenedor-contacto-redes__img" src="./img/logos/logoFacebook.png" alt="Logo Facebook"></img>
                    </a>
                    <a className="contenedor-contacto-redes__link" href="https://www.instagram.com/">
                        <img className="contenedor-contacto-redes__img" src="./img/logos/logoInstagram.png" alt="Logo Instagram"></img>
                    </a>
                    <a className="contenedor-contacto-redes__link" href="https://www.youtube.com/">
                        <img className="contenedor-contacto-redes__img" src="./img/logos/logoYoutube.png" alt="Logo Youtube"></img>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default PiePagina