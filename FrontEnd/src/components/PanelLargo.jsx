import { useState } from "react";
import PanelVehiculo from "./PanelVehiculo";

export default function PanelLargo({msg, celdasCarro, celdasMoto}) {
    
    const [vehiculo, setVehiculo] = useState(msg)

    const cambioCarro=()=>{
        
        setVehiculo("Carro")
        
    }
    const cambioMoto=()=>{ 

        setVehiculo("Moto")
        
    }

    return (
        <div className="flex-grow-1">
            <div v-if="nom=='Plargo'" className="contenedor-panel-largo bg-white rounded-20 mt-4">
                <div id="Change" className="d-flex justify-content-end m-2 pt-2">
                    <ul id="selector">
                    <li>VER</li>
                    <li className="text-secondary">
                        <button onClick={cambioCarro} className="border-0">
                            <i className="text-secondary fas fa-car"></i>
                        </button>
                    </li>
                    <li className="text-secondary">
                        <button onClick={cambioMoto} className="border-0">
                            <i className="text-secondary fas fa-motorcycle"></i>
                        </button>
                    </li>
                    </ul>
                </div>
                <PanelVehiculo msg={vehiculo} celdasCarro={celdasCarro} celdasMoto={celdasMoto} />
            </div>
        </div>
    )
}
