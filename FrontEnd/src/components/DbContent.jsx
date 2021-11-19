function DbContent() {
    return (
        <div className="DbContent">
            <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade active show" id="v-pills-TabPrincipal" role="tabpanel" aria-labelledby="v-pills-TabPrincipal-tab">
                    <div className="d-flex flex-wrap px-4 py-5">
                        <b>tablero principal</b>
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-Casillero" role="tabpanel" aria-labelledby="v-pills-Casillero-tab">
                    <div className="d-flex flex-wrap px-4 py-5">
                        <b>Casillero</b>
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-Config" role="tabpanel" aria-labelledby="v-pills-Config-tab">
                        <div className="d-flex justify-content-center px-4 py-5">
                        <div className="w-85">
                            <b>Configuracion</b>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default DbContent