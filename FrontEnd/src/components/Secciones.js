import Creadores from "./Creadores"
import LogoRedes from "./LogoRedes"
import Notice from "./Notice"

function Secciones({msg}) {
    const crea=Creadores()
    if (msg==="Yo Parqueo") {
        return(
            <div className="Secciones w-50">
                <div className="h-500 p-4 bg-white mx-3 shadow-lg rounded-4">
                    <h4 className="text-primary p-3">{msg}</h4>
                    <div className="overflow-auto h-400">
                        <p><strong>YoParqueo</strong> es una plataforma web enfocada a usuarios y administradores de parqueaderos, busca facilitar y mejorar la experiencia con las siguientes funcionalidades:</p>
                        <p><strong>Usuario de parqueadero:</strong></p>
                        <ul>
                            <li>Permite ver disponibilidad de parqueaderos en un mapa (parqueaderos cercanos con celdas disponibles).</li>
                            <li>Permite reserva anticipada del parqueadero (Reserva por 15 minutos antes sin registrarse y reserva completa registr&aacute;ndose).</li>
                            <li>Permite consultar el tiempo consumido en el parqueadero. .</li>
                            <li>Permite tracking de ruta al parqueadero seleccionado.</li>
                        </ul>
                        <p><strong>Administrador de parqueadero:</strong></p>
                        <ul>
                            <li>Permite la gesti&oacute;n del personal o empleados.</li>
                            <li>Permite la administraci&oacute;n del servicio de parqueaderos (facturaci&oacute;n, tiempos, costos)</li>
                            <li>Permite la visualizaci&oacute;n de estad&iacute;sticas de usuario y de parqueaderos (concurrencias, tiempos, ingresos, m&aacute;s visitados, mejor promedio de tarifa, otros).</li>
                            <li>Permite consultar reservas.</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    if (msg==="Creadores") {
        return(
            <div className="Secciones w-50">
                <div className="h-500 p-4 bg-white mx-3 shadow-lg rounded-4">
                    <h4 className="text-primary p-3">{msg}</h4>
                    <table>
                        <tbody>
                            {
                                crea.map(singleCrea=>
                                    <tr>
                                        <td><img className="rounded-circle" src={singleCrea.src} alt={singleCrea.nombre}/></td>
                                        <td>
                                            <div className="text-start"> {singleCrea.nombre} </div>
                                            <div className="text-start"> {singleCrea.cargo} </div>
                                            <div className="text-start">
                                                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-decoration-none">
                                                     <LogoRedes msg="github"/> Github
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    )   
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    if (msg==="Actualizaciones") {
        return(
            <div className="Secciones w-50">
                <div className="h-500 p-4 bg-white mx-3 shadow-lg rounded-4">
                    <h4 className="text-primary p-3">{msg}</h4>
                    <div className="overflow-auto h-400">
                        <Notice />
                        <Notice />
                        <Notice />
                        <Notice />
                        <Notice />
                        <Notice />
                        <Notice />
                        <Notice />
                        <Notice />
                        <Notice />
                    </div>
                </div>
            </div>
        )
    }
}

export default Secciones