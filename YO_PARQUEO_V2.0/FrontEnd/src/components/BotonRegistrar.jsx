function BotonRegistrar({msg}) {
    if (msg==="submit") {
        return(
            <div className="BotonRegistrar">
                <button type="submit" className="btn btn-primary text-white rounded-pill" data-bs-toggle="modal" data-bs-target="#agregarModal">Registrar parqueadero</button>
            </div>
        )
    } else {
        return(
            <div className="BotonRegistrar">
                <button  className="btn btn-primary bg-primary text-white rounded-pill nav-link align-middle" data-bs-toggle="modal" data-bs-target="#registroModal">
                    <span>Registrarme</span>
                </button>
            </div>
        )
    }
}

export default BotonRegistrar