
export default function PanelCorto({msg}) {

    function actual() {
        var fecha=new Date(); //Actualizar fecha.
        var hora=fecha.getHours(); //hora actual
        var minuto=fecha.getMinutes(); //minuto actual
        var segundo=fecha.getSeconds(); //segundo actual
        if (hora<10) { //dos cifras para la hora
        hora="0"+hora;
        }
        if (minuto<10) { //dos cifras para el minuto
        minuto="0"+minuto;
        }
        if (segundo<10) { //dos cifras para el segundo
        segundo="0"+segundo;
        }
        //ver en el recuadro del reloj:
        var mireloj = hora+" : "+minuto+" : "+segundo;
        return mireloj;
    }
    function actual2(){
      var fecha= new Date();
      var sem=fecha.getDay();
      var dia=fecha.getDate();
      var mes= fecha.getUTCMonth();
      var año= fecha.getFullYear();
      switch (sem) {
        case 1:
            sem="lunes"
          break;
        case 2:
            sem="Martes"
          break;
        case 3:
            sem="Miercoles"
          break;
        case 4:
            sem="Jueves"
          break;
        case 5:
            sem="Viernes"
          break;
        case 6:
            sem="Sabado"
          break;
        case 0:
            sem="Domingo"
          break;
    
        default:
          break;
      }
      if (dia<10) { //dos cifras para la hora
      dia="0"+dia;
      }
      switch (mes) {
        case 0:
            mes="enero"
          break;
        case 1:
            mes="febrero"
          break;
        case 2:
            mes="marzo"
          break;
        case 3:
            mes="abril"
          break;
        case 4:
            mes="mayo"
          break;
        case 5:
            mes="junio"
          break;
        case 6:
            mes="julio"
          break;
        case 7:
            mes="agosto"
          break;
        case 8:
            mes="septiembre"
          break;
        case 9:
            mes="octubre"
          break;
        case 10:
            mes="nobiembre"
          break;
        case 11:
            mes="diciembre"
          break;
    
        default:
          break;
      }
      var mifecha= sem+", "+dia+" de "+mes+" de "+año
      return mifecha
    }
    function actualizar() { //función del temporizador
        var mihora=actual(); //recoger hora actual
        var mireloj=document.getElementsByName("reloj"); //buscar elemento reloj
        mireloj.forEach(element => {
          element.innerHTML=mihora; //incluir hora en elemento
        });
        var midate=actual2();
        var mifecha=document.getElementsByName("fecha");
        mifecha.forEach(element => {
          element.innerHTML=midate;
        });
        
    }
    setInterval(actualizar,1000);

    if (msg==="Date") {
        return(
            <div className="item-panel mx-3 flex-grow-1 text-center rounded-20">
                <div className="bg-white rounded-20 py-3 h-130 justify-content-center d-flex flex-column">
                    <div name="fecha">fecha</div>
                    <div className="fuente-reloj" name="reloj">hora</div>
                </div>
            </div>
        )
    }
    if (msg==="Carro") {
        return(
            <div className="item-panel mx-3 flex-grow-1 text-center rounded-20">
                <div className="bg-success text-white rounded-20 py-3 h-130 justify-content-center d-flex flex-column">
                    <div>Celdas disponibles Carro</div>
                    <div className="fuente-vehiculo"><i className="fas fa-car"></i>9/15</div>
                </div>
            </div>
        )
    }
    if (msg==="Fraccion") {
        return(
            <div className="item-panel mx-3 flex-grow-1 text-center rounded-20">
                <div className="bg-success text-white rounded-20 py-3 h-130 justify-content-center d-flex flex-column">
                    <div>Precio fraccion-hora</div>
                    <div className="fuente-vehiculo"><i className="fas fa-warehouse"></i> $ 3.000</div>
                </div>
            </div>
        )
    }
    if (msg==="Moto") {
        return(
            <div className="item-panel mx-3 flex-grow-1 text-center rounded-20">
                <div className="bg-info text-white rounded-20 py-3 h-130 justify-content-center d-flex flex-column">
                    <div>Celdas disponibles Moto</div>
                    <div className="fuente-vehiculo"><i className="fas fa-motorcycle"></i>9/15</div>
                </div>
            </div>
        )
    }
    if (msg==="Pico") {
        return(
            <div className="item-panel mx-3 flex-grow-1 text-center rounded-20">
                <div className="bg-info text-white rounded-20 py-3 h-130 justify-content-center d-flex flex-column">
                    <div>Pico y placa hoy</div>
                    <div className="fuente-vehiculo">0-9-1</div>
                </div>
            </div>
        )
    }
    if (msg==="Placa") {
        return(
            <div className="item-panel mx-3 flex-grow-1 text-center rounded-20">
                <div className="bg-warning rounded-20 py-3 h-130 justify-content-center d-flex flex-column" id="placa">
                    <form>
                        <div className="ingresar-placa">
                            <input type="text" id="consultar-placa" name="consultar-placa" required minlength="" maxlength="" size="" placeholder="Placa"/>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary text-dark rounded-pill mx-1" id="ingresarVehiculo"  data-bs-toggle="modal" data-bs-target="#ingresarVehiculoModal">Ingresar</button>
                            <button  className="btn btn-secondary bg-secondary text-white rounded-pill  align-middle" id="facturarModal" data-bs-toggle="modal" data-bs-target="#facturaModal">
                                <span>Facturar</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
