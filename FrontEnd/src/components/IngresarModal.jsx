import { useState } from "react";
import logica from "../logica/logica";
import BotonCancelar from "./BotonCancelar";

const initialFormValues={
    placa: "",
    tipo: "",
    celda:Number,
    estado:false,
}

export default function IngresarModal({celdasCarro, setCeldasCarro, celdasMoto, setCeldasMoto}) {

    const celdasC =celdasCarro
    const celdasM =celdasMoto

    const [formValues, setFormValues] = useState(initialFormValues)

    const {placa, tipo, celda, estado, }=formValues

    const inputChange= (e) => {

        const changedFormValues = {
            ...formValues,
            [e.target.name] : e.target.value
        } 

        setFormValues(changedFormValues)
    }

    const updateCarro = async (idcelda,celdaCarro) =>{
        try {
            await logica.putCeldasCarro(idcelda,celdaCarro)
            .then(res=>{
                let celcar = res.data
                setCeldasCarro(celcar)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const updateMoto = async (idcelda,celdaMoto) =>{
        try {
            await logica.putCeldasMoto(idcelda,celdaMoto)
            .then(res=>{
                let celmot = res.data
                setCeldasMoto(celmot)
            })
        } catch (error) {
            console.log(error)
        }
    } 

    const formSubmit= async e =>{
        if (tipo==="carro") {
            var unidadCelda=[]
            var idCelda= ""
            celdasC.forEach(element => {
                if (parseInt(celda)===element.id_celda) {
                    unidadCelda=element
                    idCelda=element._id
                }
            });
                var celdaCarro = {
                    ...unidadCelda,
                    placa:placa,
                    estado:estado,
                    date:Date.now()
                }
                
                updateCarro(idCelda,celdaCarro)
            
        } else {
            celdasM.forEach(element => {
                if (parseInt(celda)===element.id_celda) {
                    unidadCelda=element
                    idCelda=element._id
                }
            });
                var celdaMoto = {
                    ...unidadCelda,
                    placa:placa,
                    estado:estado,
                    date:Date.now()
                }
                
                updateMoto(idCelda,celdaMoto)
            
        }
        
        const changedFormValues = {
            ...initialFormValues
        }
        setFormValues(changedFormValues)
      }

      if (tipo==="carro") {
            var vehiculo=true
      } else {
            vehiculo=false
      }

    return (
        <div className="IngresarModal">
            <div v-if="msg=='Dashboard'" class="modal fade" id="ingresarVehiculoModal" tabindex="-1" aria-labelledby="ingresarVehiculoModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content p-3">
                        <div class="modal-header">
                            <h3 class="text-primary">Ingresar Vehiculo</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={formSubmit}>
                        <div className="modal-body d-flex flex-wrap">
                                <div id="ayudaAgregar" className="form-text col-12">
                                    Ingresa los datos del Vehiculo
                                </div>
                                <div className="col-6 p-1">
                                    <label 
                                    for="placaIngresar" 
                                    className="form-label">
                                        Placa
                                    </label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="placaIngresar"
                                    aria-describedby="ayudaPlaca" 
                                    placeholder="placa" 
                                    required 
                                    name="placa"
                                    onChange={inputChange}
                                    value={placa}
                                    />
                                </div>
                                <div className="col-6 p-1">
                                    <label 
                                    for="tipoIngresar" 
                                    className="form-label">
                                        Tipo de vehiculo
                                    </label>
                                    <select 
                                    className="form-select" 
                                    id="tipoIngresar"
                                    required
                                    name="tipo"
                                    onChange={inputChange}
                                    value={tipo}
                                    >
                                        <option selected >Seleccionar...</option>
                                        <option value="carro">Carro</option>
                                        <option value="moto">Moto</option>
                                    </select>
                                </div>
                                <div className="col-6 p-1">
                                    <label 
                                    for="celdaIngresar" 
                                    className="form-label">
                                        Celda de parqueo
                                    </label>
                                    <select 
                                    className="form-select"
                                    type="number" 
                                    id="celdaIngresar"
                                    required
                                    name="celda"
                                    onChange={inputChange}
                                    value={celda}
                                    >
                                        <option selected >Seleccionar...</option>
                                        {
                                            vehiculo?
                                            celdasC.map(celda=>

                                                celda.estado?
                                                <option value={celda.id_celda} >
                                                    {celda.id_celda}
                                                </option>
                                                :
                                                null
                                            ) 
                                            :
                                            celdasM.map(celda=>
                                                celda.estado?
                                                <option value={celda.id_celda} >
                                                    {celda.id_celda}
                                                </option>
                                                :
                                                null
                                            )
                                        }
                                    </select>
                                </div>

                        </div>
                            <div class="modal-footer justify-content-center">
                                <BotonCancelar />
                                <button type="submit" class="btn btn-primary bg-primary text-white rounded-pill">Ingresar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
