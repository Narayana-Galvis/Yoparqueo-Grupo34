import BotonReservas from "./BotonReservas";
import BotonCancelar from "./BotonCancelar"
import Logo from "./Logo";

function Reservar() {
    const msg="submit"
    return(
        <div className="Reservar">
            <div className="modal fade" id="reservaParcial" tabindex="-1" aria-labelledby="reservaparcialModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content p-2">
                        <div className="modal-header d-flex flex-column">
                            <h3 className="text-primary">Haz tu reserva</h3>
                            <p className="m-0">Reserva valida solo por 15 minutos</p>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-12 text-center mb-2">
                                        <Logo msg="home"/>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <label for="#rservarPlaca" className="form-label">Placa del vehiculo</label>
                                        <input v-model="reserva.placa" type="text" className="form-control" id="reservarPlaca" required placeholder="Placa Carro"/>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <label for="#reservarCedula" className="form-label">cedula</label>
                                        <input v-model="reserva.cedula" type="text" className="form-control" id="reservarCedula" required placeholder="Usuario"/>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <label for="#reservarCel" className="form-label">Celular</label>
                                        <input v-model="reserva.celular" type="text" className="form-control" id="reservarCel" required placeholder="Celular"/>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <label for="#reservarFecha" className="form-label">Fecha <p name="fecha2"></p></label>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <label for="#reservarHoraI" className="form-label">Hora de Inicio <p name="reloj2"></p></label>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <label for="#reservarHoraF" className="form-label">Hora Fin de la reserva <p name="reloj1"></p></label>
                                    </div>
                                    <div>
                                        <p className="text-primary">Recuerda llegar en 15 minutos</p>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer justify-content-center">
                                <BotonCancelar />
                                <BotonReservas msg={msg}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reservar