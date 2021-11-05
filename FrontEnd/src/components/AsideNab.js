import BotonIniiciar from "./BotonIniciar";
import BotonRegistrar from "./BotonRegistrar";
import BotonReservas from "./BotonReservas";
import Logo from "./Logo"
import {Link} from "wouter"

function AsideNab({msg}) {
    if (msg==="home") {
        return(
            <div className="AsideNab">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 text-dark bg-white position-fixed w-15">
                    <div className="d-flex flex-column justify-content-center align-items-center pt-2 text-white min-vh-100 d-none d-sm-block">
                        <Logo msg={msg} />
                        <hr className="bg-light opacity-100"/>
                        <ul className="nav nav-pills flex-column align-items-center mt-5" id="menu">
                            <li className="nav-item mb-3">
                                <BotonIniiciar />
                            </li>
                            <li className="nav-item mb-3">
                                <BotonRegistrar />
                            </li>
                            <li className="nav-item mb-3">
                                <BotonReservas />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        ) 
    }
    if (msg==="board") {
        return(
            <div className="AsideNab">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 text-dark bg-white position-fixed w-15">
                    <div className="d-flex flex-column bg-white justify-content-center align-items-center pt-2 text-white min-vh-100 d-none d-sm-block">
                        <Logo msg={msg} />
                        <hr className="bg-light opacity-100"/>
                        <div className="nav nav-pills flex-column align-items-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button className="nav-item mb-3 align-middle nav-link active" id="v-pills-TabPrincipal-tab" data-bs-toggle="pill" data-bs-target="#v-pills-TabPrincipal" type="button" role="tab" aria-controls="v-pills-TabPrincipal" aria-selected="true">Tablero Principal</button>
                            <button className="nav-item mb-3 align-middle nav-link d-none" id="v-pills-Estadisticas-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Estadisticas" type="button" role="tab" aria-controls="v-pills-Estadisticas" aria-selected="false">Estadisticas</button>
                            <button className="nav-item mb-3 align-middle nav-link" id="v-pills-Reservas-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Reservas" type="button" role="tab" aria-controls="v-pills-Reservas" aria-selected="false">Reservas</button>
                            <button className="nav-item mb-3 align-middle nav-link" id="v-pills-Config-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Config" type="button" role="tab" aria-controls="v-pills-Config" aria-selected="false">Configuracion</button>
                            <button className="nav-item mb-3 align-middle nav-link"><Link to="/" className="text-danger text-decoration-none align-middle mb-3">Salir</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}


export default AsideNab;