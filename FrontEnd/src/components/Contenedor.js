import DbContent from "./DbContent"
import NabBar from "./NabBar"
import PieDePagina from "./PieDePagina"
import Secciones from "./Secciones"

function Contenedor({msg}) {
    const seccion={
        msg1:"Yo Parqueo",
        msg2:"Creadores",
        msg3:"Actualizaciones"
        }
        if (msg==="home") {
            return(
                <div className="Container">
                    <div className="position-fixed w-85 p-0 margen-left">
                        <NabBar msg={msg} />
                    </div>
                    <div className="position-fixed p-0 margen-left margen-top">
                        <div className="d-flex justify-content-center p-4">
                            <div className="p-4">
                                <div className="d-flex text-center">
                                    <Secciones msg={seccion.msg1} />
                                    <Secciones msg={seccion.msg2} />
                                    <Secciones msg={seccion.msg3} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <PieDePagina />
                </div>
            )
        }
        if (msg==="board") {
            return(
                <div className="Container">
                    <div className="position-fixed w-85 p-0 margen-left">
                        <NabBar msg={msg} />
                    </div>
                    <div className="margen-top position-fixed col p-0 margen-left">
                        <DbContent />
                    </div>
                    <PieDePagina />
                </div>
            )
        }
}

export default Contenedor