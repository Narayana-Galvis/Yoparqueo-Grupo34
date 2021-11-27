import AsideNab from "../components/AsideNab"
import Contenedor from "../components/Contenedor";
import Facturar from "../components/Facturar";
import IngresarModal from "../components/IngresarModal";

function DashBoard() {
    const msg="board"
    return(
        <div className="DashBoard">
            <AsideNab msg={msg}/>
            <Contenedor />
            <Facturar />
            <IngresarModal />
        </div>
    )
}

export default DashBoard