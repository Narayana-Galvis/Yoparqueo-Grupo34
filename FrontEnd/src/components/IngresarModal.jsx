import BotonCancelar from "./BotonCancelar";

export default function IngresarModal() {
    return (
        <div className="IngresarModal">
            <div v-if="msg=='Dashboard'" class="modal fade" id="ingresarVehiculoModal" tabindex="-1" aria-labelledby="ingresarVehiculoModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content p-3">
                        <div class="modal-header">
                            <h3 class="text-primary">Ingresar Vehiculo</h3>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form>
                            <div class="modal-body">
                                <div class="mb-3">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <span class="text-muted">Placa</span>
                                            <p className="m-0 fs-4 fw-bolder">FXM257</p>
                                            <hr/>
                                        </div>
                                        <div class="col-md-12">
                                            <span class="text-muted">Precio hora/Fracción</span>
                                            <p className="m-0 fs-4 fw-bolder">$4.000</p>
                                            <hr/>
                                        </div>
                                        <div class="col-md-12">
                                            <span class="text-muted">Hora de ingreso</span>
                                            <p className="m-0 fs-4 fw-bolder">15:17</p>
                                        </div>
                                    </div>
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
