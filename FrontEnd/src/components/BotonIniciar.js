import {Link} from "wouter" 

function BotonIniiciar({msg}) {
    if (msg==="submit") {
        return(
            <div className="BotonIniciar">
                <Link href="/DashBoard">
                    <button type="submit" className="btn btn-primary text-white rounded-pill nav-link align-middle" data-bs-dismiss="modal">Iniciar sessión</button>
                </Link>
            </div>
        )
    }else{
        return (
            <div className="BotonIniciar">
                <button className="nav-link align-middle border-0 bg-white" data-bs-toggle="modal" data-bs-target="#iniciarSesionModal">
                    <span>Iniciar Sesion</span>
                </button>
            </div>
        )
    }
    
}

export default BotonIniiciar