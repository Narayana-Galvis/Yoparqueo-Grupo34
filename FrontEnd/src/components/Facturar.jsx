import BotonCancelar from "./BotonCancelar";

export default function Facturar() {


    return (
        <div className="FacturarModal">
            <div className="modal fade" id="facturaModal" tabindex="-1" aria-labelledby="facturaModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content p-3">
                        <div className="modal-header p-1">
                            <h3 className="text-primary m-0">Facturar</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-1">
                            <div className="container-fluid p-1">
                                <form  className="row g-2">
                                    <div className="row">
                                        <div className="col-md-12 text-center">
                                            <p className="m-0">Régimen simplificado<br/>
                                            Nombre representante: Leo Parqueo <br/>
                                            Nit: 900532084 <br/>
                                            Dirección: cra89 #31-68 <br/>
                                            Teléfono: 3006183669</p>
                                        </div>
                                        <hr/>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <span className="text-muted">Placa</span>
                                                <p className="m-0 fs-6 fw-bolder" id="facPlaca"></p>
                                                <hr/>
                                            </div>
                                            <div className="col-md-6">
                                                <span className="text-muted">Fecha de ingreso</span>
                                                <p className="m-0 fs-6 fw-bolder">24/09/2021</p>
                                                <hr/>
                                            </div>
                                            <div className="col-md-6">
                                                <span className="text-muted">Hora de ingreso</span>
                                                <p className="m-0 fs-6 fw-bolder">15:17</p>
                                                <hr/>
                                            </div>
                                            <div className="col-md-6">
                                                <span className="text-muted">Fecha de salida</span>
                                                <p className="m-0 fs-6 fw-bolder">24/09/2021</p>
                                                <hr/>
                                            </div>
                                            <div className="col-md-6">
                                                <span className="text-muted">Hora de salida</span>
                                                <p className="m-0 fs-6 fw-bolder">16:17</p>
                                                <hr/>
                                            </div>
                                            <div className="col-md-6">
                                                <span className="text-muted">Precio hora/Fracción</span>
                                                <p className="m-0 fs-6 fw-bolder">$4.000</p>
                                                <hr/>
                                            </div>
                                            <div className="col-md-6">
                                                <span className="text-muted">Tiempo Facturado</span>
                                                <p className="m-0 fs-6 fw-bolder">01:00 hora(s)</p>
                                                <hr/>
                                            </div>
                                            <div className="col-md-12">
                                                <span className="text-muted">Total</span>
                                                <p className="m-0 fs-6 fw-bolder">$4.000</p>
                                            </div>
                                            <div className="modal-footer col-12 d-flex justify-content-end p-1">
                                                <BotonCancelar />
                                                <button type="submit" className="btn btn-primary bg-primary text-white rounded-pill" data-bs-dismiss="modal">Imprimir factura</button>
                                            </div>
                                        </div>
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