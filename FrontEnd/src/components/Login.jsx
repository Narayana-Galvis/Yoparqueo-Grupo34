import { useState } from "react"
import logica from "../logica/logica"
import BotonIniiciar from "./BotonIniciar"
import BotonRegistrar from "./BotonRegistrar"
import Logo from "./Logo"

const initialFormValues={
    usuario: "",
    password: "",

}

function Login() {
    var val2 = false
    var users =[]
    var parqueadero=[]
    var userLogged=[]
    const [error, setError] = useState(false)

    const [formValues, setFormValues] = useState(initialFormValues)

    const {usuario, password}=formValues

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
            await logica.loginUsers(formValues)
            .then(res=>{
                users=res.data
                users.forEach(element => {
                    if (usuario===element.usuario) {
                       val2=true;
                    }
                });
                if (val2) {
                    users.forEach(element => {
                        if (usuario===element.usuario) {
                            if (password===element.password) {
                                
                                logica.getParqueadero(element.idParqueadero)
                                .then(res=>{
                                    parqueadero=res.data
                                    userLogged=[
                                        element.usuario,
                                        element.idParqueadero,
                                        parqueadero.nombre_parqueadero,
                                        element.tipo
                                    ]
                                    logica.setUserLogged(userLogged)
                                })
                                window.location.href="/DashBoard"
                            }else {
                                setError(true);
                            }
                        } 
                    });
                } else {
                    setError(true);
                }
            })
            
        } catch (err) {
            console.log(err)
        }
        console.log(formValues);
        const changedFormValues = {
            ...initialFormValues
        }
        setFormValues(changedFormValues)
    }

    return(
        <div className="Login h-100 bg-dark d-flex flex-column justify-content-center">
            <div className="">
                <div className="m-0 pt-5">
                    <div className=" p-3">
                        <form onSubmit={formSubmit}>
                            <div >
                                <div className="text-center">
                                    <Logo msg="home" />
                                </div>
                                <div className="mb-3">
                                    <div id="ayudaInicio" className="form-text">Ingresa tus datos para iniciar sessión
                                    </div>
                                    <label for="#usuario" className="form-label">Usuario</label>
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="usuario"
                                    placeholder="Usuario"
                                    required
                                    name="usuario"
                                    onChange={inputChange}
                                    value={usuario}  
                                    />
                                </div>
                                <div className="mb-3">
                                    <label for="#contrasena" className="form-label">Contraseña</label>
                                    <input 
                                    type="password" 
                                    className="form-control" 
                                    id="contraseña" 
                                    placeholder="Contraseña"
                                    required
                                    name="password"
                                    onChange={inputChange}
                                    value={password} 
                                    />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="recordar"/>
                                    <label className="form-check-label" for="#recordar">Recordarme</label>
                                </div>
                                <p className={`text-danger ${error? "d-block":"d-none"}`}>
                                    Has introducido mal el Usuario o la Contraseña.
                                    </p>
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