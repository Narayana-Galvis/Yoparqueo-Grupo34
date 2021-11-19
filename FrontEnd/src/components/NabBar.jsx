import imgPark from "../assets/img/icono-parqueadero.png"

function NabBar() {
    return(
        <div className="NabBar">
            <nav className="navbar navbar-custom bg-secondary navbar-expand-lg navbar-dark">
                <div className="container-fluid fw-bold">
                <ul className="navbar-nav p-2">
                    <li className="nav-item">
                        <span className="nav-link text-white"><img src={imgPark} alt="" /> Nombre Parqueadero
                        </span>
                    </li>
                </ul>
                <div className="d-flex align-items-end text-dark">
                    <p>usuario<i className="fas fa-user-cog"></i></p>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default NabBar