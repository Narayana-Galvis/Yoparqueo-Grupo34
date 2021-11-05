import BotonIniiciar from "./BotonIniciar"
import BotonRegistrar from "./BotonRegistrar"
import Logo from "./Logo"

function Register() {
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
                                <form className="row g-2">
                                    <div className="col-md-4">
                                        <label for="nombre_usuario" className="form-label">Nombre Usuario</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="nombre_usuario" placeholder="Nombre Usuario" v-model="usuario" required/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <label for="contraseña" className="form-label">Contraseña</label>
                                        <div className="input-group">
                                            <input type="current-password" className="form-control" id="contraseña" placeholder="Contraseña" v-model="password" required/>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <label for="#confirmarContraseña" class="form-label">Confirmar contraseña</label>
                                        <div className="input-group">
                                            <input v-model="passwordRepeat" type="current-password" class="form-control" id="confirmarContraseña" required placeholder="Contraseña"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <label for="email" className="form-label">Correo Electrónico</label>
                                        <div className="input-group">
                                            <input type="email" className="form-control" id="email" v-model="correo" required/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <label for="celular" className="form-label">Celular</label>
                                        <div className="input-group">
                                            <input type="number" className="form-control" id="celular" placeholder="Celular" v-model="celular" required/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <label for="nit" className="form-label">NIT</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="nit" placeholder="NIT" v-model="nit" required/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <label for="nombre_parqueadero" className="form-label">Nombre Parqueadero</label>
                                        <div className="input-group">
                                            <div className="input-group-text"><i className="fas fa-parking"></i></div>
                                            <input type="text" className="form-control" id="nombre_parqueadero" placeholder="Nombre Parqueadero" v-model="nombre_parqueadero" required/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <label for="direccion" className="form-label">Dirección Parqueadero</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="direccion" placeholder="Dirección Parqueadero" v-model="direccion" required/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <label for="ciudad" className="form-label">Ciudad</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="ciudad" placeholder="Ciudad" v-model="ciudad" required/>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <label for="celdas_carro" className="form-label">Celdas totales carro</label>
                                        <div className="input-group">
                                            <input type="number" className="form-control" id="celdas_carro" placeholder="No. celdas carros" v-model="celdas_carro" required/>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <label for="celdas_moto" className="form-label">Celdas totales moto</label>
                                        <div className="input-group">
                                            <input type="number" className="form-control" id="celdas_moto" placeholder="No. celdas motos" v-model="celdas_moto"/>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label" for="#horario">Horario Parqueadero</label>
                                        <select className="form-select" id="horario" v-model="horario">
                                            <option selected>Seleccionar...</option>
                                            <option value="24 horas">24 horas</option>
                                            <option value="8:00 AM - 5:00 PM">8:00 AM - 5:00 PM</option>
                                            <option value="5:00 AM - 10:00 PM">5:00 AM - 10:00 PM</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <label for="tarifa" className="form-label">Valor Hora Fracción</label>
                                        <div className="input-group">
                                            <input type="number" className="form-control" id="tarifa" placeholder="Valor Hora Fracción" v-model="valorHoraFraccion" required/>
                                        </div>
                                    </div>
                                    <div className="modal-footer col-12 d-flex justify-content-end p-1">
                                        <BotonIniiciar />
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