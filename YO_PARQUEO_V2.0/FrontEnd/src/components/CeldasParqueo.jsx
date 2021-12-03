import { useState } from "react"
import logica from "../logica/logica"
import BotonCancelar from "./BotonCancelar"


const initialFormValues={
    celdasCarro: "",
    celdasMoto: "",
}

export default function CeldasParqueo({parqueadero}) {

    const [formValues, setFormValues] = useState(initialFormValues)

    const {celdasCarro, celdasMoto}=formValues

    const inputChange= (e) => {

        const changedFormValues = {

            ...formValues,
            [e.target.name] : e.target.value,

        } 

        setFormValues(changedFormValues)

    }

    const formSubmit= async e =>{
        e.preventDefault();
        for (let i = 1; i <= celdasCarro; i++) {
            
            try {
                let celda ={
                    id_celda:i,
                    placa:"",
                    idParqueadero:parqueadero._id,
                }
                await logica.regCeldasCarro(celda)
            } catch (error) {
                console.log(error)
            }
            
        }

        for (let i = 1; i <= celdasMoto; i++) {
            
            try {
                let celda ={
                    id_celda:i,
                    placa:"",
                    idParqueadero:parqueadero._id,
                }
                await logica.regCeldasMoto(celda)
            } catch (error) {
                console.log(error)
            }
            
        }
        
        const changedFormValues = {
            ...initialFormValues
        }
        setFormValues(changedFormValues)
      }

    return (
        <div className="CeldasParqueo">
            <div className="modal fade" id="celdasModal" tabindex="-1" aria-labelledby="celdasModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content p-3">
                        <div className="modal-header">
                            <h3 className="text-primary">Agregar Usuario</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={formSubmit}>
                            <div className="modal-body d-flex flex-wrap">
                                <div id="ayudaAgregar" className="form-text col-12">
                                    Ingrese la cantidad de celdas de parqueo para moto y carro
                                </div>
                                <div className="col-6 p-1">
                                    <label 
                                    for="celdas_carro" 
                                    class="form-label">
                                        Celdas totales para carros
                                    </label>
                                    <input
                                    type="number"
                                    class="form-control"
                                    id="celdas_carro"
                                    placeholder="No. celdas carros" 
                                    required 
                                    name="celdasCarro"
                                    onChange={inputChange}
                                    value={celdasCarro}
                                    />
                                </div>
                                <div className="col-6 p-1">
                                    <label 
                                    for="celdas_moto" 
                                    class="form-label">
                                        Celdas totales para motos
                                    </label>
                                    <input
                                    type="number"
                                    class="form-control"
                                    id="celdas_moto"
                                    placeholder="No. celdas motos" 
                                    required 
                                    name="celdasMoto"
                                    onChange={inputChange}
                                    value={celdasMoto}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer justify-content-center">
                                <BotonCancelar />
                                <button type="submit" className="btn btn-primary bg-primary text-white rounded-pill" data-bs-dismiss="modal" aria-label="Close">Aceptar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
