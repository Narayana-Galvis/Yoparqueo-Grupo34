import Imagen from "./../assets/svg/logo-app.svg"

function Logo({msg}) {
if (msg==="home") {
    return(
        <div className="Logo">
            <a href="/" className="text-secondary nav-link d-flex justify-content-center" aria-current="page">
                <img className="p-2 w-80"
                    src={Imagen}
                    alt="Logo Yo Parqueo"
                />
            </a>
        </div>
    )
}
if (msg==="board") {
    return(
        <div className="Logo">
            <a href="/DashBoard" className="text-secondary nav-link d-flex justify-content-center" aria-current="page">
                <img className="p-2 w-80"
                    src={Imagen}
                    alt="Logo Yo Parqueo"
                />
            </a>
        </div>
    )
}
}

export default Logo