import { useState } from "react"
import BotonCancelar from "./BotonCancelar"
import BotonRegistrar from "./BotonRegistrar"
import Logo from "./Logo"
import logica from "../logica/logica.js"

const initialFormValues={
    correo: "",
    celular: "",
    nit: "",
    nombre_parqueadero: "",
    direccion: "",
    ciudad: "",
    horario: "",
    valorHoraFraccion: "",
}

function Register({setParqueadero}) {

    const [formValues, setFormValues] = useState(initialFormValues)

    const {correo, celular, nit, nombre_parqueadero, direccion, ciudad, horario, valorHoraFraccion}=formValues

    const inputChange= (e) => {

        const changedFormValues = {
            ...formValues,
            [e.target.name] : e.target.value
        } 

        setFormValues(changedFormValues)
    }

    const formSubmit= async e =>{
        e.preventDefault();
        try {
            await logica.register(formValues)
            .then(res=>{
                setParqueadero(res.data)
            })
        } catch (error) {
            console.log(error)
        }
        const changedFormValues = {
            ...initialFormValues
        }
        setFormValues(changedFormValues)
      }

    const msg="submit"

    return(
        <div className="Register">
            <div className="modal fade" id="registroModal" tabindex="-1" aria-labelledby="registroModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content p-3">
                        <div className="modal-header p-2">
                            <h3 className="text-primary">Crea tu cuenta</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-2">
                            <div className="col-md-12 text-center mb-1">
                                <Logo msg="home"/>
                            </div>
                            <div className="container-fluid p-2">
                                <form onSubmit={formSubmit} className="row g-2">
                                    <div className="col-md-4">
                                        <label 
                                        for="email" 
                                        className="form-label">
                                            Correo Electrónico
                                        </label>
                                        <div className="input-group">
                                            <input 
                                            type="email" 
                                            className="form-control" 
                                            id="email" 
                                            required
                                            name="correo"
                                            onChange={inputChange}
                                            value={correo} 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <label 
                                        for="celular" 
                                        className="form-label">
                                            Celular
                                        </label>
                                        <div className="input-group">
                                            <input 
                                            type="number" 
                                            className="form-control" 
                                            id="celular" 
                                            placeholder="Celular" 
                                            required
                                            name="celular"
                                            onChange={inputChange}
                                            value={celular} 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <label 
                                        for="nit" 
                                        className="form-label">
                                            NIT
                                        </label>
                                        <div className="input-group">
                                            <input 
                                            type="text" 
                                            className="form-control" 
                                            id="nit" 
                                            placeholder="NIT" 
                                            required
                                            name="nit"
                                            onChange={inputChange}
                                            value={nit} 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <label 
                                        for="nombre_parqueadero" 
                                        className="form-label">
                                            Nombre Parqueadero
                                        </label>
                                        <div className="input-group">
                                            <div className="input-group-text"><i className="fas fa-parking"></i></div>
                                            <input 
                                            type="text" 
                                            className="form-control" 
                                            id="nombre_parqueadero" 
                                            placeholder="Nombre Parqueadero" 
                                            required
                                            name="nombre_parqueadero"
                                            onChange={inputChange}
                                            value={nombre_parqueadero} 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <label 
                                        for="direccion" 
                                        className="form-label">
                                            Dirección Parqueadero
                                        </label>
                                        <div className="input-group">
                                            <input 
                                            type="text" 
                                            className="form-control" 
                                            id="direccion" 
                                            placeholder="Dirección Parqueadero" 
                                            required
                                            name="direccion"
                                            onChange={inputChange}
                                            value={direccion} 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <label 
                                        for="ciudad" 
                                        className="form-label">
                                            Ciudad
                                        </label>
                                        <div className="input-group">
                                            <input 
                                            type="text" 
                                            className="form-control" 
                                            id="ciudad" 
                                            placeholder="Ciudad" 
                                            required
                                            name="ciudad"
                                            onChange={inputChange}
                                            value={ciudad} 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label" for="#horario">Horario Parqueadero</label>
                                        <select 
                                        className="form-select"
                                         id="horario"
                                          name="horario"
                                           onChange={inputChange}
                                           value={horario}
                                           >
                                            <option selected>Seleccionar...</option>
                                            <option value="24 horas">24 horas</option>
                                            <option value="8:00 AM - 5:00 PM">8:00 AM - 5:00 PM</option>
                                            <option value="5:00 AM - 10:00 PM">5:00 AM - 10:00 PM</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <label for="tarifa" className="form-label">Valor Hora Fracción</label>
                                        <div className="input-group">
                                            <input 
                                            type="number" 
                                            className="form-control" 
                                            id="tarifa" 
                                            placeholder="Valor Hora Fracción" 
                                            required
                                            name="valorHoraFraccion"
                                            onChange={inputChange}
                                            value={valorHoraFraccion} 
                                            />
                                        </div>
                                    </div>
                                    <div className="modal-footer col-12 d-flex justify-content-end p-1">
                                        <BotonCancelar />
                                        <BotonRegistrar msg={msg}/>
                                    </div>
                                </form>
                            </div>
                        </div>   
                        
                    </div>
                </div>
            </div>
        </div>

    )    
}
export default Register