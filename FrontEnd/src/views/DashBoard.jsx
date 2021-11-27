import AsideNab from "../components/AsideNab"
import Contenedor from "../components/Contenedor";
import Facturar from "../components/Facturar";
import IngresarModal from "../components/IngresarModal";
import logica from "../logica/logica";

function DashBoard() {
    var user =logica.getUserLogged()
    var arr=user.split(",")
    const msg="board"
    return(
        <div className="DashBoard">
            <AsideNab msg={msg} arr={arr}/>
            <Contenedor arr={arr} />
            <Facturar />
            <IngresarModal />
        </div>
    )
}

export default DashBoard