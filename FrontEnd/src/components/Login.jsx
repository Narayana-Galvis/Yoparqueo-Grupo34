import BotonIniiciar from "./BotonIniciar"
import BotonRegistrar from "./BotonRegistrar"
import Logo from "./Logo"

function Login() {
    return(
        <div class="Login h-100 bg-dark d-flex flex-column justify-content-center">
            <div class="">
                <div class="m-0 pt-5">
                    <div class=" p-3">
                        <form>
                            <div >
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
                                {/* <p v-if="error" className="">Has introducido mal el email o la contraseña.</p> */}
                            </div>
                            <div className="d-flex flex-row  justify-content-evenly">
                                <BotonRegistrar />
                                <BotonIniiciar />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>       
    )
}

export default Login