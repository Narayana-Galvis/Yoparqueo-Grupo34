import DbContent from "./DbContent"
import NabBar from "./NabBar"
import PieDePagina from "./PieDePagina"


function Contenedor({user, celdasCarro, celdasMoto}) {
    return(
        <div className="Container">
            <div className="position-fixed w-85 p-0 margen-left">
                <NabBar user={user} />
            </div>
            <div className="margen-top position-fixed w-85 col p-0 margen-left">
                <DbContent user={user} celdasCarro={celdasCarro} celdasMoto={celdasMoto} />
            </div>
            <PieDePagina />
        </div>
    )    
}

export default Contenedor