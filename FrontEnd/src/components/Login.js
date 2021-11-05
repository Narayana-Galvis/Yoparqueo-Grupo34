import BotonIniiciar from "./BotonIniciar"
import BotonRegistrar from "./BotonRegistrar"
import Logo from "./Logo"

function Login() {
    const msg="submit"
    return(
        <div className="Login">
            <div className="modal fade" id="iniciarSesionModal" tabindex="-1" aria-labelledby="iniciarSesionModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content p-3">
                    <div className="modal-header">
                        <h3 className="text-primary">Inicia sesion</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form>
                        <div className="modal-body">
                            <div className="text-center">
                                <Logo msg="home" />
                            </div>
                            <div className="mb-3">
                                <div id="ayudaInicio" className="form-text">Ingresa tus datos para iniciar sessión
                                </div>
                                <label for="#usuario" className="form-label">Usuario</label>
                                <input v-model="usuario" type="text" className="form-control" id="usuario"
                                required placeholder="Usuario"/>
                            </div>
                            <div className="mb-3">
                                <label for="#contrasena" className="form-label">Contraseña</label>
                                <input v-model="password" type="current-password" className="form-control" id="contraseña" required placeholder="Contraseña"/>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="recordar"/>
                                <label className="form-check-label" for="#recordar">Recordarme</label>
                            </div>
                            <p v-if="error" className="">Has introducido mal el email o la contraseña.</p>
                        </div>
                        <div className="modal-footer justify-content-center align-content-center">
                            <BotonRegistrar />
                            <BotonIniiciar msg={msg}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login