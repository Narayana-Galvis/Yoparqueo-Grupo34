import { useState } from "react";
import AsideNab from "../components/AsideNab"
import Contenedor from "../components/Contenedor";
import Facturar from "../components/Facturar";
import IngresarModal from "../components/IngresarModal";
import logica from "../logica/logica";

function DashBoard() {

    var user =logica.getUserLogged()
    
    const msg="board"

    const [celdasCarro, setCeldasCarro] = useState([])
    const [celdasMoto, setCeldasMoto] = useState([])

    const carga = async e =>{
        try {
            await logica.getCeldasCarro(user.idparq)
            .then(res=>{
                let celda = res.data
                setCeldasCarro(celda)
            })
        } catch (error) {
            console.log(error)
        }
        try {
            await logica.getCeldasMoto(user.idparq)
            .then(res=>{
                let celda = res.data
                setCeldasMoto(celda)
            })
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div onLoad={carga} className="DashBoard">
            <AsideNab msg={msg} user={user} />
            <Contenedor user={user} celdasCarro={celdasCarro} celdasMoto={celdasMoto} />
            <Facturar />
            <IngresarModal celdasCarro={celdasCarro} setCeldasCarro={setCeldasCarro} celdasMoto={celdasMoto} setCeldasMoto={setCeldasMoto} />
        </div>
    )
}

export default DashBoard