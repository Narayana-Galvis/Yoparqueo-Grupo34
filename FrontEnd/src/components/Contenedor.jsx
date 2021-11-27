import DbContent from "./DbContent"
import NabBar from "./NabBar"
import PieDePagina from "./PieDePagina"


function Contenedor({arr}) {
    return(
        <div className="Container">
            <div className="position-fixed w-85 p-0 margen-left">
                <NabBar arr={arr} />
            </div>
            <div className="margen-top position-fixed w-85 col p-0 margen-left">
                <DbContent arr={arr} />
            </div>
            <PieDePagina />
        </div>
    )    
}

export default Contenedor