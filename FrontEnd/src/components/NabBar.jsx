import imgPark from "../assets/img/icono-parqueadero.png"
import logica from "../logica/logica"

function NabBar() {
    
    var user= logica.getUserLogged()
    let arr=user.split(",")
    
    return(
        <div className="NabBar">
            <nav className="navbar navbar-custom bg-secondary navbar-expand-lg navbar-dark">
                <div className="container-fluid fw-bold">
                <ul className="navbar-nav p-2">
                    <li className="nav-item">
                        <span className="nav-link text-white"><img src={imgPark} alt="" />
                            {arr[2]}
                        </span>
                    </li>
                </ul>
                <div className="d-flex align-items-end text-dark">
                    <p>{arr[0]}<i className="fas fa-user-cog"></i></p>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default NabBar