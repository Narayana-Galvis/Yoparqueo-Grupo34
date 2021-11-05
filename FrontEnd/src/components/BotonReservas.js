function BotonReservas({msg}) {
    if (msg==="submit") {
        return(
            <div className="BotonReservas">
            <button type="submit" className="btn btn-primary bg-primary text-white rounded-pill" data-bs-dismiss="modal">Reservar</button>
        </div> 
        )
    } else {
        return(
            <div className="BotonReservas">
                <button className="btn btn-primary bg-primary text-white rounded-pill nav-link align-middle" data-bs-toggle="modal" data-bs-target="#reservaParcial">
                    <span>Reservar</span>
                </button>
            </div>    
        )
    }
}

export default BotonReservas