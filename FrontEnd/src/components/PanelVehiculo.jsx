
export default function PanelVehiculo({msg, celdasCarro}) {
    
    if (msg==="Carro") {
        return (
               <div className="d-flex flex-wrap justify-content-center">
                    {
                        // celdasCarro.map(celda=>{
                            
                        // })
                    }
                </div> 
        )   
    }

    if (msg==="Moto") {
        return (
            <div className="d-flex flex-wrap justify-content-center">
                <div className="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_disponible">
                <span className="id_parqueadero">1</span>
                </div>
                <div className="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_disponible">
                <span className="id_parqueadero">2</span>
                </div>
                <div className="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_disponible">
                <span className="id_parqueadero">3</span>
                </div>
                <div className="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_disponible">
                <span className="id_parqueadero">4</span>
                </div>
                <div className="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_disponible">
                <span className="id_parqueadero">5</span>
                </div>
                <div className="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
                <span className="id_parqueadero">6</span>
                </div>
                <div className="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
                <span className="id_parqueadero">7</span>
                </div>
                <div className="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
                <span className="id_parqueadero">8</span>
                </div>
                <div className="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
                <span className="id_parqueadero">9</span>
                </div>
                <div className="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
                <span className="id_parqueadero">10</span>
                </div>
                <div className="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
                <span className="id_parqueadero">11</span>
                </div>
                <div className="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
                <span className="id_parqueadero">12</span>
                </div>
                <div className="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
                <span className="id_parqueadero">13</span>
                </div>
                <div className="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
                <span className="id_parqueadero">14</span>
                </div>
                <div className="d-flex wh-100 align-items-center justify-content-center m-3 imagen_moto_ocupado">
                <span className="id_parqueadero">15</span>
                </div>
            </div>
        )   
    }
}
