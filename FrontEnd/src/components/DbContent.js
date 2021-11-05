function DbContent() {
    return (
        <div className="DbContent">
            <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade active show" id="v-pills-TabPrincipal" role="tabpanel" aria-labelledby="v-pills-TabPrincipal-tab">
                    <div className="d-flex flex-wrap px-4 py-5">
                        <b>tablero principal</b>
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-Estadisticas" role="tabpanel" aria-labelledby="v-pills-Estadisticas-tab">
                    <p><strong>This is some placeholder content the Profile tab's associated content.</strong> Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
                </div>
                <div className="tab-pane fade" id="v-pills-Reservas" role="tabpanel" aria-labelledby="v-pills-Reservas-tab">
                    <div className="d-flex flex-wrap px-4 py-5">
                        <b>Reservas</b>
                    </div>
                    <calendario/>
                </div>
                <div className="tab-pane fade" id="v-pills-Config" role="tabpanel" aria-labelledby="v-pills-Config-tab">
                        <div className="d-flex justify-content-center">
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