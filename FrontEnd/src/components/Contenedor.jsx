import DbContent from "./DbContent"
import NabBar from "./NabBar"
import PieDePagina from "./PieDePagina"


function Contenedor() {
    return(
        <div className="Container">
            <div className="position-fixed w-85 p-0 margen-left">
                <NabBar />
            </div>
            <div className="margen-top position-fixed w-85 col p-0 margen-left">
                <DbContent />
            </div>
            <PieDePagina />
        </div>
    )    
}

export default Contenedor