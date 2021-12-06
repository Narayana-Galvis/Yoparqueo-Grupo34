
export default function PanelVehiculo({msg, celdasCarro, celdasMoto}) {
    const celdasC =celdasCarro
    const celdasM =celdasMoto

    if (msg==="Carro") {
        
        return (
            <div className="d-flex flex-wrap justify-content-center">
                {   
                    celdasC.map(celda=>
                        <div className={`d-flex wh-100 align-items-center justify-content-center m-3  ${celda.estado? "imagen_carro_disponible":"imagen_carro_ocupado"}`}>
                            <span className="id_parqueadero">{celda.id_celda}</span>
                        </div>
                    )
                }
            </div> 
        )   
    }

    if (msg==="Moto") {
        return (
            <div className="d-flex flex-wrap justify-content-center">
                {   
                    celdasM.map(celda=>
                        <div className={`d-flex wh-100 align-items-center justify-content-center m-3  ${celda.estado? "imagen_moto_disponible":"imagen_moto_ocupado"}`}>
                            <span className="id_parqueadero">{celda.id_celda}</span>
                        </div>
                    )
                }
            </div>
        )   
    }
}
