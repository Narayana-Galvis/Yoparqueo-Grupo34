import { useState } from "react"
import imgPark from "../assets/img/icono-parqueadero.png"
import logica from "../logica/logica"

function NabBar({user}) {
    const [nombre, setNombre] = useState("")
    
    const busqueda = async e =>{
        try {
            await logica.getParqueadero(user.idparq)
            .then(res=>{
            let parqueadero=res.data
            setNombre(parqueadero.nombre_parqueadero)
            }) 
        } catch (err) {
            console.log(err)
        }
    }
          
    return(
        <div className="NabBar">
            <nav className="navbar navbar-custom bg-secondary navbar-expand-lg navbar-dark">
                <div className="container-fluid fw-bold">
                <ul className="navbar-nav p-2">
                    <li className="nav-item">
                        <span onLoad={busqueda} className="nav-link text-white"><img src={imgPark} alt="" />
                            {nombre}
                        </span>
                    </li>
                </ul>
                <div className="d-flex align-items-end text-dark">
                    <p>{user.user}<i className="fas fa-user-cog"></i></p>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default NabBar