import { useState } from "react"
import logica from "../logica/logica"
import BotonCancelar from "./BotonCancelar"

const initialFormValues={
    nombre: "",
    usuario: "",
    password: "",
    passwordRepeat: "",
    tipo: "",
    idParqueadero:"",
}

export const AgregarUsuario = ({parqueadero, home}) => {
    
    const [formValues, setFormValues] = useState(initialFormValues)

    const {nombre, usuario, password, passwordRepeat, tipo}=formValues

    const inputChange= (e) => {

        if (home) {

            const changedFormValues = {

                ...formValues,
                [e.target.name] : e.target.value,
                idParqueadero:parqueadero._id,
                tipo:"Administrador"
    
            } 

            setFormValues(changedFormValues)

        }else {

            let user = logica.getUserLogged()
            let rar = user.split(",")
            const changedFormValues = {

                ...formValues,
                [e.target.name] : e.target.value,
                idParqueadero:rar[1]
    
            } 

            setFormValues(changedFormValues)

        }
         

        
    }

    const formSubmit= async e =>{
        e.preventDefault();
        try {
            await logica.regUsers(formValues)
        } catch (error) {
            console.log(error)
        }
        const changedFormValues = {
            ...initialFormValues
        }
        setFormValues(changedFormValues)
      }
    
    return (
        <div className="AgregarUsuario">
            <div className="modal fade" id="agregarModal" tabindex="-1" aria-labelledby="agregarModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content p-3">
                        <div className="modal-header">
                            <h3 className="text-primary">Agregar Usuario</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={formSubmit}>
                            <div className="modal-body d-flex flex-wrap">
                                <div id="ayudaAgregar" className="form-text col-12">
                                    {home ? "Ingresa los datos para crear usuario administrador":"Ingresa los datos para agregar usuario"}
                                </div>
                                <div className="col-6 p-1">
                                    <label 
                                    for="nombre" 
                                    className="form-label">
                                        Nombre
                                    </label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="nombreAgregar"
                                    aria-describedby="ayudaNombre" 
                                    placeholder="Nombre" 
                                    required 
                                    name="nombre"
                                    onChange={inputChange}
                                    value={nombre}
                                    />
                                </div>
                                <div className="col-6 p-1">
                                    <label 
                                    for="nombre_usuario" 
                                    className="form-label">
                                        Usuario
                                    </label>
                                    <div className="input-group">
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        id="nombre_usuario" 
                                        placeholder="Nombre Usuario" 
                                        required
                                        name="usuario"
                                        onChange={inputChange}
                                        value={usuario} 
                                        />
                                    </div>
                                </div>
                                <div className="col-6 p-1">
                                    <label 
                                    for="contraseña" 
                                    className="form-label">
                                        Contraseña
                                    </label>
                                    <div className="input-group">
                                        <input 
                                        type="password" 
                                        className="form-control" 
                                        id="contraseñaReg" 
                                        placeholder="Contraseña" 
                                        required
                                        name="password"
                                        onChange={inputChange}
                                        value={password} 
                                        />
                                    </div>
                                </div>
                                <div className="col-6 p-1">
                                    <label for="#confirmarContraseña" 
                                    className="form-label">
                                        Confirmar contraseña
                                    </label>
                                    <div className="input-group">
                                        <input 
                                        type="password" 
                                        className="form-control" 
                                        id="confirmarContraseña" 
                                        placeholder="Contraseña"
                                        required 
                                        name="passwordRepeat"
                                        onChange={inputChange}
                                        value={passwordRepeat} 
                                        />
                                    </div>
                                </div>
                                <div className={`col-12 ${home ? "d-none":"d-block"}`}>
                                    <label 
                                    for="tipo" 
                                    className="form-label">
                                        Tipo
                                    </label>
                                    <select 
                                    className="form-select" 
                                    id="tipoAgregar"
                                    name="tipo"
                                    onChange={inputChange}
                                    value={tipo}
                                    >
                                        <option selected >Seleccionar...</option>
                                        <option value="Administrador">Administrador</option>
                                        <option value="Empleado">Empleado</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer justify-content-center">
                                <BotonCancelar />
                                <button type="submit" className="btn btn-primary bg-primary text-white rounded-pill" data-bs-toggle="modal" data-bs-target="#celdasModal">Agregar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
