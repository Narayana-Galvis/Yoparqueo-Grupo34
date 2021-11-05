import LogoRedes from "./LogoRedes"
import imgPark from "../assets/img/icono-parqueadero.png"

function NabBar({msg}) {
    const redes={
        facebook:"facebook",
        github:"github",
        twitter:"twitter",
        instagram:"instagram"
    }
    if (msg==="home") {
        return(
            <div className="NabBar">
                <nav className="navbar navbar-custom border-top border-5 border-secondary bg-white navbar-expand-lg navbar-light">
                    <div className="container-fluid fw-bold">
                        <ul className="navbar-nav p-2 d-flex align-items-center">
                            <li className="nav-item">
                            <span className="nav-link"> ¿Quienes somos? </span>
                            </li>
                        </ul>
                        <ul className="navbar-nav p-2">
                            <li className="nav-item text-primary p-2" >
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                    <LogoRedes msg={redes.facebook}/>
                                </a> 
                            </li>
                            <li className="nav-item text-primary p-2" >
                                <a href="https://github.com/" target="_blank" rel="noreferrer">
                                    <LogoRedes msg={redes.github}/>
                                </a> 
                            </li>
                            <li className="nav-item text-primary p-2" >
                                <a href="https://twitter.com/?lang=es" target="_blank" rel="noreferrer">
                                    <LogoRedes msg={redes.twitter}/>
                                </a> 
                            </li>
                            <li className="nav-item text-primary p-2" >
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                    <LogoRedes msg={redes.instagram}/>
                                </a> 
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
    if (msg==="board") {
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
}

export default NabBar