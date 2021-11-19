import { Link } from "react-router-dom"

function BotonIniiciar() {
        return(
            <div className="BotonIniciar">
                <Link to="/DashBoard" className="text-decoration-none">
                    <button type="submit" className="btn btn-primary text-white rounded-pill nav-link align-middle">Iniciar sessión</button>
                </Link>
            </div>
        )
}

export default BotonIniiciar