import AsideNab from "../components/AsideNab"
import Contenedor from "../components/Contenedor";

function DashBoard() {
    const msg="board"
    return(
        <div className="DashBoard">
            <AsideNab msg={msg}/>
            <Contenedor />
        </div>
    )
}

export default DashBoard