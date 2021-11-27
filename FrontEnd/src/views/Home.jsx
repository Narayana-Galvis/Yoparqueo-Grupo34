import Login from "../components/Login";
import Register from "../components/Register";
import fondo from "../assets/img/cars-in-the-parking-lot-in-row.jpg"
import { AgregarUsuario } from "../components/AgregarUsuario";
import { useState } from "react";
import CeldasParqueo from "../components/CeldasParqueo";
function Home() {
    
    const [parqueadero, setParqueadero] = useState([])

    const home = true

    return (
        <div className="Home">
            <div className="position-fixed">
                <img className="w-85" src={fondo} alt="Fondo Inicio" />
            </div> 
            <div className="position-fixed w-100 h-100 bg-secondary opacity-75">
                
            </div> 
            <div className="position-fixed h-100 ml-75 w-25">
                <Login />
            </div>
            <Register setParqueadero={setParqueadero} />
            <AgregarUsuario parqueadero={parqueadero} home={home}/>
            <CeldasParqueo parqueadero={parqueadero} />
        </div>
    )
}
export default Home;